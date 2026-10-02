# Staging notes (temporary, not part of final repo)

Star variants to implement as React components in components/stars/:
- StarElongated.tsx — outer points pulled vertically, slightly taller than wide
- StarTilted.tsx — regular-ish star rotated ~12-15deg with one point emphasized
- StarAsymmetric.tsx — irregular outer radii per point (not perfectly repeating)
- StarSharp.tsx — deeper inner radius ratio (thinner, sharper arms) + slight rotation

All drawn on a 100x100 viewBox, stroke or fill = currentColor so they inherit
ink/lime via Tailwind text color utility.
