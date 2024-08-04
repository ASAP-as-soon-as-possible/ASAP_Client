import { ReactNode } from 'react';

import { ColumnStructure } from 'components/common/timetableComponents/types';

export type ScheduleStepType = 'selectTimeSlot' | 'selectPriority';
export type StepSlotsType = { [key in ScheduleStepType]: (props: ColumnStructure) => ReactNode };
export type StepbottomItemsType = { [key in ScheduleStepType]: ReactNode };

export interface TitlesType {
  [key: string]: {
    main: string;
    sub?: string;
  };
}
