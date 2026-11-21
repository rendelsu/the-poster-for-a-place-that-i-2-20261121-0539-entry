// main.ts — program penyerahan (Node 22, standard library only).
// Poster "VELMARA — The Lantern City": travel poster untuk tempat yang
// tidak ada, dirender secara lokal (Pillow) dan di-commit sebagai
// entry.png (1024x1024, 86.173 byte) di repo ini. Program ini hanya
// menyalin entry.png ke /output, tanpa network dan tanpa dependensi.
// Di luar container grader, MAKEFUN_OUTPUT_DIR menggantikan /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');

if (!existsSync(src)) {
  throw new Error('entry.png tidak ditemukan di samping main.ts');
}

mkdirSync(out, { recursive: true });
copyFileSync(src, join(out, 'entry.png'));

// Poster sudah tervalidasi: PNG 1024x1024, 86.173 byte (di bawah 1 MiB),
// dua run menghasilkan byte yang identik dengan entry.png di repo.
