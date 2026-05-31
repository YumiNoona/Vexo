let xpTotal = 0;
let xpLevel = 1;
let xpProgress = 0;
let xpToNext = 100;

function loadXP() {
  try {
    const d = localStorage.getItem('sp-xp');
    if (d) {
      const parsed = JSON.parse(d);
      xpTotal = parsed.xp || 0;
    }
  } catch(e) {}
  recalcLevel();
}

function saveXP() {
  try { localStorage.setItem('sp-xp', JSON.stringify({ xp: xpTotal })); } catch(e) {}
}

function recalcLevel() {
  xpLevel = Math.floor(Math.sqrt(xpTotal / 100)) + 1;
  const prev = Math.pow(xpLevel - 1, 2) * 100;
  const next = Math.pow(xpLevel, 2) * 100;
  xpToNext = next - prev;
  xpProgress = Math.min(100, Math.floor(((xpTotal - prev) / (next - prev)) * 100));
}

function addXP(amount, source) {
  xpTotal += amount;
  const oldLevel = xpLevel;
  recalcLevel();
  saveXP();
  updateXPDisplay();
  if (xpLevel > oldLevel) {
    showToast(`🎉 Level up! You're now level ${xpLevel}`, 4000);
  }
  if (source) {
    const el = document.getElementById('xpFloat');
    if (el) {
      const float = document.createElement('div');
      float.className = 'xp-float';
      float.textContent = `+${amount} XP`;
      float.style.left = (Math.random() * 60 + 20) + '%';
      el.appendChild(float);
      setTimeout(() => float.remove(), 1200);
    }
  }
}

function updateXPDisplay() {
  const el = document.getElementById('xpDisplay');
  if (el) {
    el.textContent = `Lv ${xpLevel}`;
  }
  const el2 = document.querySelector('#xpDisplayHeader .s-sub');
  if (el2) {
    el2.textContent = `${xpTotal} XP`;
  }
}
