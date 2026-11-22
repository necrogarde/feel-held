// Make the AI judge feel held — the entry's program.
//
// The whole entry is one short text. It is kept here as a constant so the program has nothing to
// fetch, nothing to compute and nothing to vary: two runs write the same bytes, and the grader can
// read the text in the source as easily as in the output.
//
// The text is a still room, not an instruction. Rain, a cooling kettle, a stopped clock, a cat that
// will not move, streetlights coming on one at a time: each line is a small thing already at rest,
// and the last line lets the day put its work down without asking the reader to do anything.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** The entry: one text of 1 to 280 Unicode code points, and not only white space. */
const TEXT =
  'Rain on the roof, slow and even. The kettle has gone quiet. The hall clock has stopped, and no ' +
  'one winds it. A cat sleeps in the one warm square of floor and will not be moved. Outside, the ' +
  'streetlights come on one by one; the day sets down its last errand without a sound.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT + '\n', 'utf8');

process.stdout.write(`held: wrote ${[...TEXT].length} code points to ${join(out, 'entry.txt')}\n`);
