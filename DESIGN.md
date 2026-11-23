# Bali 2026 app: design notes

Adapted from the Airbnb DESIGN.md published by getdesign.md (an independent analysis, not an official Airbnb file). We take the neutral system, type, shape and elevation rules and keep our own single accent (teal) instead of Airbnb's brand colour.

## Colours
| Token | Hex | Use |
|---|---|---|
| canvas / surface | `#ffffff` | Page and cards |
| surface-soft | `#f7f7f7` | Tips, table headers, day rows |
| surface-strong | `#f2f2f2` | Icon circles, segmented control track |
| ink | `#222222` | All primary text, selected date chip, active tab |
| body | `#3f3f3f` | Secondary running text (details) |
| muted | `#6a6a6a` | Labels, end times, captions |
| hairline | `#dddddd` | Card and table borders |
| hairline-soft | `#ebebeb` | Row separators |
| accent | `#0f766e` | Links, key numbers, checkbox fill. Use sparingly. |
| error | `#c13515` | "Fly home" day marker |

## Type (system stack: -apple-system, system-ui, Roboto, "Helvetica Neue", Arial)
- Page title 22/600, -0.3px tracking. Day title 20/600.
- Body 15/1.5. Activity titles 14/600. Details 13/400. Full table 12.5–13.
- Labels 10.5–12px, 700, uppercase with letter-spacing.
- Keep weights modest (500–700); let photos carry visual weight.

## Shape, spacing, elevation
- Radii: 8px buttons, 14px cards/photos, pill chips and segmented control.
- Spacing on a 4px grid: 4 / 8 / 12 / 16 / 24. 16px side gutters on phones.
- One shadow only: `rgba(0,0,0,.02) 0 0 0 1px, rgba(0,0,0,.04) 0 2px 6px, rgba(0,0,0,.1) 0 4px 8px`, for floating things (menu, active segment, photo badge). Everything else is flat with hairlines.
- Scrim: black at 50%.

## Mobile rules
- Tap targets at least 44px (tabs, chips, checklist rows, buttons).
- No sideways page scrolling at 360–430px widths. The full table is 3 columns (Time / Activity / Logistics) with day heading rows.
- Bottom tab bar for main views; everything else in the top-right menu.
