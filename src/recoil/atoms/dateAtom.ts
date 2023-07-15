import { atom } from 'recoil';

export const scheduleAtoms = atom({
  key: 'scheduleAtoms',
  default: [
    {
      date: '',
      startTime: '',
      endTime: '',
    },
  ],
});
export const scheduleAtom = atom({
  key: 'scheduleAtom',
  default: { date: '', startTime: '', endTime: '' },
});
