import { ScheduleStates } from 'pages/legacy/selectSchedule/types/Schedule';
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

export const timeSlotUserNameAtom = atom<string[] | undefined>({
  key: 'timeSlotUserNameAtom',
  default: undefined,
});

export const clickedTimeSlotAtom = atom<string>({
  key: 'clickedTimeSlotAtom',
  default: undefined,
});

export const userNameAtom = atom<string>({
  key: 'userNameAtom',
  default: '',
});
