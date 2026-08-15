const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
const items = ['index.html', 'favicon.ico', 'manifest.json', 'public', 'css', 'js'];

// Always build from a clean directory so deleted features cannot survive in
// desktop bundles as stale files.
fs.rmSync(dist, { recursive: true, force: true });

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

for (const item of items) {
  const src = path.join(__dirname, item);
  const dest = path.join(dist, item);
  if (fs.existsSync(src)) {
    copyRecursive(src, dest);
    console.log('Copied:', item);
  }
}
console.log('dist/ ready for Tauri build');
