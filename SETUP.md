# Vexo — Local-Only Mode

Vexo now runs entirely locally with no external database or authentication required.

## How it works

- All data is stored in your browser's `localStorage`
- No account, login, or internet connection needed
- Your data stays on your device — nothing is sent to any server
- Works offline in both web browser and desktop (Tauri) app

## Desktop App (Tauri)

To build the Windows desktop app:

```
npm ci
npx tauri build --bundles msi
```

## Web App

Simply open `index.html` in a browser, or deploy the folder to any static host.
