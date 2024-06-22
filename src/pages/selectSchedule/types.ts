import { ColumnStructure } from 'components/timetableComponents/types';
import { ReactNode } from 'react';

export type Step = 'selectTimeSlot' | 'selectPriority';
export type StepSlotsType = { [key in Step]: (props: ColumnStructure) => ReactNode };
export type StepBtnsType = { [key in Step]: ReactNode };
