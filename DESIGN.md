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
  - Hero headline: `clamp(3.5rem, 7vw, 6.5rem)`, line-height ~0.98, weight
    500–600.
  - Section headline: `clamp(2rem, 4vw, 3rem)`.
  - Project title (card): `1.5–1.75rem`.
  - Body / supporting line: `1–1.125rem`, weight 400, relaxed line-height
    (1.5).
  - Mono label: `0.75rem`, tracked.
- Headlines must never wrap awkwardly — hand-set line breaks on the hero
  line, don't rely on auto-wrap.

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
| `--accent-lime` | `#C6F135` (acid/lime green) | rare emphasis: star, one word, link underline, active state |
| `--accent-orange` | `#F2622E` | even rarer: single dot, tag, micro-accent |

Rules:
- No purple, pink, blue-purple gradients, glow, or blurred color blobs.
- Lime and orange never appear together in equal weight on one element —
  lime is the primary accent; orange is a punctuation mark (one dot, one
  tag border) used sparingly.
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

- One recurring identity mark: a **five-point star**, deliberately
  imperfect (elongated, tilted, or asymmetric — never a symmetric emoji-like
  star). Used small, next to the wordmark, next to a headline, or as a
  section marker. 4 SVG variants are produced for comparison in
  `/components/stars`.
- Thin technical lines and index numbers (`[ 01 ]`, `01 / 04`) are allowed
  but rationed: at most one or two per viewport, always load-bearing
  (marking a real section or coordinate), never pure decoration.
- No blur, no glow, no gradients, no random dots-as-texture, no geometric
  line patterns covering empty space.

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

## 6. Do-not list (from brief, binding)

No glassmorphism, no excessive rounded cards/pill UI, no SaaS feature grids,
no gradient blobs, no blurred glow, no generic startup or developer-terminal
aesthetic, no code-as-decoration, no random dots, no excessive thin
geometric line patterns, no scrapbook/tape/handwritten notes, no girly
personal-brand aesthetic, no stock photography, no decorative element
without a functional/structural reason.
