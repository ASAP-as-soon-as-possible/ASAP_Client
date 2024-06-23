import { useState } from 'react';

import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';

import PriorityCta from './selectPriority/PriorityCta';
import PriorityDropdown from './selectPriority/PriorityDropdown';
import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';
import TimeSlotCta from './selectTimeSlot/TimeSlotCta';
import { useScheduleStepContext } from '../contexts/useScheduleStepContext';
import { SelectContext, SelectedSlotType } from '../contexts/useSelectContext';
import { StepSlotsType, StepbottomItemsType } from '../types';

function SelectScheduleTable({ timeSlots, availableDates }: TimetableStructure) {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({});

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
        {stepSlot}
      </Timetable>
    </SelectContext.Provider>
  );
}

export default SelectScheduleTable;
