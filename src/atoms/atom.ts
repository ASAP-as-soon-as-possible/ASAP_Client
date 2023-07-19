import { PreferTime } from 'components/scheduleComponents/types/AvailableScheduleType';
import { DateStates } from 'pages/selectSchdule/types/Schedule';
import { atom } from 'recoil';

export const methodStateAtom = atom<boolean>({
  key: 'methodStateAtom',
  default: false,
});

export const availableDatesAtom = atom<DateStates[]>({
  key: 'availableDatesAtom',
  default: [],
});

export const preferTimesAtom = atom<PreferTime[]>({
  key: 'preferTimesAtom',
  default: [],
});
