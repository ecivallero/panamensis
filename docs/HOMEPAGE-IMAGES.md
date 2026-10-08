# Homepage image replacement

The homepage currently uses four temporary WebP images. Replace the files in `src/assets/images/` while keeping the filenames unchanged:

| Filename | Homepage role | Recommended crop |
| --- | --- | --- |
| `hero-research-station.webp` | Hero and fieldwork separator | Landscape, subject weighted toward the centre/right |
| `forest-transect.webp` | Full-width landscape separator | Very wide panoramic crop |
| `golden-frog.webp` | Featured story | Portrait or flexible square/portrait crop |
| `archive-table.webp` | Source feature and archive separator | Landscape, readable at both 4:3 and panoramic crops |

Export photographs as WebP in sRGB. A long edge of roughly 2000–2600 px is sufficient for these positions. Preserve the filenames so no template edits are necessary.

The temporary header mark is `src/assets/images/panamensis-mark.svg`. It can be replaced by the definitive logo using the same filename and a square `viewBox`.
