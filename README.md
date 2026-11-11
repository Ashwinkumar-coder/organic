# Indiorg – Organic Produce & Agri-Technology (React.js)

A modern, high-performance React application converted from the Indiorg single-page website. Built with React 19, Vite, and Lucide Icons, featuring an expanded layout width, modernized UI, and exact preservation of the brand's original color palette.

---

## 🎨 Color Palette (Strictly Preserved)

| Variable | Hex Code | Usage |
| :--- | :--- | :--- |
| `--bg` | `#ffffff` | Page background & card fills |
| `--ink` | `#0a0a0a` | Primary text, bold headers, dark buttons |
| `--mut` | `#6d6d68` | Muted subtitles, secondary text |
| `--line` | `#ebebe5` | Card borders, dividers, outlines |
| `--soft` | `#f6f6f1` | Neutral soft backgrounds & tag chips |
| `--lime` | `#c9f542` | Brand electric lime accent & primary button |
| `--green` | `#0b3d26` | Deep forest green badges & typography accents |
| `--accent-soft` | `#f3f4ee` | Segmented filter pill background |
| `--accent-lime-light` | `#eefac4` | Tech card accent background |

---

## 🚀 Key Improvements & Upgrades

1. **Expanded Container Width**:
   - Upgraded container max-width from `1180px` to **`1420px`**, providing an expansive, professional desktop viewport with balanced negative space.

2. **Modular Component Architecture**:
   - `Header.jsx`: Sticky glassmorphic navbar with logo, smooth-scroll links, mobile drawer, and CTA.
   - `Hero.jsx`: Animated word rotator, pointer-tracked 3D tilt card, and floating badge stickers.
   - `Marquee.jsx`: Seamless infinite marquee with pause-on-hover.
   - `Catalog.jsx`: Segmented category filter tabs, responsive 4-column card grid, expandable drawers with detailed specifications, and plus/minus toggles.
   - `Stats.jsx`: Live animated counters (`7%+`, `4`, `2`) triggered on viewport entry via `IntersectionObserver`.
   - `Origin.jsx`: Storytelling two-column section with harvest photography, location pin badge, and four core value cards.
   - `Contact.jsx`: Multi-select pill tag selector, controlled input fields, pre-filled `mailto:` generator, and submission confirmation.
   - `Footer.jsx`: Statement typographic wordmark with hover color transition and back-to-top navigation.

3. **High-Res Assets**:
   - All 7 original images cleanly extracted from base64 into `/public/images/` for optimal caching and performance.

---

## 🛠️ Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

