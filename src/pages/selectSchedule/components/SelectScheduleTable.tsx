import { useState } from 'react';

import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';

import PriorityColumn from './selectPriority/PriorityColumn';
import PriorityCta from './selectPriority/PriorityCta';
import PriorityDropdown from './selectPriority/PriorityDropdown';
import SelectionColumn from './selectTimeSlot/SelectionColumn';
import TimeSlotCta from './selectTimeSlot/TimeSlotCta';
import { useScheduleStepContext } from '../contexts/useScheduleStepContext';
import { SelectContext, SelectedSlotType } from '../contexts/useSelectContext';
import { StepSlotsType, StepbottomItemsType } from '../types';

function SelectScheduleTable({ timeSlots, availableDates }: TimetableStructure) {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({});

  const { scheduleStep } = useScheduleStepContext();

  const stepColumns: StepSlotsType = {
    selectTimeSlot: ({ date, timeSlots }: ColumnStructure) => (
      <SelectionColumn date={date} timeSlots={timeSlots} />
    ),
    selectPriority: ({ date, timeSlots }: ColumnStructure) => (
      <PriorityColumn date={date} timeSlots={timeSlots} />
    ),
  };
  const stepColumn = stepColumns[scheduleStep];

  const bottomItems: StepbottomItemsType = {
    selectTimeSlot: <TimeSlotCta />,
    selectPriority: (
      <>
        <PriorityDropdown />
        <PriorityCta />
      </>
    ),
  };
  const bottomItem = bottomItems[scheduleStep];

  return (
    <SelectContext.Provider
      value={{
        startSlot,
        setStartSlot,
        selectedSlots,
        setSelectedSlots,
      }}
    >
      <Timetable timeSlots={timeSlots} availableDates={availableDates} bottomItem={bottomItem}>
        {stepColumn}
      </Timetable>
    </SelectContext.Provider>
  );
}

export default SelectScheduleTable;
