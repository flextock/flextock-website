# Design / Asset brief — Homepage motion pack

Master handoff for Phase 2 of the Flextock website redesign. Engineering Phase 1 (typing hero, custom arrow, engine hierarchy, scroll steps) is already in code with **provisional** colors and an interim greater-than arrow SVG.

Send deliverables to the product/web repo owner as a single pack (Drive/Figma/Zip). Prefer **Lottie JSON** + transparent PNG/WebM fallbacks.

---

## 1. Logo motion (Hero)

**Spec:** Word "tock" + dot animate behind the letter "X"; X floats; secondary dot appears and continues the float loop.

| Deliverable | Format | Notes |
|-------------|--------|-------|
| Logo loop | Lottie JSON (1x) | Named layers if possible; seamless loop |
| Static fallback | SVG or PNG @2x | Shown when `prefers-reduced-motion` |
| Optional video | Transparent WebM/MP4 | Only if Lottie is not feasible |

**Timing:** Provide target duration (e.g. 2.4s loop) and whether it plays once on load then idles.

---

## 2. Custom Flextock arrow

**Spec:** Replace all generic chevrons with the greater-than shape from the official logo.

| Deliverable | Format | Notes |
|-------------|--------|-------|
| Master arrow | SVG path from logo file | Single color `currentColor`; square caps preferred |
| Directions | LTR default | RTL = 180° rotate (engineering handles) |

Interim in code: [`components/FlextockArrow.tsx`](../components/FlextockArrow.tsx) — replace geometry when master SVG arrives.

---

## 3. Service brand hues (confirm or correct)

Provisional tokens live in [`constants/service-colors.ts`](../constants/service-colors.ts):

| Offering | Provisional accent | Soft fill |
|----------|-------------------|-----------|
| Fulfillment (core) | `#70C48F` | rgba(112,196,143,0.16) |
| Flexship | `#4DA3FF` | rgba(77,163,255,0.16) |
| Flexborders | `#F0783C` | rgba(240,120,60,0.16) |
| Flexshops | `#E8C468` | rgba(232,196,104,0.16) |
| Flexmart | `#7DD3C0` | rgba(125,211,192,0.16) |
| Flexcash | `#9BC4B0` | rgba(155,196,176,0.16) |

**Needed:** Official hex list from Brand (approve or replace).

---

## 4. Engine card hover loops

Wire on hover/focus of each service in The Engine. Transparent background, ~2–4s loop, pause when inactive.

| Service | Motion | Preferred format |
|---------|--------|------------------|
| Fulfillment | 3D box opens → item drops in → box seals | Lottie or short WebM |
| Flexshops | Line travels down to node → second dot continues path | Lottie / SVG sequence |
| Flexborders | Rotating globe + location pin drop, reset, repeat | Lottie (or light 3D + textures if Design chooses R3F) |

Also useful (optional Phase 2.1): Flexship / Flexcash / Flexmart hover motifs so every card has motion parity.

**Export:** 1x + 2x (or vector Lottie), dark navy `#071522` friendly.

---

## 5. Inside the System — hybrid photography

**Spec:** Realistic warehouse photography + moving 2D overlays (Vodafone / Mohamed Salah hybrid style).

| Deliverable | Count | Notes |
|-------------|-------|-------|
| Photo plates | 2–4 | Warehouse aisle, equipment, personnel; rights cleared |
| 2D overlays | Matching set | Green Flextock arrows/lines as SVG or Lottie, separate from photo |
| Art direction | 1 Figma frame per plate | Shows photo + overlay alignment / safe zones |

---

## 6. Cancellation feature module

| Layer | Deliverable |
|-------|-------------|
| Photo | Operator with handheld scanner in aisle |
| UI overlay | "Cancel" interface mock (SVG/PNG) |
| Motion | Green Flextock arrows passing right along Z-axis between foreground operator and background shelves (Lottie preferred) |

---

## 7. How-to-Start / 3 steps (optional upgrade)

Phase 1 already has CSS/Framer scroll arrows + large background X. Optional Design upgrade:

- Illustrated step nodes
- Branded connecting arrow path as SVG

---

## Delivery checklist

- [ ] Logo Lottie + static fallback  
- [ ] Master `FlextockArrow.svg`  
- [ ] Confirmed service hex colors  
- [ ] Fulfillment / Flexshops / Flexborders hover Lotties  
- [ ] 2–4 hybrid photo plates + overlays  
- [ ] Cancel module plate + overlay + arrow loop  
- [ ] Per-asset: duration, loop vs once, reduced-motion guidance  

**Out of scope for this pack:** Final Solutions/Technology IA copy (Content + Product), quote backend, production Three.js pipelines without models.
