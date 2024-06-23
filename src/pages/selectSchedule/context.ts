import { createContext, useContext } from 'react';

import { ScheduleStepType } from './types';

interface ScheduleStepContextType {
  scheduleStep: ScheduleStepType;
  setScheduleStep: (scheduleStep: ScheduleStepType) => void;
}

export const ScheduleStepContext = createContext<ScheduleStepContextType>({
  scheduleStep: 'selectTimeSlot',
  setScheduleStep: () => undefined,
});

export function useScheduleStepContext() {
  const context = useContext(ScheduleStepContext);
  if (context == null) {
    throw new Error('ScheduleStepContext Error');
  }
  return context;
}
