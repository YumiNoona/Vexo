/* ═══════════════════════════════════════════════
   SUPABASE — Auth + Real-time Cloud Sync  v2
   ───────────────────────────────────────────────
   Improvements over v1:
   • Debounced batch upserts — N rapid saves = 1
     round-trip per 800 ms burst (not N requests)
   • Offline retry queue — failed writes re-queued
     and flushed automatically when back online
   • Real-time cross-device subscription — changes
     on phone instantly appear on laptop
   • Fixed date format — pushAllToCloud now uses
     the same non-padded format as dkey() so keys
     actually match what's stored in localStorage
   • sp-mood- keys included in initial push
     (were silently skipped before)
   • Safer JSON handling — parse errors no longer
     silently drop writes
   • Pending writes win — real-time update for a
     key you're mid-editing is safely ignored
═══════════════════════════════════════════════ */

// Injected by build.js from Vercel env vars:
//   SUPABASE_URL      → window.SUPABASE_URL
//   SUPABASE_ANON_KEY → window.SUPABASE_ANON

/* ── Init client ─────────────────────────────── */
const url = window.SUPABASE_URL || '';
const anon = window.SUPABASE_ANON || '';
const hasSupabase = url && anon && !url.includes('YOUR_PROJECT_ID') && !anon.includes('YOUR_ANON_PUBLIC_KEY');

let sb = null;
if (hasSupabase) {
  try {
    const { createClient } = window.supabase;
    sb = createClient(url, anon, {
      auth: { persistSession: true, autoRefreshToken: true }
    });
    window.SUPABASE_ENABLED = true;
  } catch (err) {
    console.error("Failed to initialize Supabase:", err);
    window.SUPABASE_ENABLED = false;
  }
} else {
  window.SUPABASE_ENABLED = false;
}

let _syncEnabled = false; // only enabled after initial pull

/* ══════════════════════════════════════════════
   AUTH HELPERS
══════════════════════════════════════════════ */
async function sbGetSession() {
  const { data: { session } } = await sb.auth.getSession();
  return session;
}
async function sbSignOut() {
  _syncEnabled = false;
  if (sb) {
    flushBatch();
    try { await sb.auth.signOut(); } catch(e) {}
  }
  localStorage.removeItem('sp-skip-login');
  window._sbUserEmail = null;
  location.href = 'login.html';
}
async function sbClearUserData() {
  if (!sb) return;
  const session = await sbGetSession();
  if (!session) return;
  try {
    // Delete all rows for this user EXCEPT sp-streak and sp-settings
    await sb
      .from('planner_data')
      .delete()
      .eq('user_id', session.user.id)
      .not('key', 'in', '("sp-streak","sp-settings")');
  } catch(e) {
    console.error("Failed to clear cloud data", e);
  }
}