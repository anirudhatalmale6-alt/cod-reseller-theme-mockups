# COD Reseller Theme — Step 1 design mockups

Clickable design mockups for the WooCommerce COD reseller theme + license server project.
**Design only — no PHP has been written yet.** Backend work starts after design approval.

## Live pages

| # | Page | What it shows |
|---|------|---------------|
| 1 | `index.html` | Storefront home of the packaged theme |
| 2 | `product.html` | Product page + the single-page COD checkout form (the core screen) |
| 3 | `thankyou.html` | Order confirmation / tracking status |
| 4 | `sales-site.html` | Your license sales site: plans, flow, buyer checkout |
| 5 | `email-delivery.html` | The automated delivery e-mail (ZIP + key + guide + invoice) |
| 6 | `admin-license.html` | Theme activation screen inside the buyer's WP admin, all 6 states |
| 7 | `admin-options.html` | Theme options: colours, fonts, banners, form fields, 58-wilaya rates, offers |

## Review toolbar

The dark bar at the top is **not part of the theme** — it exists only for review:

- page links
- **AR / FR** — switches the whole UI between Arabic (RTL) and French (LTR)
- **Mobile / Desktop** — renders the page inside a phone frame

## What actually works in the mockup

- 58 wilayas with communes, loaded on selection
- Home delivery vs stopdesk rates per wilaya
- Live total recalculation with no page reload
- Quantity offers (1 / 2 / 3 pieces) and quantity stepper
- Client-side validation (name, Algerian phone format, wilaya, commune)
- Submit → confirmation page
- Full RTL layout mirroring, including bidi-safe price rendering
- License activation screen state switcher (not activated / invalid key / domain
  mismatch / active / expiring / expired)

## Conversion widgets (v3)

Each one is a switch in the theme options screen, not a hard-coded block:

- Scrolling reassurance marquee under the hero
- Animated statistics band (counts up once, when scrolled into view)
- Offer countdown on the product page (live, per-visitor duration)
- "X from Oran just ordered" notifications, fed by real orders
- Pinned mobile buy bar, sticky desktop buy box

## Everything is editable from WP admin (screen 7)

`admin-options.html` is interactive. Working in the mockup right now:
tab switching, colour swatches and the arrondi slider driving a **live
preview** that updates instantly, the searchable 58-wilaya rate table,
the form-field list, and every toggle. Nothing there requires the buyer
to open a file or write a line of code.

## Layout stability

The client asked for zero glitches and zero layout shift, so it was measured
rather than assumed. Cumulative Layout Shift across all 7 pages, cold cache,
at 1280px and 390px: **worst case 0.025** (Google's "good" threshold is 0.1).

Three real causes were found and fixed:

1. The review toolbar was injected by JS after first paint and pushed the page
   down — 0.93 on its own. It is now static markup in every page.
2. Star ratings are drawn from JS; their box is now reserved in CSS so filling
   them in moves nothing.
3. Google Fonts arrived after first paint and the swap reflowed every text
   block. Fonts are now **self-hosted** in `assets/fonts/` and preloaded, so
   they are ready before first paint — and the theme no longer depends on a
   third-party CDN, which also matters for load times in Algeria.

## Visual system (v2)

- **Type** — Plus Jakarta Sans for UI and headings, Instrument Serif italic for the
  one emphasised word in each hero. Fluid `clamp()` scale, tight optical tracking
  on display sizes. IBM Plex Sans Arabic takes over the whole stack in RTL.
- **Depth, not borders** — hairlines are 1px `box-shadow` rings at 5–9% opacity;
  separation is carried by a five-step, warm-tinted elevation scale rather than
  hard 1.5px strokes.
- **Icons** — a hand-built stroked SVG set injected as a sprite. No emoji anywhere:
  emoji render as different clip-art on every device and read as unfinished.
- **Motion** — spring and ease curves as tokens. Cards lift, product images scale,
  buttons carry a sheen sweep and a press state, selection ticks scale in,
  section content eases up on scroll, and every amount counts up to its new value
  instead of snapping. All of it collapses under `prefers-reduced-motion`.
- **Forms** — inset-ring inputs on a tinted field that turns white on focus, 44–52px
  touch targets, animated error state, and a pinned mobile price bar.

## Placeholder data

Shipping rates, communes, prices, plan amounts and product content are examples.
They get replaced with the client's real data during implementation.
