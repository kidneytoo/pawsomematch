import { atom } from 'jotai';

export const soundAtom = atom<{
  isOn: boolean;
  isClick: boolean;
  toResult: boolean;
}>({
  isOn: true,
  isClick: false,
  toResult: false,
});
