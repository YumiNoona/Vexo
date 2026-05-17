# 🚀 Setup Guide — Study Planner with Cloud Sync

## What you get after setup
- **Login page** — animated, beautiful sign-in / sign-up
- **Cross-device sync** — edit on PC, open laptop at night, all data is there
- **Hosted on Vercel** — shareable URL, works on any device / browser
- **Supabase database** — all tab data (Today, Goals, Learn, Portfolio, Plan, Profile) synced

---

## Step 1 — Create your Supabase project

1. Go to **https://supabase.com** and sign up (free)
2. Click **New project**, give it a name (e.g. "study-planner"), choose a region close to India
3. Wait ~2 min for the project to spin up

---

## Step 2 — Create the database table

1. In your Supabase dashboard, click **SQL Editor** (left sidebar)
2. Paste and run this SQL:

```sql
-- Main data table — one row per user per data key
CREATE TABLE planner_data (
  user_id    uuid    NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  key        text    NOT NULL,
  value      jsonb   NOT NULL,
  updated_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, key)
);

-- Row-level security — users can only see/edit their own data
ALTER TABLE planner_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users own their data"
  ON planner_data FOR ALL
  USING      (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

3. Click **Run** — you should see "Success. No rows returned."

---

## Step 3 — Get your API keys

1. Go to **Settings → API** in your Supabase project
2. Copy:
   - **Project URL** — looks like `https://abcxyz.supabase.co`
   - **anon public key** — long string starting with `eyJ...`

---

## Step 4 — Add keys to the app

Open **two files** and replace the placeholder values:

### `supabase.js` (line 8–9)
```js
const SUPABASE_URL  = 'https://YOUR_PROJECT_ID.supabase.co';  // ← paste your URL
const SUPABASE_ANON = 'YOUR_ANON_PUBLIC_KEY';                  // ← paste your anon key
```

### `login.html` (line ~170)
```js
const SUPABASE_URL  = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON = 'YOUR_ANON_PUBLIC_KEY';
```

> The anon key is safe to expose — Supabase Row Level Security ensures
> each user can only access their own data.

---

## Step 5 — (Optional) Disable email confirmation

By default Supabase requires users to confirm their email. To skip this
for a private app:

1. Go to **Authentication → Providers → Email**
2. Turn off **"Confirm email"**
3. Save

This way signing up works instantly.

---

## Step 6 — Deploy to Vercel

### Option A — Drag & drop (easiest)
1. Go to **https://vercel.com** and sign up with GitHub
2. Click **Add New → Project**
3. Choose **"Deploy without a repository"** → drag and drop the entire project folder
4. Vercel gives you a URL like `https://study-planner-xyz.vercel.app`
5. Done ✓

### Option B — GitHub (recommended for easy updates)
1. Push this folder to a GitHub repo
2. Import the repo in Vercel
3. Every `git push` auto-deploys

---

## How sync works

| Action | What happens |
|--------|-------------|
| Open app on any device | Pulls all your data from Supabase → loads into localStorage |
| Check off a task | Saved locally immediately + synced to Supabase in background |
| Open laptop at night | Pulls fresh data on load → everything is up to date |
| Edit schedule on PC | Syncs to cloud → laptop shows the same schedule |
| Offline | Uses cached localStorage — syncs when back online |

**All tabs are synced:**
Today · Goals · Learn (Journal + Flashcards + Library) · Portfolio · Plan · Profile / Settings

---

## Signing in on a new device

1. Open your Vercel URL
2. Sign in with your email + password
3. The app pulls all your data from Supabase — nothing to import/export

---

## Troubleshooting

**Login shows an error / nothing happens**
→ Double-check the `SUPABASE_URL` and `SUPABASE_ANON` values in both `supabase.js` and `login.html`

**"Invalid login credentials"**
→ Make sure you created the account first (use "Create Account" tab)

**Data not syncing between devices**
→ Check that the `planner_data` table was created and RLS policies are set

**Blank screen after login**
→ Open browser DevTools → Console — usually a missing API key error

---

## File summary (what was changed)

| File | Change |
|------|--------|
| `supabase.js` | **NEW** — Supabase client, auth, localStorage proxy, sync |
| `login.html` | **NEW** — Animated login / sign-up page |
| `index.html` | Added Supabase CDN + loading overlay |
| `main.js` | Wrapped init in `window.__startApp()` for async startup |
| `settings.js` | Added Sign Out button in Profile settings |
| `vercel.json` | **NEW** — Vercel routing config |

All other files (styles, tabs, components) are unchanged.
