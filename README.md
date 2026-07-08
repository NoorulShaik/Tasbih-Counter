# Tasbih Counter

A responsive, single-file React component for counting dhikr (Islamic remembrance phrases), with a heart-shaped tap button and a per-phrase, user-adjustable target.

## File

- `tasbih_counter.jsx` — the complete component (markup, styles, and logic in one file). Default export: `TasbihCounter`.

## Features

- **Three built-in tasbihs**, switchable via tabs:
  - سُبْحَانَ اللَّه — SubhanAllah — "Glory be to Allah"
  - الْحَمْدُ لِلَّه — Alhamdulillah — "Praise be to Allah"
  - اللَّهُ أَكْبَر — Allahu Akbar — "Allah is the Greatest"
- **Independent counters** — each tasbih keeps its own count, so switching tabs doesn't lose progress on the others.
- **Heart-shaped tap button** (`#incrementBtn`) — an SVG heart with a short "beat" animation on every tap.
- **Progress ring** — a gold ring around the heart fills up as the count approaches the target, and shows how many full sets have been completed.
- **Adjustable target** — each tasbih defaults to a target of 33 (the traditional dhikr set size), but can be changed independently per tasbih using the `−` / `+` steppers or by typing a value directly (clamped 1–999).
- **Reset controls**:
  - `#resetBtn` resets only the currently active tasbih's count.
  - "Reset all tasbihs" clears all three counts at once.
- **Fully responsive** — fluid sizing (`clamp()`) for text and the heart button; tab labels collapse to Arabic-only under 380px width so nothing crowds on small phones.

## State model

```js
counts:  { subhanallah: 0, alhamdulillah: 0, allahuakbar: 0 }
targets: { subhanallah: 33, alhamdulillah: 33, allahuakbar: 33 }
```

Both are plain React `useState` objects, keyed by tasbih id. Nothing is persisted to `localStorage`/`sessionStorage` — counts and targets reset on page reload. If you want persistence across visits or devices, this can be wired up to a small backend or a storage API; ask if you'd like that added.

## Customizing

- **Add or remove tasbihs**: edit the `PHRASES` array at the top of the file (`id`, `arabic`, `translit`, `meaning`). `counts` and `targets` initial state should get a matching key.
- **Change the default target**: edit the initial `targets` state (currently `33` for all three).
- **Change colors/fonts**: all design tokens are CSS custom properties on `.tasbih-app` at the top of the `CSS` template string (`--gold`, `--rose-1`, `--rose-2`, `--cream`, etc.), plus the Amiri/Poppins Google Fonts `<link>` in the JSX.

## Usage

Drop `tasbih_counter.jsx` into a React project (Vite, Next.js, Create React App, etc.) and render:

```jsx
import TasbihCounter from "./tasbih_counter";

export default function App() {
  return <TasbihCounter />;
}
```

No external dependencies beyond React itself and the Google Fonts link.

---
&copy; 2026 Tasbih Counter. With love — NoorulShaik
