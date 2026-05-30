/* ══════════════════════════════════════════════
   DEBOUNCED BATCH SYNC
   Collects all writes within an 800ms window
   then sends them as a single upsert.
   Old v1 sent one request per localStorage write
   — rapid task-checking caused 10+ parallel
   requests; now it's always just 1.
══════════════════════════════════════════════ */
const _pendingWrites = new Map(); // key → parsed value
let _batchTimer     = null;
let _retryTimer     = null;
const BATCH_DELAY   = 800;  // ms — tune if needed
const RETRY_DELAY   = 5000; // ms

function queueSync(key, rawValue) {
  if (!_syncEnabled) return;
  try {
    const value = typeof rawValue === 'string' ? JSON.parse(rawValue) : rawValue;
    _pendingWrites.set(key, value);
    clearTimeout(_batchTimer);
    _batchTimer = setTimeout(flushBatch, BATCH_DELAY);
  } catch (e) {
    // rawValue wasn't valid JSON — store as-is (shouldn't happen in this app)
    _pendingWrites.set(key, rawValue);
    clearTimeout(_batchTimer);
    _batchTimer = setTimeout(flushBatch, BATCH_DELAY);
  }
}

async function flushBatch() {
  clearTimeout(_batchTimer);
  if (!_syncEnabled || _pendingWrites.size === 0) return;

  const session = await sbGetSession();
  if (!session) return;

  // Snapshot pending writes and clear the queue optimistically
  const snapshot = new Map(_pendingWrites);
  _pendingWrites.clear();

  const rows = [];
  snapshot.forEach((value, key) => {
    rows.push({ user_id: session.user.id, key, value,
                updated_at: new Date().toISOString() });
  });

  try {
    const { error } = await sb
      .from('planner_data')
      .upsert(rows, { onConflict: 'user_id,key' });

    if (error) throw error;
  } catch (e) {
    // Write failed — re-queue all rows and schedule a retry
    snapshot.forEach((value, key) => {
      if (!_pendingWrites.has(key)) _pendingWrites.set(key, value); // don't overwrite newer edits
    });
    scheduleRetry();
  }
}

function scheduleRetry() {
  clearTimeout(_retryTimer);
  _retryTimer = setTimeout(() => {
    if (navigator.onLine) flushBatch();
    else scheduleRetry(); // still offline — keep trying
  }, RETRY_DELAY);
}

// Flush automatically when the network comes back
window.addEventListener('online', () => {
  if (_pendingWrites.size > 0) flushBatch();
});

// Best-effort flush before the tab closes
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && _pendingWrites.size > 0) flushBatch();
});

/* ── Intercept localStorage to auto-sync all app writes ── */
(function () {
  const _orig = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key, value) {
    _orig.call(this, key, value);
    if (this === localStorage && _syncEnabled &&
       (key.startsWith('sp-') || key.startsWith('wg-'))) {
      queueSync(key, value); // batched, non-blocking
    }
  };
})();