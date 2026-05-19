# Machine Lattice

Next.js 15 + TypeScript + Tailwind CSS + Shadcn UI implementation of the Machine Lattice website.

## Setup

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
machine-lattice/
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home — hero + sim preview + features grid
│   ├── globals.css         # Design tokens, Tailwind layers
│   ├── simulations/page.tsx
│   ├── research/page.tsx
│   ├── product/page.tsx
│   └── access/page.tsx
├── components/
│   ├── layout/
│   │   └── navbar.tsx      # Fixed navbar with live UTC clock
│   ├── home/
│   │   ├── simulation-preview.tsx  # Animated SVG network graph + stats
│   │   ├── features-grid.tsx       # 3-column runtime features
│   │   └── hero.tsx
│   └── simulations/
│       └── simulations-list.tsx    # Filterable sim cards
├── lib/
│   └── utils.ts
├── tailwind.config.ts      # ML design tokens (colors, fonts, animations)
└── components.json         # Shadcn UI config
```

## Design System

| Token | Value |
|---|---|
| Background | `#0A0A0F` |
| Accent (orange) | `#C84B15` |
| Card background | `#13131A` |
| Border | `#1E1E28` |
| Text primary | `#F0F0F0` |
| Text secondary | `#8A8A9A` |
| Font Heading | Playfair Display (serif) |
| Font Body | Inter (sans-serif) |
| Font Code/Labels | JetBrains Mono |

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, simulation widget, terminal showcase, 3-col features |
| `/simulations` | Filterable simulation run cards (All, Treasury, Governance, Emissions, Liquidity, Launch) |
| `/research` | Research papers list with RP-IDs, dates, read times |
| `/product` | Three runtime modules — simulation engine, scenario language, analytics |
| `/access` | Access request form with 3-step process explanation |
