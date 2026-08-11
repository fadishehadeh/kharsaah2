# Al-Kharsaah Solar PV Power Plant — Interactive Report

A full-screen interactive deck built for QatarEnergy, telling the story of Qatar's first large-scale solar power plant.

---

## Tech Stack

- **Framework:** TanStack Start (React 19, TypeScript, SSR)
- **Bundler:** Vite 8 with Nitro (Netlify preset)
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Deployment:** Netlify (auto-deploys from GitHub `main` branch)
- **Repository:** https://github.com/fadishehadeh/kharsaah2

---

## Running Locally

```bash
cd C:\Github\Alkharsaa2
npm install
npm run dev
```

The app runs on `http://localhost:8082` by default (auto-increments if port is in use).

---

## Deploying

Push to `main` on GitHub. Netlify picks it up automatically.

Build command: `npm run build`
Publish directory: `dist`
Node version: 20

---

## Content Structure

All slide content lives in `src/data/deck.ts`.

### Sections (41 slides total)

| Section | ID | Slides |
|---|---|---|
| 0 | Title + Contents | title, contents |
| 1 | About Al-Kharsaah | about |
| 2 | At a Glance | at-a-glance |
| 3 | Timeline | timeline |
| 4 | Maximizing Sunlight | sunlight |
| 5 | Origins | origins |
| 6 | Building the Plant | chapter-building, build-performance, build-cells, build-feasibility, build-precision, build-resource, build-components, build-life, build-access, build-waste, build-om, build-hazop, build-operational-waste |
| 7 | Environmental and Economic Impact | chapter-impact, impact-ecology, impact-baseline, impact-heritage, impact-economic |
| 8 | People and Communities | chapter-people, people-capability, people-indicators, people-hse, people-community |
| 9 | Partnerships | chapter-partners, partners-collab, partners-ppa, partners-innovation |
| 10 | Challenges | chapter-challenges, challenges |
| 11 | Looking Ahead | chapter-ahead, ahead-next, ahead-innovation, ahead-legacy |
| 12 | Glossary | glossary |

### Slide Layouts

| Layout | Description |
|---|---|
| `title` | Full-screen hero with kicker, title, lead |
| `toc` | Contents list linking to each section |
| `split` | Text left, image/gallery right |
| `stats` | Grid of stat cards (used for at-a-glance) |
| `facts` | Grid of fact cards |
| `timeline` | Horizontal scrolling timeline |
| `rows` | Key-value rows with optional right panel |
| `chapter` | Full-screen chapter divider with large number |
| `statement` | Centered text layout |
| `glossary` | Two-column scrollable glossary |

---

## Assets

All assets live in `src/assets/`.

### Videos (7 total — play automatically, muted, looping)

| File | Used on slide |
|---|---|
| `hero-loop-v3.mp4` | title |
| `aerial-clip-1.mp4` | chapter-building (06) |
| `aerial-clip-2.mp4` | chapter-impact (07) |
| `aerial-clip-3.mp4` | chapter-people (08) |
| `panel-closeup-loop.mp4` | people-hse (08.3) |
| `hero-loop-v2.mp4` | challenges (10) |
| `aerial-clip-4.mp4` | chapter-ahead (11) |

### Key Images

| File | Used on slide |
|---|---|
| `slide4-1.jpg` | sunlight (section 4 satellite map) |
| `section6-slide1.jpg` | build-performance gallery — effect of tilt diagram |
| `section6-slide1.png` | build-performance gallery — tracking benefit chart |
| `section6-slide2.jpg` | build-cells gallery — tracker rendering |
| `section6-slide2q.jpg` | build-cells gallery — Ideematec spec infographic |
| `section6-slide4.png` | build-precision gallery — site layout plan |
| `section6-slide6.jpg` | build-components gallery — substations diagram |
| `section6-slide10.jpg` | build-om — robotic cleaning system photo |
| `section6-lastslide.jpg` | build-operational-waste gallery — drainage map |
| `section6-lastslide2.png` | build-operational-waste gallery — permeability diagram |
| `section7-slide2.jpg` | impact-baseline — lizard burrow photo |
| `client-*.jpg` | Various content slides (client-supplied photos) |

---

## Component Reference

| File | Purpose |
|---|---|
| `src/components/deck/SlideView.tsx` | Renders all slide layouts |
| `src/components/deck/SlideMedia.tsx` | Full-screen background image/video with fade-in |
| `src/components/deck/Gallery.tsx` | Right-panel image gallery with lightbox |
| `src/data/deck.ts` | All slide content and media assignments |
| `src/styles.css` | Global styles, CSS variables, animations |

---

## Changelog

### 2026-08-11

- Replaced all 9 old section6 reference images with S2E-designed PNG graphics:
  - Slide 06 (sunlight): Qatar map pin (Page 6.png)
  - Slide 09 (build-performance): tilt diagram + tracking chart (Page 9A, 9B)
  - Slide 10 (build-cells): tracker isometric + Ideematec specs (Page 10A, 10B)
  - Slide 12 (build-precision): site layout plan (Page 12.png)
  - Slide 14 (build-components): substation electrical diagram (Page 14.png)
  - Slide 20 (build-operational-waste): drainage map + permeable ground diagram (Page 18A, 18B)
- Gallery: white background (`bg-white`), `object-contain` (no cropping), `p-4 pb-0` padding so edges breathe
- All image frames: landscape 4:3 (`aspect-4/3`) across split and rows layouts
- Standalone right-panel figures (non-gallery): also `bg-white` + `object-contain`

### 2026-08-09

- Increased stats card label size (`text-xs`) and opacity (`/90`) for better visibility
- Increased chapter number opacity from `/15` to `/40`
- Added 11 reference images from the Word document to correct gallery/media slots:
  - Section 6 diagrams (tilt effect, tracking chart, Ideematec specs, site layout, substations, robotic cleaner, drainage patterns, permeability diagram)
  - Section 7 lizard burrow photo
  - Satellite Qatar map for sunlight slide
- Updated slide 1 lead copy: "Qatar's first large-scale solar power plant: a story of vision, partnership, and renewable energy."
- Moved stats card labels above values (previously below)

### 2026-08-08 (or earlier session)

- Fixed video flash: poster image now always visible; video fades in on `canPlay` event
- Added 4 aerial MP4 clips to chapter divider slides (Building, Impact, People, Looking Ahead)
- Removed all Lovable traces:
  - Replaced `@lovable.dev/vite-tanstack-config` with standard Vite plugins
  - Removed `lovable-error-reporting.ts` and `.lovable/` directory
  - Removed 19 `.asset.json` stub files
- Created `netlify.toml` for Netlify deployment
- Renamed package to `al-kharsaah-deck`
