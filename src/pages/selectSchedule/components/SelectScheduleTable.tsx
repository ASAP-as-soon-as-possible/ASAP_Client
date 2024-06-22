import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';
import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import { Step, StepSlotsType } from '../types';

import PriorityDropdown from './selectPriority/PriorityDropdown';
import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';
import Timetable from 'components/timetableComponents/Timetable';
import { useState } from 'react';

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
      priority: 0,
    },
    1: {
      date: '6/20/목',
      startSlot: '21:00',
      endSlot: '22:30',
      priority: 0,
    },
    3: {
      date: '6/21/금',
      startSlot: '15:00',
      endSlot: '20:00',
      priority: 0,
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
      {step === 'selectPriority' && <PriorityDropdown />}
    </TimetableContext.Provider>
  );
}

export default SelectScheduleTable;
