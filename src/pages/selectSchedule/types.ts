import { ColumnStructure } from 'components/timetableComponents/types';

export type Step = 'selectTimeSlot' | 'selectPriority';
export type StepSlotsType = { [key in Step]: (props: ColumnStructure) => ReactNode };
