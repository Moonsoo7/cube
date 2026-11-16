# Brought in: cube-game

- From: `/c/Users/임문수/Desktop/Claude-Code-Game-Studios/cube-game/index.html` (file, named index.html), 2026-11-16
- Baseline: the tag `baseline/cube-game`, holding only the game's files as they came in
- The original was not changed. Its history, if it had one, stays with it.

| File | Bytes | SHA-256 |
|---|---|---|
| `index.html` | 70453 | `79fa76071c8a8bc4f2234a6361eb7b3488a727f1975578a0c4886be1ca7e6527` |

## Read from the game

- Read: `index.html` in full (lines 1-873), with `game-read.sh`'s rows.
- Screenshots: not assessed. All four runs (first, start, play-10s, play-30s) stopped without a picture (browser exit 21; no headless shell).

| Feature [x] | Where |
|---|---|
| 50 stages | `index.html:373` (`STAGES`, 15 written out + 35 generated) |
| Chain stages | `index.html:457` (`genStage`, chain layers), `index.html:670` (`tap`, chain flood) |
| Combo / lightning combo | `index.html:670` (`tap`: gap ≤0.2 s / ≤0.5 s), `index.html:630` (`comboFx`) |
| Hearts + time limit | `index.html:508`, `index.html:701-707` (`wrong`, `fail`) |
| Blockers / moving / locked cubes | `index.html:492` (`startStage`, blockers from 15), `index.html:537-570` (`moveBlocker`, `moveExtra`, `addLock`), `index.html:851` (`frame`: 20+, 25+) |
| My space | `index.html:708` (`commitWin`), `index.html:775` (`openSpace`) |
| Sound, music, save | `index.html:405` (`save`), the sound section above `index.html:600` |

**Not read:** `three.js r128` (cdnjs) and the Jua font (Google Fonts) were not copied; the game needs the network to play. Why any value is what it is: INTENT UNKNOWN. How it feels: not read from code.

**Tuning values found:** per-stage `layers` and `min` (`index.html:373` on); time `round((60 + units*3)*0.7)` (`index.html:508`); combo windows 0.2 s / 0.5 s and bonus caps 10 (`index.html:670`); blockers `min(6, 2+floor((n-15)/7))` from stage 15 (`index.html:492`); moving cubes from 20, interval `max(0.9, 2.6-(n-20)*0.04)` (`index.html:851`); locks from 25, 5 s, every 3.2 s (`index.html:562`, `index.html:851`); top/bottom split 34% (layout).

**Counts:** `Math.random` 20 · `Date.now` 0 · `performance.now` 3.
