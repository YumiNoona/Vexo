const url = window.SUPABASE_URL || '';
const anon = window.SUPABASE_ANON || '';
const hasSupabase = url && anon && !url.includes('YOUR_PROJECT_ID') && !anon.includes('YOUR_ANON_PUBLIC_KEY');

if (!hasSupabase) {
  location.href = 'index.html';
}

const { createClient } = window.supabase;
const sb = hasSupabase ? createClient(url, anon, {
  auth: { persistSession: true, autoRefreshToken: true }
}) : null;

let currentMode = 'signin';

function setMode(mode) {
  currentMode = mode;
  document.getElementById('togglePill').classList.toggle('right', mode === 'signup');
  document.getElementById('btn-signin').classList.toggle('active', mode === 'signin');
  document.getElementById('btn-signup').classList.toggle('active', mode === 'signup');
  document.getElementById('confirmWrap').style.display = mode === 'signup' ? 'block' : 'none';
  document.getElementById('btnLabel').textContent = mode === 'signin' ? 'Sign In' : 'Create Account';
  document.getElementById('password').setAttribute('autocomplete', mode === 'signup' ? 'new-password' : 'current-password');
  document.getElementById('switchWrap').innerHTML = mode === 'signin'
    ? `Don't have an account? <span class="switch-link" onclick="setMode('signup')">Create one</span>`
    : `Already have an account? <span class="switch-link" onclick="setMode('signin')">Sign in</span>`;
  clearMsg();
}

function showMsg(txt, type) {
  const el = document.getElementById('authMsg');
  el.textContent = txt; el.className = `msg show ${type}`;
}
function clearMsg() {
  const el = document.getElementById('authMsg');
  el.className = 'msg'; el.textContent = '';
}
function setLoading(on) {
  const b = document.getElementById('submitBtn');
  b.classList.toggle('loading', on); b.disabled = on;
}
function showSuccess(email) {
  document.getElementById('successMsg').textContent =
    `Welcome${email ? ', ' + email.split('@')[0] : ''} ✦`;
  document.getElementById('successOverlay').classList.add('show');
  setTimeout(() => { location.href = 'index.html'; }, 1300);
}

async function pushLocalToCloud(userId) {
  const rows = []; const ts = new Date().toISOString();
  ['sp-phases','sp-sched','sp-tasks','sp-streak','sp-settings','sp-kanban','sp-resources','sp-questions-v2']
    .forEach(k => { const v = localStorage.getItem(k); if (v) try { rows.push({ user_id:userId, key:k, value:JSON.parse(v), updated_at:ts }); } catch(e){} });
  for (let i = 0; i < 90; i++) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const dk = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    ['sp-d-','sp-j-','sp-start-times-'].forEach(p => {
      const v = localStorage.getItem(p+dk);
      if (v) try { rows.push({ user_id:userId, key:p+dk, value:JSON.parse(v), updated_at:ts }); } catch(e){}
    });
  }
  if (rows.length) await sb.from('planner_data').upsert(rows, { onConflict:'user_id,key' });
}

async function handleSubmit(e) {
  e.preventDefault(); clearMsg();
  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value;
  const conf  = document.getElementById('confirm').value;

  if (currentMode === 'signup') {
    if (pass !== conf)  { showMsg("Passwords don't match.", 'error'); return; }
    if (pass.length < 6){ showMsg('Password must be at least 6 characters.', 'error'); return; }
  }

  setLoading(true);
  try {
    if (currentMode === 'signin') {
      const { error } = await sb.auth.signInWithPassword({ email, password: pass });
      if (error) throw error;
      showSuccess(email);
    } else {
      const { data, error } = await sb.auth.signUp({ email, password: pass });
      if (error) throw error;
      if (data.session) {
        await pushLocalToCloud(data.session.user.id);
        showSuccess(email);
      } else {
        setLoading(false);
        showMsg('Account created! Check your email to confirm, then sign in.', 'success');
        setTimeout(() => setMode('signin'), 3500);
      }
    }
  } catch (err) {
    setLoading(false);
    const map = {
      'Invalid login credentials': 'Incorrect email or password.',
      'Email not confirmed':        'Please confirm your email first.',
      'User already registered':    'That email already has an account.',
    };
    showMsg(map[err.message] || err.message, 'error');
  }
}

(async () => {
  if (!sb) return;
  const { data: { session } } = await sb.auth.getSession();
  if (session) location.href = 'index.html';
})();