import { ReactNode } from 'react';

import { ColumnStructure } from 'components/timetableComponents/types';

export type ScheduleStepType = 'selectTimeSlot' | 'selectPriority';
export type StepSlotsType = { [key in ScheduleStepType]: (props: ColumnStructure) => ReactNode };
export type StepBtnsType = { [key in ScheduleStepType]: ReactNode };
