import { DateStates, TimeStates } from 'pages/selectSchdule/types/Schedule';

import { atom } from 'recoil';

export const methodStateAtom = atom<boolean>({
  key: 'methodStateAtom',
  default: false,
});

export const availableDatesAtom = atom<DateStates[]>({
  key: 'availableDatesAtom',
  default: [],
});

export const preferTimesAtom = atom<TimeStates[]>({
  key: 'preferTimesAtom',
  default: [],
});
