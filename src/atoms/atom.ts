import { ScheduleStates } from 'pages/selectSchdule/types/Schedule';
import { atom } from 'recoil';

export const methodStateAtom = atom<boolean>({
  key: 'methodStateAtom',
  default: false,
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
});
