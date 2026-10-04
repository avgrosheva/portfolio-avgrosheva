# Design System — avgrosheva.portfolio

Personal portfolio of a solo digital product developer (web apps, Telegram
bots, Telegram Mini Apps, AI tools, CRM / internal systems, automation).
Viewed cold via direct link (Kwork, cold outreach) by business owners and
managers 25–45. Must read as strong, art-directed, and professional within
seconds — not a generic developer portfolio or SaaS landing page.

**Core principle: clarity first, art direction second.** The art direction
must be visible and memorable, but never at the cost of a first-time visitor
understanding what I do and where to click.

## 1. Typography

Typography is the primary visual device of the site — large display grotesk
headlines carry more weight than any image or graphic.

- **Display / headline font:** a contemporary neo-grotesk with strong,
  slightly condensed character — target family: **Neue Montreal** (fallback
  stack: `"Neue Montreal", "General Sans", Helvetica Neue, Arial, sans-serif`).
  Not Inter. Not a default system grotesk.
- **Body / UI font:** same grotesk family at regular weight, smaller optical
  size — keeps one typographic voice across the page instead of mixing
  families.
- **Technical / label font:** a mono face for index numbers, tags, and small
  system labels — target: **JetBrains Mono** or **Space Mono**, uppercase,
  tracked out (`letter-spacing: 0.08–0.12em`).
- **Case:** lower-case for headlines and nav (editorial, unforced);
  UPPERCASE only for small mono labels/eyebrows (`[ 01 ]`, `SELECTED WORK`,
  category tags).
- **Scale (desktop):**
  - Hero headline is set as three intentionally-sized lines, not one uniform
    block — this is what makes it read as composed rather than wrapped:
    - line 1 (lead-in verb): `clamp(1.75rem, 3.4vw, 2.75rem)`, regular
      weight, `--ink-soft` — quieter, sets up the main line.
    - line 2 (core phrase): `clamp(3.25rem, 7.4vw, 7rem)`, medium weight,
      `--ink` — the focal point, largest element on the page.
    - line 3: `clamp(2.25rem, 5vw, 4.5rem)`, medium weight, indented
      `~8–12%` from the left edge — breaks the block into a staggered,
      diagonal rhythm instead of a flush-left stack.
  - Section headline: `clamp(2rem, 4vw, 3rem)`.
  - Project title (card): `1.5–1.75rem`.
  - Body / supporting line: `1–1.125rem`, weight 400, relaxed line-height
    (1.5).
  - Mono label: `0.75rem`, tracked — reserved for index numbers and
    coordinates (`[ 01 ]`, `/ 2026`). Descriptive copy (project tags,
    captions) is set in the body face, not mono, and not uppercased by
    default — mono/uppercase is a rare accent, not the default voice of the
    page.
- Headlines must never wrap awkwardly — hand-set line breaks on the hero
  line, don't rely on auto-wrap.

**Display font — locked: Onest.** Golos Text, Manrope, Unbounded and Hanken
Grotesk were all compared and ruled out. Onest is the primary typeface for
all display and body text. Font exploration is closed — do not reopen it
without an explicit new request.

## 2. Palette

Warm, light, near-monochrome base; color is a rare, deliberate accent — never
a decorative fill.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F5F3EE` (warm off-white) | page background |
| `--bg-raised` | `#EFEDE6` | subtle panel / card fill |
| `--ink` | `#17170F` (near-black, warm graphite) | primary text |
| `--ink-soft` | `#5C5B52` | secondary text / supporting lines |
| `--line` | `#D8D5C9` | hairline dividers, grid lines |
| `--accent-lime` | `#C6F135` (acid/lime green) | the one active accent: star, link underline, live-state dot |
| `--accent-orange` | `#F2622E` | reserved — see note below |

Rules:
- No purple, pink, blue-purple gradients, glow, or blurred color blobs.
- Lime is the only accent in active use. It never appears as decoration —
  only on the star mark, a hover/underline state, or a status dot inside a
  project preview's own UI (e.g. "automation" live indicator).
- **Orange is reserved, not yet active.** It is not used anywhere in the
  current build. It may be introduced later only once it has one clear,
  recurring functional role across the system (e.g. a single kind of status
  marker reused consistently) — never as an isolated decorative dot added
  to fill space. Until that role is defined, pages use lime only.
- Color never substitutes for composition or hierarchy — layout and type
  scale carry hierarchy; color marks only the single most important
  interactive element per view (e.g. the CTA underline, the active project
  index).

## 3. Spacing & Grid

- Base unit: **8px**. Spacing scale: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Desktop content frame: max-width `1440px`, outer margin `clamp(32px, 4vw,
  64px)`.
- Underlying grid: **12 columns**, 24px gutter, used loosely — editorial
  asymmetry is allowed (elements may span unequal column groups), but every
  element still snaps to the column grid, never floats free. This is the
  "obvious navigation, experimental layout" balance from the brief.
- Vertical rhythm between major sections: 128–160px desktop.
- Hairline rules (`1px solid var(--line)`) mark section boundaries and the
  grid itself — used thinly and rarely, never as a decorative pattern
  covering the screen.

## 4. Graphic language

- One recurring identity mark: a **five-point star, locked to a single
  skewed-silhouette shape** (deliberately sheared, not a symmetric
  emoji-like star). This is the only star shape used anywhere on the site —
  next to the wordmark, inline in the headline, as a section marker, and as
  a faint watermark on placeholder project visuals. Star exploration is
  closed — do not introduce another variant without an explicit new
  request.
- Thin technical lines and index numbers (`[ 01 ]`, `01 / 04`) are allowed
  but rationed: at most one or two per viewport, always load-bearing
  (marking a real section or coordinate), never pure decoration. A line is
  drawn only when it marks something real (a grid edge, a section
  boundary) — never as a standalone compositional flourish.
- No blur, no glow, no gradients, no random dots-as-texture, no geometric
  line patterns covering empty space.
- **Negative space is a deliberate tool, not empty space to be filled.**
  The hero in particular leans on this: the content column occupies roughly
  two-thirds of the frame and the remainder is left open, marked only by a
  small `( 2026 )` coordinate label. No line, shape, or caption is added
  there just to "balance" the composition — restraint is the composition.

## 5. Motion principles

Motion supports reading; it never performs for its own sake.

- **Entrance:** content reveals on load/scroll via short (300–450ms)
  opacity + 8–12px translateY, staggered by ~60–80ms per element. Easing:
  `[0.22, 1, 0.36, 1]` (expo-out-ish).
- **Hover:** restrained — underline wipes, 2–4% scale on project previews,
  color shift on the star (ink → lime) on hover of the wordmark/star only.
- **Star:** may rotate a few degrees or morph slightly on hover/scroll —
  controlled, not continuous/ambient spinning.
- **Scroll:** subtle parallax or reveal is acceptable on section entry; no
  scroll-jacking, no infinite/looping background motion.
- Respect `prefers-reduced-motion`: fall back to opacity-only transitions.
- Library: Motion for React (framer-motion successor). No GSAP unless a
  specific need (e.g. complex scroll-driven sequencing) proves Motion
  insufficient.

## 6. Phase 1 decisions — locked

The following are approved and closed; do not re-litigate them without an
explicit new request:

- Primary font: **Onest** (display and body).
- Technical / editorial metadata font: **JetBrains Mono**.
- Identity mark: **skewed-silhouette five-point star**, one shape, used
  everywhere.
- Base palette: warm off-white (`--bg`) + graphite (`--ink`) + lime
  (`--accent-lime`).
- Orange (`--accent-orange`) stays inactive / reserved.
- No gradients, no blurred glow, no random dots, no decorative clutter.
- Editorial / art-directed direction inspired by CULT + Anilopeer.
- Clarity for business users comes first, art direction second.

## 7. Selected Work & case pattern (Phase 2)

- **Project visuals are real assets, not invented UI.** Each project reads
  its primary/supporting imagery from `/public/projects/<slug>/`. Until real
  files exist there, `ProjectVisual` renders a neutral placeholder (a
  `--bg-raised` panel with a faint skewed-star watermark and a small mono
  caption naming what belongs there) — never a hand-built fake interface.
  See `ASSETS.md` for the expected filenames per project.
- **The grid is curated, not uniform.** Four projects at different visual
  scales and column spans, alternating which side carries the larger piece,
  with deliberate vertical offsets between rows — an archive, not a SaaS
  card grid or masonry.
- **Opening a case is a shared-element transition**, not a modal. The
  clicked project's visual expands in place (Motion `layoutId`) into a
  fullscreen editorial layer; the rest of the case content fades in after
  the shape lands. Only Kora has a built case in Phase 2 — the other three
  cards are visually identical/clickable but inert until their cases are
  built.
- Case content stays short by design: one-sentence intro, problem /
  solution / capabilities as short lines (not paragraphs), a secondary tech
  line, and a visually-prepared (not yet wired) prev/next nav.

## 8. Do-not list (from brief, binding)

No glassmorphism, no excessive rounded cards/pill UI, no SaaS feature grids,
no gradient blobs, no blurred glow, no generic startup or developer-terminal
aesthetic, no code-as-decoration, no random dots, no excessive thin
geometric line patterns, no scrapbook/tape/handwritten notes, no girly
personal-brand aesthetic, no stock photography, no decorative element
without a functional/structural reason.
