# Indiorg – Organic Produce & Agri-Technology

A modern, high-performance React application converted from the Indiorg single-page website and redesigned to match the [Figma prototype](https://www.figma.com/proto/VWueENvR8yC1RCKKI7d30v/Annular-work).

---

## 🎨 Color Palette (Strictly Preserved)

| Variable | Hex Code | Usage |
| :--- | :--- | :--- |
| `--bg` | `#ffffff` | Card containers, form inputs, badges |
| `--canvas` | `#f7f7f2` | Soft ivory page canvas background |
| `--ink` | `#0a0a0a` | Primary typography, dark buttons |
| `--mut` | `#6d6d68` | Muted subtitles, descriptions, labels |
| `--line` | `#ebebe5` | Card borders, dividers |
| `--soft` | `#f6f6f1` | Form fields, tag pills, soft bento cards |
| `--lime` | `#c9f542` | Hero capsule text, stat numbers, primary buttons |
| `--green` | `#0b3d26` | Hero capsule, marquee, stats pill, contact block |

---

## 🚀 Key Features & Implementation

1. **Wide Solid White Navbar**:
   - Single unified pill bar (`background: #ffffff; max-width: 1420px`) with subtle border and soft shadow.
   - Houses the logo, desktop navigation links (`What we do`, `Origin`, `Contact`), and the green `Say hi` button.
   - Fully responsive: includes a hamburger toggle and animated mobile drawer for tablets and phones (<990px).

2. **Figma Hero Section**:
   - Ambient green radial glow in the background.
   - Status chip: `ORGANIC · SMART · SUSTAINABLE` with glowing green indicator dot.
   - Bold title `Organic roots.` paired with the signature deep forest green capsule and electric lime text for `Smart tech.` (rotates through `Smart tech.`, `Animal ID.`, `Clean food.`, and `Real farmers.`).
   - Action buttons: `Explore ↓` (lime with glow shadow) & `Get a quote` (white with dark outline).

3. **Hero Bento Grid (5 Cards)**:
   - **Card 1**: Manipur turmeric farmers photo with bottom-left `📍 Manipur, India` pill badge.
   - **Card 2**: Electric lime card with `7%+` and `Curcumin in our turmeric`.
   - **Card 3**: Deep forest green card with `ICAR-certified microchips` and icon.
   - **Card 4**: White card with indicator dot and `RF ear tags and animal software`.
   - **Card 5**: White card with `Direct from tribal farmers. Fair, transparent, chemical-free.` and `Our story →`.

4. **Deep Forest Green Marquee**:
   - Full-width band in `#0b3d26` with alternating white and electric lime italic text with pause-on-hover.

5. **"What We Do" Island Container**:
   - 40px rounded white island container with segmented filter pill (`All`, `Produce`, `Tech`).
   - 8 product & tech cards in a 4-column responsive grid:
     - 4 Produce cards with 1:1 image frame and prominent `+` buttons.
     - 4 Tech cards matching Figma themes:
       - `Animal identification`: Electric lime card (`#c9f542`).
       - `Animal management software`: Soft card with laptop icon.
       - `Farm and livestock tech`: Deep forest green card (`#0b3d26`) with lime sprout icon.
       - `Setup and support`: Soft card with headphones icon.
     - Clickable `+` button that rotates smoothly to `×` upon expansion, revealing detailed specifications.

6. **Stats Section (Deep Green Capsule)**:
   - Rounded `#0b3d26` pill container with `7%+`, `4`, and `2` rendered in electric lime (`#c9f542`) across 3 divided columns, with animated count-up on scroll.

7. **Origin Section ("Behind the Harvest")**:
   - Rounded photo frame on the left.
   - Right: Story and 2×2 grid of white rounded cards (*Premium quality*, *Sustainable*, *Farmer-first*, and *Transparent*).

8. **Contact & Footer (Deep Forest Green Block)**:
   - Full-width `#0b3d26` container with `48px` rounded top corners.
   - Left: 3 glassmorphic contact pills with lime circular icons (Email, Phone, Visit).
   - Right: Floating white form card with `Send an enquiry`, clickable interest tags, and lime `Send it →` submit button.
   - Footer: Giant outlined `indiorg` wordmark in lime stroke (`-webkit-text-stroke: 1.8px var(--lime)`).

---

## 🛠️ Development & Build Commands

### Start Development Server
```bash
npm run dev
```
Accessible at [http://localhost:3000](http://localhost:3000).

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```
