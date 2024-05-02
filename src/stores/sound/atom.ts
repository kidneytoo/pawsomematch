import { atom } from 'jotai';

export const soundAtom = atom<{
  isOn: boolean;
  isClick: boolean;
}>({
  isOn: true,
  isClick: false,
});
