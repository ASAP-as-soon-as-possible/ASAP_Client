import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';
import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import { Step, StepBtnsType, StepSlotsType } from '../types';

import Button from 'components/atomComponents/Button';
import PriorityCta from './selectPriority/PriorityCta';
import PriorityDropdown from './selectPriority/PriorityDropdown';
import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';
import Text from 'components/atomComponents/Text';
import TimeSlotCta from './selectTimeSlot/TimeSlotCta';
import Timetable from 'components/timetableComponents/Timetable';
import { resetPriorities } from '../utils';
import styled from 'styled-components';
import { useState } from 'react';

interface SelectScheduleTableProps extends TimetableStructure {
  step: Step;
  setStep: (step: Step) => void;
}

function SelectScheduleTable({
  step,
  setStep,
  timeSlots,
  availableDates,
}: SelectScheduleTableProps) {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({});

  const stepSlots: StepSlotsType = {
    selectTimeSlot: ({ date, timeSlots }: ColumnStructure) => (
      <SelectionSlots date={date} timeSlots={timeSlots} />
    ),
    selectPriority: ({ date, timeSlots }: ColumnStructure) => (
      <PrioritySlots date={date} timeSlots={timeSlots} />
    ),
  };

  const isValidSelection = Object.keys(selectedSlots).length !== 0;

  const stepBtns: StepBtnsType = {
    selectTimeSlot: <TimeSlotCta isValidSelection={isValidSelection} setStep={setStep} />,
    selectPriority: <PriorityCta />,
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
      {stepBtns[step]}
    </TimetableContext.Provider>
  );
}

export default SelectScheduleTable;
