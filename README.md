<h1 align="center">✦ Vexo</h1>
<p align="center"><strong>The All-In-One UX Study Planner & Productivity Suite</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Vanilla-HTML%2FJS%2FCSS-E34F26?style=flat-square&logo=html5&logoColor=white" alt="Vanilla HTML/JS/CSS" />
  <img src="https://img.shields.io/badge/Tauri-Desktop%20App-FFC131?style=flat-square&logo=tauri&logoColor=white" alt="Tauri" />
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square" alt="Build" />
  <img src="https://img.shields.io/badge/Sync-Cross--Device-blueviolet?style=flat-square" alt="Sync" />
  <img src="https://img.shields.io/badge/Mode-Local--Only-success?style=flat-square" alt="Local Mode" />
</p>

---

## 📖 About

**Vexo** is a UX study companion combining questions, resource library, daily journal, portfolio kanban, and goals/roadmap into one desktop app. Built with vanilla HTML/CSS/JS, packaged as a native Windows EXE via Tauri (~5 MB).

> **☁️ Cloud Sync & Local-First** — Works fully offline with localStorage. Optional Supabase login for cross-device sync.

### 🏗️ Architecture

- **Vanilla Core** — Pure HTML, CSS, JavaScript. No frameworks.
- **Tauri Desktop** — Native Windows EXE via Tauri v2, auto-update via GitHub Releases.
- **Local-First Storage** — All progress saved to localStorage instantly. Supabase sync is additive.
- **Gamification** — XP & level system (level = floor(sqrt(xp / 100)) + 1).

---

## ✨ Features

| Area | What it does |
|---|---|
| **Today Dashboard** | Task tracking with drag-and-drop, study timer, streak counter, daily mood, XP |
| **Questions** | 340+ MCQ across 19 UX topics with streak-based XP, level progression, visual questions |
| **Resource Library** | 94 curated UX resources — Figma, typography, icons, prototyping, TED talks. Filter by tag or add your own |
| **Daily Journal** | Three reflection prompts, search past entries |
| **Portfolio Kanban** | To Do / In Progress / Done columns for case studies |
| **Goals & Roadmap** | Weekly goals + 3-month study roadmap with color-coded phases |
| **Stats & Heatmap** | 7/30-day stats, activity heatmap (365 days), day log |
| **End-of-Day Summary** | Gamified completion ring, accuracy report, reflection recap |
| **Export / Import** | Full JSON export/import of all data (tasks, phases, kanban, resources, XP, questions, journal, mood, notes) |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Vanilla JS, HTML5, CSS3 |
| **Desktop** | Tauri v2 (Rust + WebView2) |
| **Backend / Auth** | Supabase |
| **Database** | PostgreSQL (via Supabase) + localStorage |
| **CI/CD** | GitHub Actions (MSI build on tag push) |

---

## 📁 Project Structure

```
Vexo/
├── index.html              # App shell (SPA)
├── login.html              # Auth page (Supabase)
├── landing.html            # Marketing / download page
├── favicon.ico
├── manifest.json
├── vercel.json
├── copy-dist.js            # Copies web files to dist/ for Tauri
├── build.js                # Injects Supabase env vars at deploy
├── env-config.js           # Auto-generated (gitignored)
│
├── css/                    # 20 CSS files (tokens, tabs, header,
│                           #   modal, stats, kanban, journal,
│                           #   resources, roadmap, eod, settings,
│                           #   mobile, login, landing, ...)
│
├── js/
│   ├── config.js           # Constants (phases, colors, tips, state)
│   ├── helpers.js          # Utility functions
│   ├── storage.js          # localStorage CRUD
│   ├── audio.js            # Sound system
│   ├── header.js           # Date nav, header updates
│   ├── today.js            # Today view rendering
│   ├── tasks.js            # Task CRUD, drag-and-drop
│   ├── timer.js            # Task-level timer
│   ├── xp.js               # XP/level system
│   ├── schedule.js         # Schedule blocks
│   ├── stats.js            # Stats page + heatmap
│   ├── kanban.js           # Portfolio kanban
│   ├── journal.js          # Reflection journal
│   ├── resources.js        # 94 resources, search, tag filter
│   ├── weekly-goals.js     # Weekly goals
│   ├── settings.js         # Settings page
│   │
│   ├── questions/          # 28 category data files + state/ui/actions
│   │   ├── visual-design.js, ux-laws.js, gestalt.js, …
│   │   ├── accessibility-theory.js, typography-theory.js, …
│   │   ├── visq-*.js       # Visual questions (5 files)
│   │   ├── ux-research-*.js  # By difficulty
│   │   ├── questions-data.js # Combines all categories + LESSON_MAP
│   │   ├── question-state.js # Session state, save/load, dedup
│   │   ├── question-ui.js    # Rendering, animations
│   │   └── question-actions.js # Answer handling, XP awards
│   │
│   ├── main/
│   │   ├── app.js          # Init, multi-tab sync, data pruning
│   │   ├── tabs.js         # Tab switching (6 tabs)
│   │   ├── roadmap.js      # Phase/week CRUD
│   │   ├── eod-summary.js  # End-of-day summary modal
│   │   ├── share-card.js   # Canvas PNG download
│   │   ├── export.js       # JSON export/import (all keys)
│   │   ├── toasts.js       # Toast + undo-toast system
│   │   ├── timer-bar.js    # Persistent timer bar
│   │   └── palette.js      # Command palette (Ctrl+K)
│   │
│   ├── supabase/
│   │   ├── client.js       # Init, auth helpers, sign-out
│   │   ├── sync.js         # Debounced batch upsert + retry
│   │   ├── realtime.js     # Cross-device subscription
│   │   └── data.js         # Pull all on login, app init
│   │
│   └── login/
│       ├── scene.js        # Three.js 3D scene
│       └── auth.js         # Sign-in/sign-up/skip-login
│
├── src-tauri/
│   ├── Cargo.toml          # Rust deps (tauri, updater, fs)
│   ├── tauri.conf.json     # Window, bundler, updater config
│   ├── src/lib.rs          # Plugin registration
│   ├── src/main.rs         # Entry point
│   ├── icons/              # App icons (donut 🍩)
│   └── capabilities/default.json
│
└── .github/workflows/
    └── release.yml         # MSI build on v* tag push
```

---

## 🚀 Desktop Build

```bash
npm install
npx tauri build --bundles msi
```

The MSI installer will be in `src-tauri/target/release/bundle/msi/`.

### Auto-Update

Tag a commit with `v*` and push:
```bash
git tag v1.0.1
git push origin v1.0.1
```

GitHub Actions builds the MSI and uploads it to the release. The app checks for updates on launch.

---

## ☁️ Cloud Sync Setup (Optional)

See `SETUP.md` to connect your own Supabase project.

---

## 📝 License

MIT — see [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>Built with 💙 by Veil</strong>
</p>
