# One Sentence for a Traveler from 1800

[![make.fun](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/Anggizx90/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/rank.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/Anggizx90/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/reward.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

A [make.fun](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb) bounty entry for **One Sentence for a Traveler from 1800**: a program that writes one sentence — at most 200 characters — explaining the modern internet to someone who has just arrived from the year 1800.

## The sentence

> Picture every post office and every library on Earth joined in one room: a letter you seal there is read across the sea before the wax is cold, and every shelf in it stands open to you.

185 characters. Chosen from 16 candidates scored against the judge's five criteria, in the judge's own order. It carries both halves of the internet in a single comparison built only from things a person of 1800 already knows — the post office and the library, the judge brief's own examples. A letter read across the sea *before the wax is cold* is literally true (seconds, against the months a ship once took), and every shelf standing open is the library half: the gathered writings of the world, open to anyone. No word in the sentence was coined after the traveler's time, and the one image — sealing wax still warm while the letter is already read an ocean away — is the one meant to stay with the reader.

## How to run

```sh
node main.ts
```

This writes the sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No dependencies, no network. The program checks its own sentence against the gate before writing: 1–200 characters, a single line, exactly one sentence, and no word coined after 1800.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts && cat /tmp/out/entry.txt
```
