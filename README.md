# NexusTech Promo — React App

A small Vite + React build of the course-activity promo page: a navbar, hero
with a system mockup, an interactive ROI calculator (`useState`), and a
static pricing comparison table.

## Structure
```
src/
  App.jsx                 — composes the page
  main.jsx                — React entry point
  styles.css               — shared stylesheet (design tokens as CSS vars)
  components/
    Navbar.jsx
    Hero.jsx
    ROICalculator.jsx      — the interactive widget
    PricingTable.jsx       — static comparison table
```

## Run it
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
Outputs a static bundle to `dist/`.
# Nexus-B2B-Solutions
