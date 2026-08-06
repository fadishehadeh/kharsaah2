# Use the client's Al-Kharsaah photos across the deck

Replace the AI-generated and stock imagery with the 10 real Al-Kharsaah photos you just uploaded, and spread them so no two consecutive slides share a background.

## What changes

1. **Upload the 10 photos to the CDN** as asset pointers (no binaries in the repo) and give each a descriptive name so the mapping is readable:
   - `aerial-qatar-logo` (005.jpg) — aerial of the array with the QATAR wordmark
   - `aerial-qatar-logo-alt` (140230.jpg) — same view, alternate frame
   - `aerial-rows` (0983.jpg) — wide aerial of tracker rows
   - `array-horizon` (30.jpg) — panels sweeping to the horizon
   - `array-fence` (33.jpg) — panels behind the arched perimeter fence
   - `array-fence-wide` (34.jpg) — wide view with fence and site infrastructure
   - `panels-diagonal` (28.jpg) — dense diagonal panel rows
   - `panels-field` (29.jpg) — panel field with desert horizon
   - `panels-perimeter` (27.jpg) — rows along the site boundary road
   - `panel-underside` (39.jpg) — close-up of mounting structure / bifacial underside

2. **Re-map every slide's media** in `src/data/deck.ts` so each section gets its own look:
   - Title / contents: aerial hero shots
   - About & At a glance: aerial with QATAR wordmark, array horizon
   - Timeline & Origins: construction-adjacent frames (perimeter, fence-wide)
   - Building the plant (sub-slides): rotate through panel close-ups, underside detail, diagonal rows, fence views — a different image per sub-slide
   - Impact & people: fence/wide site views showing the desert context
   - Partners, challenges, looking ahead: aerial rows and horizon shots

3. **Keep the existing generated visuals only where they carry meaning** — the Qatar location map stays on the sunlight/feasibility slides, since none of the photos convey geography.

4. **Videos**: the current background videos are stock placeholders. Since only stills arrived, slides that used video fall back to their new photo with the existing Ken Burns motion, so nothing looks static or generic. When you send the client videos, I'll swap them back in.

## Technical notes

- Only `src/data/deck.ts` (media map) and new `src/assets/*.asset.json` pointers change; layouts, navigation, colors, and scroll behaviour stay as they are.
- Stale generated images that end up unused get deleted from the repo.
- Alt text is rewritten per image for accessibility.
