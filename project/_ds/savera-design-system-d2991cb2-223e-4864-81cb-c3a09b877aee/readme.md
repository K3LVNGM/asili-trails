# Savera Design System

**Savera** (Hindi/Urdu *savērā* — "dawn, daybreak") is a fictional **luxury safari & Indian-subcontinent travel brand**, built around the warmth of golden-hour light in the African bush. This design system gives design agents everything needed to produce well-branded Savera interfaces and assets — production code or throwaway mocks.

> **Provenance / sources.** This system was authored from a written brand brief only — **no codebase, Figma file, or visual assets were provided**. The brand name, palette, logo and all imagery were created here. There is no external repo or design file to reference. If you have real Savera (or equivalent) brand assets, fonts, or photography, share them and this system should be updated to match.

---

## Brand at a glance
- **Personality:** luxury without pretension — warm, personal, expert-led. Nature-immersed. Editorial confidence. Trust signals prominent.
- **Promise:** every journey is tailor-made by a specialist who has travelled it; conservation-first; fully financially protected (B Corp, ATOL).
- **Voice:** confident, warm, second-person ("your journey"), lightly poetic. Bold ALL-CAPS headings offset by a cursive script accent.

---

## CONTENT FUNDAMENTALS — how Savera writes

**Tone:** Warm, expert, quietly confident. Aspirational but never salesy or breathless. Reads like a well-travelled friend who happens to be a specialist.

**Person & address:** Second person to the traveller ("your journey", "tell us about your dream trip"); first-person plural for the brand ("we channel a share of every journey…", "people who know it intimately"). Never corporate "the customer".

**Casing:** Headlines and buttons are **UPPERCASE** with wide letter-spacing. Eyebrows/labels are uppercase micro-caps. Body copy is sentence case. A **cursive script** line (lowercase) is used as a warm grace note near big headings ("*beautifully, at golden hour*", "*no obligation*").

**Sentence style:** Short, evocative, concrete. Names real places and animals (Okavango, Chobe, Ranthambore, mokoro, wild dog). Em-dashes for asides. Specific over generic ("a tiger's first light in Ranthambore", not "amazing wildlife").

**Examples (house voice):**
- Hero: "WAKE THE WILD WITHIN YOU" · *beautifully, at golden hour*
- Sub: "Every journey is hand-crafted by a specialist who has travelled it — from the Okavango at dawn to a tiger's first light in Ranthambore."
- CTA hierarchy copy: **Enquire now** (primary), **Browse trips / View collection** (secondary), **Read the guide** (tertiary/link).
- Trust: "ATOL protected · A certified B Corp", "no obligation, just expert guidance."

**Emoji:** Never. The brand's warmth comes from photography, the script font, and earthy color — not emoji or exclamation marks.

**Numbers & prices:** "Guide price from **£8,450** per person". Durations as "10 NIGHTS". Review counts as clickable sage links ("2,140 reviews").

---

## VISUAL FOUNDATIONS

**Color** — mirrors the African bush at golden hour. Deep **forest greens** (`--forest-800 #2B3834` is the canonical dark surface) for dark bands and nav; **gold/amber** (`--gold-500 #C99A3F`) as the primary action and warmth; **sage** (`--sage-500`) as the secondary action, links and muted text on dark; **teal** (`--teal-800`) for circular icon wells; **warm creams** (`--cream-50/100`) for light page and section backgrounds. Status colors are kept earthy (olive success, terracotta danger). See `tokens/colors.css`.

**Type** — **Lato** for everything (300/400/700/900). Headings are heavy (900), UPPERCASE, slightly negative-tracked at large sizes; eyebrows/labels are 700, uppercase, widely tracked (`0.18em`). Body is 400/16px at 1.7 line-height. A **cursive script** (Dancing Script — *substitute*, see Fonts) appears sparingly as a handwritten accent in gold. Scale runs 11 → 84px. See `tokens/typography.css`.

**Spacing & layout** — 8px base unit. Section vertical rhythm 96–120px. Container max 1320px, centered. Grid gaps: **8px** for tight image mosaics, 24–28px for card grids. See `tokens/spacing.css`.

**Backgrounds** — Two modes alternate for rhythm: warm cream light sections and deep forest dark bands (plus the occasional full-bleed gradient/photo banner). **Photography always bleeds to the edge** — no borders or inner padding on hero/grid images. No busy patterns or textures; the imagery does the work. Decorative gradients are reserved for photo placeholders (`--golden-hour`, `--bush-dusk`) and text-legibility overlays.

**Imagery** — Cinematic, high-production wildlife & landscape photography; golden-hour light, dramatic skies, immersive encounters (elephants, big cats, migrations, Maasai people, delta waterways; tigers, temples, backwaters for the subcontinent). Warm golden/amber tones mixed with deep greens and cool blues. A bottom **protection gradient** (`--overlay-photo`, fading to ~`rgba(22,32,29,0.78)`) sits under text on image cards. *(All photography in this system is currently a golden-hour gradient placeholder — replace with real film.)*

**Corner radii** — Restrained and editorial. Cards/dialogs use 8px (`--radius-md`); inputs/buttons 4px (`--radius-sm`); pills/badges fully rounded; image tiles are often square-cornered (0). No large playful radii.

**Cards** — Warm white surface, soft low-contrast shadow (`--shadow-card`), no visible border. Interactive cards lift 4px on hover. Image cards have **no container chrome at all** — the photo *is* the card, with text overlaid on the gradient.

**Shadows** — Soft, warm-tinted, low opacity (luxury restraint). `--shadow-card` for surfaces, `--shadow-lg` for dialogs. Never hard or neon.

**Borders & dividers** — Hairline `--border-light #E4DECF` on light; translucent white on dark. The reviews band uses vertical dividers between columns. A script-labelled divider is a signature flourish.

**Motion** — Calm and slow. `--ease-out` for most transitions (160–260ms). Image hover is a **very slow ken-burns zoom** (~6s). No bounces, no infinite loops, no parallax gimmicks. Respect reduced-motion.

**Hover states** — Buttons darken to the `-600` shade (gold→`gold-600`, sage→`sage-600`); ghost buttons invert (fill with ink/white). Cards lift + deepen shadow. Images zoom. Links grow a gold/sage underline. **Press:** subtle — color shift, no large shrink.

**Transparency & blur** — The hero/detail header is transparent over photography, then switches to solid `--forest-800` (with a soft shadow) on scroll. Glass badges (`Badge variant="glass"`) use a translucent dark fill + small blur over photos. Dialog scrim is a 62%-forest wash with a 3px blur. Used sparingly.

**Layout rules** — Sticky top nav. Centered hero text stack. Sticky price card on trip detail. Full-bleed banners break the container for atmosphere.

---

## ICONOGRAPHY

- **Style:** fine **golden line-art** — stroke-based (≈1.5px), rounded joins, single-color (gold on dark, sage/ink on light). Never filled-heavy or duotone. Icons sit inside circular **teal wells** in feature blocks.
- **Source:** this system ships a small **hand-built stroke set** in `ui_kits/website/icons.jsx` (`window.SaveraIcons`: Compass, Leaf, Shield, Binoculars, Plane, Lodge, Map, Calendar, Users, Pin, arrows, Search, Menu, Award, Quote, Sun). It is intentionally **Lucide-compatible in weight & feel** — if you need broader coverage, pull **[Lucide](https://lucide.dev)** from CDN; it matches the stroke style. *(Flagged substitution: no brand icon font was provided.)*
- **Emoji / unicode:** never used as iconography.
- **Logo / brand marks:** `assets/logo-savera.svg` (horizontal lockup: dawn emblem + wordmark) and `assets/emblem-savera.svg` (emblem only). The wordmark is set in **Lato Black**, letter-spaced. Inline the SVG (not `<img>`) when you need the wordmark to follow `currentColor` on dark surfaces. The emblem is a minimal rising-sun-over-horizon — the only illustrative mark in the system.

---

## Fonts — ⚠ substitution flagged
- **Lato** — loaded from Google Fonts. This is treated as the real brand sans.
- **Dancing Script** — a **stand-in for the brand's bespoke "ErnestAndEmily" cursive**, which was not provided. It is used only for small script accents. **Please supply the licensed ErnestAndEmily font file** and we'll swap `--font-script` + the `@font-face` to match exactly.

---

## INDEX — what's in this project

**Foundations**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css` — all design tokens (134) + webfont loading.
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`components/<group>/` — React primitives, each with `.jsx` + `.d.ts` + `.prompt.md`; consume via `window.SaveraDesignSystem_d2991c`)
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `data-display/` — **Card**, **Badge**, **Tag**, **Avatar**, **StarRating**, **Divider**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**
- `navigation/` — **Tabs**
- `travel/` — **Photo**, **TripCard**, **DestinationTile**, **BlogCard**, **FeatureIcon**, **StepItem**, **WishlistButton**

**UI kit**
- `ui_kits/website/` — click-through marketing site: homepage (flagship), trip/itinerary detail, and the enquiry flow. See its `README.md`.

**Assets**
- `assets/logo-savera.svg`, `assets/emblem-savera.svg`

**Skill**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

### Caveats
- **No real photography, logo, or fonts were provided** — imagery is gradient placeholders, the logo/emblem are original, and the cursive font is a Google substitute. All are clearly flagged and easy to replace.
- The bundle namespace is `SaveraDesignSystem_d2991c` (used in card/UI-kit HTML).
