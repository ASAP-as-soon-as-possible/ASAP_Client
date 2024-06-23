import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';

import PriorityCta from './selectPriority/PriorityCta';
import PriorityDropdown from './selectPriority/PriorityDropdown';
import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';
import TimeSlotCta from './selectTimeSlot/TimeSlotCta';
import { useScheduleStepContext } from '../context';
import { StepBtnsType, StepSlotsType } from '../types';

function SelectScheduleTable({ timeSlots, availableDates }: TimetableStructure) {
  const { scheduleStep } = useScheduleStepContext();

  const stepSlots: StepSlotsType = {
    selectTimeSlot: ({ date, timeSlots }: ColumnStructure) => (
      <SelectionSlots date={date} timeSlots={timeSlots} />
    ),
    selectPriority: ({ date, timeSlots }: ColumnStructure) => (
      <PrioritySlots date={date} timeSlots={timeSlots} />
    ),
  };
  const stepSlot = stepSlots[scheduleStep];

  const stepBtns: StepBtnsType = {
    selectTimeSlot: <TimeSlotCta />,
    selectPriority: <PriorityCta />,
  };
  const stepBtn = stepBtns[scheduleStep];

  return (
    <>
      <Timetable timeSlots={timeSlots} availableDates={availableDates}>
        {stepSlot}
      </Timetable>
      {scheduleStep === 'selectPriority' && <PriorityDropdown />}
      {stepBtn}
    </>
  );
}

export default SelectScheduleTable;
