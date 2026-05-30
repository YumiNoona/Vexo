<h1 align="center">✦ Vexo</h1>
<p align="center"><strong>The All-In-One Study Planner & Productivity Suite with Cloud Sync</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Vanilla-HTML%2FJS%2FCSS-E34F26?style=flat-square&logo=html5&logoColor=white" alt="Vanilla HTML/JS/CSS" />
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Hosted-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square" alt="Build" />
  <img src="https://img.shields.io/badge/Sync-Cross--Device-blueviolet?style=flat-square" alt="Sync" />
  <img src="https://img.shields.io/badge/Mode-Local--Only-success?style=flat-square" alt="Local Mode" />
</p>

---

## 📖 About

**Vexo** is a beautifully designed, all-in-one productivity suite built for modern workflows and studying. Rather than juggling separate apps for tasks, timers, notes, and flashcards, Vexo integrates them into a seamless, unified dashboard. 

> **☁️ Cloud Sync & Local-First** — Vexo works flawlessly entirely locally (offline) on your browser, but also offers a seamless Supabase-powered login for cross-device synchronization.

### 🏗️ Architecture Highlights

- **Lightweight Vanilla Core** — Built natively with pure HTML, CSS, and JavaScript. No bulky frameworks.
- **Glassmorphism Design System** — Stunning, animated, and responsive UI built completely custom without heavy CSS libraries.
- **State & Cloud Sync** — Robust local storage strategy that intelligently syncs up with a Supabase PostgreSQL backend when authenticated.
- **Interactive Modals & Palettes** — Keyboard-first navigation, command palettes (`Ctrl+K`), and drag-and-drop mechanics embedded at its core.

---

## ✨ Features

### 📅 Daily & Task Management
| Feature | Description |
|---|---|
| **Today Dashboard** | Drag-and-drop task tracking, integrated Pomodoro timer with auto time-stamping, and progress bars. |
| **Schedule View** | Block out your day with color-coded activity blocks and real-time current block highlighting. |
| **Weekly Goals** | Keep an eye on high-level objectives alongside your daily grind. |

### 🧠 Learning & Questions
| Feature | Description |
|---|---|
| **MCQ Question Deck** | Practice hundreds of UX and design theory questions interactively. |
| **End of Day Summary** | Gamified daily completion ring, performance stats, and quick reflection. |
| **Roadmap & Resources** | Track your study phases and curate a tag-filterable resource library. |

### 🛠️ Developer & Project Tools
| Feature | Description |
|---|---|
| **Portfolio Kanban** | Manage personal projects through a drag-and-drop Kanban board (To Do, In Progress, Done). |
| **Reflection Journal** | Daily structured journaling prompts with a searchable history archive. |

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | Vanilla JS, HTML5, CSS3 | Ultra-fast load times without overhead |
| **Backend / Auth** | Supabase | UUID-based authentication and RLS protected JSON syncing |
| **Database** | PostgreSQL (via Supabase) | Secure `planner_data` JSONB storage |
| **Hosting** | Vercel | Seamless static deployments and global edge delivery |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (for local dev server if desired)
- A free **Supabase** account (for cloud sync features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Vexo.git
cd Vexo
```

2. Run a local development server (e.g., using `npx serve`, VS Code Live Server, or Vite):
```bash
npm run dev
```

3. Open your browser and navigate to the provided localhost URL.

### ☁️ Cloud Sync Setup (Optional)
To enable cross-device sync, follow the instructions in `SETUP.md` to connect your own Supabase project.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <sub>Built with ☕ and obsessive attention to detail</sub>
</p>
