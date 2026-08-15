# Vexo

A private, local-first planner for tasks, goals, projects, schedules, resources, and daily reflection.

Vexo uses vanilla HTML, CSS, and JavaScript and can run as a static web app or a native desktop app through Tauri. It has no accounts, cloud database, analytics, or required network service.

The web and mobile presentation layers are intentionally separated:

- `css/web.css` contains desktop and browser layout behavior.
- `css/mobile-app.css` contains the touch-first Android/PWA layout.
- Shared feature logic remains under `js/`, so both variants use the same data and backup format.
- Use `?layout=web` or `?layout=mobile` while developing to force either presentation.

## Features

- Daily tasks with categories, drag-and-drop ordering, notes, start/end times, and a focus timer
- Weekly goals and an editable milestone plan
- Project board with To Do, In Progress, and Done columns
- Daily journal with searchable history
- Personal resource library with tags and search
- Mood, streak, XP, activity heatmap, statistics, and end-of-day summaries
- Complete JSON backup and restore, plus Excel export
- Automatic on-device IndexedDB recovery snapshots

## Storage

Planner data is written to `localStorage` immediately and mirrored to IndexedDB for local recovery. Nothing is uploaded. History is retained until the user resets or clears it from Settings.

JSON exports include every Vexo storage key, including older history and data added by future versions.

## Project structure

```text
Vexo/
├── index.html              App shell
├── css/                    Component and view styles
├── js/                     Planner features and local persistence
│   └── main/               App initialization, tabs, export, and summaries
├── public/                 Local static assets
├── src-tauri/              Native desktop wrapper
├── copy-dist.js            Creates the desktop web bundle
├── manifest.json           PWA metadata
└── vercel.json             Optional static hosting configuration
```

## Development

```bash
npm install
npm run dev
```

## Desktop build

```bash
npm install
npm run build
```

The generated installer is placed under `src-tauri/target/release/bundle/`.

## Android build from PowerShell

Android Studio's interface is not required, but its Android SDK, platform tools,
build tools, NDK, and bundled JDK must be installed. Windows Developer Mode must
also be enabled so Tauri can create native-library symbolic links.

Initialize the generated Android project once:

```powershell
cd E:\AI\Vexo
npm install
npm run android:init
```

Build an optimized ARM64 test APK, regenerate the Android launcher icon from
`favicon.ico`, align it, sign it with Android's local debug certificate, and
verify the signature:

```powershell
npm run android:package:test
```

The installable result is `Vexo-android-test.apk` in the project root. ARM64 is
used because it covers modern physical Android phones and avoids the very large
multi-architecture debug package.

Install or update it on a USB-debugging-enabled phone:

```powershell
& "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe" install -r "E:\AI\Vexo\Vexo-android-test.apk"
```

If installation appears stuck or reports a signature conflict, remove the old
copy first and reinstall. This deletes that installed copy's local app data:

```powershell
& "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe" uninstall com.yuminoza.vexo
& "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe" install "E:\AI\Vexo\Vexo-android-test.apk"
```

The debug certificate is suitable only for local testing. A Play Store AAB must
be signed with a permanent private release key.
