# Project assets

Real screenshots/videos drop into `public/projects/<slug>/` using these
filenames. `ProjectVisual` looks for `primary` first; if it's missing it
renders a placeholder, so partial sets are safe to commit.

```
public/projects/kora/
  primary.webp        (or primary.mp4)  — hero visual, used in the grid card and as the case's primary visual
  detail-1.webp        — large supporting visual, 4:5
  detail-2.webp        — small detail, 1:1
  detail-3.webp        — small detail, 1:1
  detail-4.webp        — wide visual, 21:9

public/projects/service-center/
  primary.webp

public/projects/hasky/
  primary.webp

public/projects/ai-product-intelligence/
  primary.webp
```

Once a project's `primary` (and, for Kora, `detail-*`) files exist, wire them
up in `data/projects.ts` by setting that project's `primaryImage` /
`supportingImages` paths — nothing else needs to change; `ProjectVisual`
switches from placeholder to real image automatically.

Recommended source aspect ratios (placeholders already use these, so real
assets drop in without a layout shift):

- Kora — 4:3 (desktop web app)
- Service Center — 4:3 (desktop web app)
- Hasky — 3:4 (Telegram bot, phone-shaped)
- AI Product Intelligence — 16:9 (dashboard)
