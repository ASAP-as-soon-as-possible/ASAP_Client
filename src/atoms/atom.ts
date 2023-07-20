import { DateStates, ScheduleStates, TimeStates } from 'pages/selectSchedule/types/Schedule';
import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';

// const { persistAtom } = recoilPersist();

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

export const scheduleAtom = atom<ScheduleStates[]>({
  key: 'scheduleAtom',
  default: [
    {
      id: 1,
      date: '',
      startTime: '',
      endTime: '',
      priority: 0,
    },
  ],
  // effects_UNSTABLE: [persistAtom],
});
