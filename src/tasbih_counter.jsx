import { useState } from "react";

const PHRASES = [
  {
    id: "subhanallah",
    arabic: "سُبْحَانَ اللَّه",
    translit: "SubhanAllah",
    meaning: "Glory be to Allah",
  },
  {
    id: "alhamdulillah",
    arabic: "الْحَمْدُ لِلَّه",
    translit: "Alhamdulillah",
    meaning: "Praise be to Allah",
  },
  {
    id: "allahuakbar",
    arabic: "اللَّهُ أَكْبَر",
    translit: "Allahu Akbar",
    meaning: "Allah is the Greatest",
  },
];

const CSS = `
.tasbih-app {
  --bg-deep: #0b2e24;
  --bg-deep-2: #0e372b;
  --card: #123b2f;
  --card-border: rgba(212, 175, 106, 0.18);
  --gold: #d4af6a;
  --gold-soft: rgba(212, 175, 106, 0.14);
  --rose-1: #ef7b7b;
  --rose-2: #b23a52;
  --cream: #f5efe0;
  --muted: #8fb3a2;

  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(circle at 50% -10%, var(--bg-deep-2), var(--bg-deep) 60%);
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  color: var(--cream);
  padding: clamp(20px, 5vw, 48px) clamp(16px, 5vw, 24px) 0;
}

.tasbih-app *, .tasbih-app *::before, .tasbih-app *::after {
  box-sizing: border-box;
}

.tasbih-app .hero {
  text-align: center;
  max-width: 480px;
  margin-bottom: clamp(20px, 4vw, 32px);
}

.tasbih-app .eyebrow {
  margin: 0 0 6px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-size: 11px;
  color: var(--gold);
  font-weight: 600;
}

.tasbih-app h1 {
  margin: 0 0 8px;
  font-family: 'Amiri', 'Georgia', serif;
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 700;
  letter-spacing: 0.01em;
}

.tasbih-app .sub {
  margin: 0;
  font-size: clamp(13px, 3vw, 15px);
  color: var(--muted);
}

.tasbih-app .tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 480px;
  margin-bottom: 18px;
}

.tasbih-app .tab {
  cursor: pointer;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  padding: 10px 6px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--muted);
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.tasbih-app .tab:hover {
  transform: translateY(-2px);
}

.tasbih-app .tab.active {
  background: linear-gradient(160deg, var(--gold-soft), var(--card));
  border-color: var(--gold);
  color: var(--cream);
}

.tasbih-app .tab-arabic {
  font-family: 'Amiri', serif;
  font-size: clamp(16px, 4vw, 19px);
  line-height: 1.3;
}

.tasbih-app .tab-translit {
  font-size: clamp(10px, 2.6vw, 12px);
  letter-spacing: 0.03em;
}

.tasbih-app .card {
  width: 100%;
  max-width: 480px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: clamp(20px, 5vw, 32px) clamp(16px, 5vw, 28px) clamp(24px, 5vw, 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 60px rgba(41, 159, 104, 0.34);
}

.tasbih-app .meaning {
  margin: 0 0 clamp(18px, 4vw, 26px);
  color: var(--muted);
  font-size: clamp(13px, 3vw, 15px);
  text-align: center;
}

.tasbih-app .heart-wrapper {
  --progress: 0;
  width: clamp(180px, 46vw, 236px);
  height: clamp(180px, 46vw, 236px);
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: conic-gradient(var(--gold) calc(var(--progress) * 1%), rgba(255, 255, 255, 0.08) 0);
  transition: background 0.35s ease;
}

.tasbih-app .heart-btn {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-deep);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(20px, 5vw, 28px);
  -webkit-tap-highlight-color: transparent;
}

.tasbih-app .heart-btn:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 4px;
}

.tasbih-app .heart-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 10px 24px rgba(178, 58, 82, 0.45));
  animation: beat 0.5s ease;
}

.tasbih-app .heart-btn:active .heart-svg {
  transform: scale(0.94);
}

.tasbih-app .heart-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-6%);
}

.tasbih-app .count-number {
  font-family: 'Amiri', serif;
  font-size: clamp(34px, 9vw, 46px);
  font-weight: 700;
  color: #fff;
  line-height: 1;
}

.tasbih-app .count-hint {
  margin-top: 4px;
  font-size: 10px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
}

@keyframes beat {
  0% { transform: scale(1); }
  30% { transform: scale(1.08); }
  55% { transform: scale(0.97); }
  100% { transform: scale(1); }
}

.tasbih-app .progress-label {
  margin-top: clamp(16px, 4vw, 22px);
  font-size: clamp(12px, 3vw, 14px);
  color: var(--muted);
  letter-spacing: 0.02em;
}

.tasbih-app .sets-badge {
  color: var(--gold);
}

.tasbih-app .target-row {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tasbih-app .target-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-right: 2px;
}

.tasbih-app .target-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid var(--card-border);
  background: transparent;
  color: var(--cream);
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.tasbih-app .target-btn:hover {
  border-color: var(--gold);
  background: var(--gold-soft);
}

.tasbih-app .target-input {
  width: 56px;
  text-align: center;
  background: var(--bg-deep);
  border: 1px solid var(--card-border);
  color: var(--cream);
  border-radius: 8px;
  padding: 4px 2px;
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
}

.tasbih-app .target-input:focus {
  outline: none;
  border-color: var(--gold);
}

.tasbih-app .target-input::-webkit-outer-spin-button,
.tasbih-app .target-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.tasbih-app .target-input[type="number"] {
  -moz-appearance: textfield;
}

.tasbih-app .reset-btn {
  margin-top: clamp(18px, 4vw, 24px);
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--card-border);
  color: var(--cream);
  padding: 10px 28px;
  border-radius: 999px;
  font-size: 13px;
  letter-spacing: 0.04em;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.tasbih-app .reset-btn:hover {
  border-color: var(--gold);
  background: var(--gold-soft);
}

.tasbih-app .reset-all {
  margin-top: 16px;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

.tasbih-app .reset-all:hover {
  color: var(--gold);
}

.tasbih-app footer {
  margin-top: clamp(28px, 6vw, 40px);
  padding: 18px 12px 22px;
  text-align: center;
}

.tasbih-app footer p {
  margin: 0;
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.02em;
}

@media (max-width: 380px) {
  .tasbih-app .tab-translit {
    display: none;
  }
  .tasbih-app .tabs {
    gap: 6px;
  }
}
`;

export default function TasbihCounter() {
  const [active, setActive] = useState(PHRASES[0].id);
  const [counts, setCounts] = useState({
    subhanallah: 0,
    alhamdulillah: 0,
    allahuakbar: 0,
  });
  const [pulse, setPulse] = useState(0);
  const [targets, setTargets] = useState({
    subhanallah: 33,
    alhamdulillah: 33,
    allahuakbar: 33,
  });

  const current = PHRASES.find((p) => p.id === active);
  const count = counts[active];
  const target = targets[active];
  const remainder = count % target;
  const sets = Math.floor(count / target);
  const progress = (remainder / target) * 100;

  const increment = () => {
    setCounts((prev) => ({ ...prev, [active]: prev[active] + 1 }));
    setPulse((p) => p + 1);
  };

  const setTarget = (value) => {
    const clamped = Math.min(999, Math.max(1, value || 1));
    setTargets((prev) => ({ ...prev, [active]: clamped }));
  };

  const adjustTarget = (delta) => setTarget(target + delta);

  const reset = () => {
    setCounts((prev) => ({ ...prev, [active]: 0 }));
  };

  const resetAll = () => {
    setCounts({ subhanallah: 0, alhamdulillah: 0, allahuakbar: 0 });
  };

  return (
    <div className="tasbih-app">
      <style>{CSS}</style>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap"
      />

      <div className="hero">
        <p className="eyebrow">Digital Dhikr</p>
        <h1>Tasbih Counter</h1>
        <p className="sub">Keep count of your remembrance, one tap at a time</p>
      </div>

      <div className="tabs" role="tablist">
        {PHRASES.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={active === p.id}
            className={`tab ${active === p.id ? "active" : ""}`}
            onClick={() => setActive(p.id)}
          >
            <span className="tab-arabic" dir="rtl">
              {p.arabic}
            </span>
            <span className="tab-translit">{p.translit}</span>
          </button>
        ))}
      </div>

      <div className="card">
        <p className="meaning">{current.meaning}</p>

        <div className="heart-wrapper" style={{ "--progress": progress }}>
          <button
            key={pulse}
            id="incrementBtn"
            className="heart-btn"
            onClick={increment}
            aria-label={`Count ${current.translit}, currently ${count}`}
          >
            <svg viewBox="0 0 100 90" className="heart-svg" aria-hidden="true">
              <defs>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--rose-1)" />
                  <stop offset="100%" stopColor="var(--rose-2)" />
                </linearGradient>
              </defs>
              <path
                d="M50 88 C 18 62, -2 40, -2 20 C -2 2, 14 -8, 30 2 C 40 9, 50 22, 50 22 C 50 22, 60 9, 70 2 C 86 -8, 102 2, 102 20 C 102 40, 82 62, 50 88 Z"
                fill="url(#heartGrad)"
              />
            </svg>
            <div className="heart-content">
              <span className="count-number">{count}</span>
              <span className="count-hint">tap</span>
            </div>
          </button>
        </div>

        <p className="progress-label">
          {remainder} / {target}
          {sets > 0 && (
            <span className="sets-badge"> · {sets} set{sets > 1 ? "s" : ""} complete</span>
          )}
        </p>

        <div className="target-row">
          <span className="target-label">Target</span>
          <button
            type="button"
            className="target-btn"
            onClick={() => adjustTarget(-1)}
            aria-label="Decrease target"
          >
            −
          </button>
          <input
            type="number"
            className="target-input"
            value={target}
            min={1}
            max={999}
            onChange={(e) => setTarget(parseInt(e.target.value, 10))}
          />
          <button
            type="button"
            className="target-btn"
            onClick={() => adjustTarget(1)}
            aria-label="Increase target"
          >
            +
          </button>
        </div>

        <button id="resetBtn" className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>

      <button className="reset-all" onClick={resetAll}>
        Reset all tasbihs
      </button>

      <footer id="footer">
        <p>&copy; 2026 Tasbih Counter. All rights reserved. With Love — NoorulShaik</p>
      </footer>
    </div>
  );
}
