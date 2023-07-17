import { atom } from 'recoil';

export const methodStateAtom = atom<boolean>({
  key: 'methodStateAtom',
  default: false,
});
