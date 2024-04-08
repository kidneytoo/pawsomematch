import { atom } from 'jotai';

export const resultAtom = atom<{
  pools: { key: string; score: number }[];
  answer: string[];
}>({
  pools: [],
  answer: [],
});
