import { useState } from 'react';

import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';

import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';
import { Step, StepSlotsType } from '../types';

interface SelectScheduleTableProps extends TimetableStructure {
  step: Step;
}

function SelectScheduleTable({ step, timeSlots, availableDates }: SelectScheduleTableProps) {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({
    0: {
      date: '6/20/목',
      startSlot: '15:00',
      endSlot: '20:00',
      priority: 1,
    },
  });

  const stepSlots: StepSlotsType = {
    selectTimeSlot: ({ date, timeSlots }: ColumnStructure) => (
      <SelectionSlots date={date} timeSlots={timeSlots} />
    ),
    selectPriority: ({ date, timeSlots }: ColumnStructure) => (
      <PrioritySlots date={date} timeSlots={timeSlots} />
    ),
  };

  return (
    <TimetableContext.Provider
      value={{
        startSlot,
        setStartSlot,
        selectedSlots,
        setSelectedSlots,
      }}
    >
      <Timetable timeSlots={timeSlots} availableDates={availableDates}>
        {stepSlots[step]}
      </Timetable>
    </TimetableContext.Provider>
  );
}

export default SelectScheduleTable;
