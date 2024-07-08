import { Dispatch, SetStateAction, createContext, useContext } from 'react';

import { ScheduleStepType } from '../types';

interface ScheduleStepContextType {
  scheduleStep: ScheduleStepType;
  setScheduleStep: Dispatch<SetStateAction<ScheduleStepType>>;
}

export const ScheduleStepContext = createContext<ScheduleStepContextType>({
  scheduleStep: 'selectTimeSlot',
  setScheduleStep: () => null,
});

export function useScheduleStepContext() {
  const context = useContext(ScheduleStepContext);
  if (context == null) {
    throw new Error('ScheduleStepContext Error');
  }
  return context;
}
