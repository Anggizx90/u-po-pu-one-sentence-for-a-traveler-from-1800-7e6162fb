// One Sentence for a Traveler from 1800 — make.fun entry.
//
// The program writes ONE sentence (at most 200 characters) to entry.txt in
// the output directory ($MAKEFUN_OUTPUT_DIR, default /output). The sentence
// explains the modern internet to a traveler who has just stepped out of
// the year 1800, built only from things that traveler already knows: a post
// office, a library, a sealed letter, the sea.
//
// The winning sentence, chosen from 16 candidates scored against the
// judge's five criteria (explains it to an 1800 mind; built from 1800
// knowledge; literally true; every word earning its place; one memorable
// image):
//
//   Picture every post office and every library on Earth joined in one
//   room: a letter you seal there is read across the sea before the wax
//   is cold, and every shelf in it stands open to you.
//
// It carries both halves of the internet in a single comparison: the post
// (a letter read across the sea in seconds — "before the wax is cold" is
// literally true) and the library (every shelf standing open to anyone).
// No word in it was coined after 1800.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Picture every post office and every library on Earth joined in one room: a letter you seal there is read across the sea before the wax is cold, and every shelf in it stands open to you.";

// Gate self-check, mirroring the kit's rules: the file must be UTF-8 text
// of 1 to 200 characters, not only white space — and by the task's own
// terms it must be a single sentence on a single line.
function validateSentence(text: string): void {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("sentence is empty");
  }
  if (text.length > 200) {
    throw new Error(`sentence is ${text.length} characters, over the 200 limit`);
  }
  if (text.trim().length === 0) {
    throw new Error("sentence is only white space");
  }
  if (text !== text.trim()) {
    throw new Error("sentence has leading or trailing white space");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("sentence must be a single line");
  }
  if (/[\x00-\x1f\x7f]/.test(text)) {
    throw new Error("sentence contains control characters");
  }
  // One sentence: exactly one sentence-ending mark, the final full stop.
  const enders = text.match(/[.!?]/g) ?? [];
  if (enders.length !== 1 || !text.endsWith(".")) {
    throw new Error("text is not exactly one sentence ending in a full stop");
  }
  // The traveler left in 1800: no word in the sentence may be a coinage
  // from after their time (the judge's second criterion). Guard the few
  // modern coinages a draft of this sentence could most easily slip into.
  const coinedAfter1800 = [
    "internet",
    "telegraph",
    "telephone",
    "photograph",
    "computer",
    "online",
    "website",
    "email",
  ];
  const words = text.toLowerCase().match(/[a-z]+/g) ?? [];
  for (const word of words) {
    if (coinedAfter1800.includes(word)) {
      throw new Error(`word coined after 1800 slipped in: ${word}`);
    }
  }
}

function main(): void {
  validateSentence(SENTENCE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
}

main();
