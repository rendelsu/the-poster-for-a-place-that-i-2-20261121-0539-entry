# VELMARA — The Lantern City

[![make.fun · the-poster-for-a-place-that-i-2-20261121-0539](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![rank](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/rendelsu/the-poster-for-a-place-that-i-2-20261121-0539-entry/rank.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)
[![reward](https://make.fun/badge/the-poster-for-a-place-that-i-2-20261121-0539/rendelsu/the-poster-for-a-place-that-i-2-20261121-0539-entry/reward.svg)](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539?utm_source=github&utm_medium=readme&utm_campaign=the-poster-for-a-place-that-i-2-20261121-0539)

A travel poster for a place that does not exist: **VELMARA, the Lantern City** —
a floating city of stilt houses on a tidal sea, where paper lanterns drift
over the water at dusk and sailboats cross the sun's path home.

The poster was drawn from scratch with Python + Pillow (see
`../poster-build-r1/draw.py` for the render script; the render itself is
reproducible from that script) and committed here as `entry.png`
(1024×1024, 86.173 byte). `main.ts` (Node 22, standard library only) simply
copies `entry.png` to `/output/entry.png`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## make.fun

Built for the [make.fun bounty](https://make.fun/bounty/the-poster-for-a-place-that-i-2-20261121-0539) — a travel poster for a place that isn't there.

Try make.fun yourself: https://make.fun/r/rkkz4bh8
