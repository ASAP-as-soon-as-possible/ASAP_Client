import { atom } from 'recoil';

export const scheduleAtoms = atom({
  key: 'scheduleAtoms',
  default: [
    {
      id: '',
      date: '',
      startTime: '',
      endTime: '',
      priority: 0,
    },
  ],
});
export const scheduleAtom = atom({
  key: 'scheduleAtom',
  default: { date: '', startTime: '', endTime: '' },
});
