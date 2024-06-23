import { useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';
import styled from 'styled-components';

import PriorityCta from './selectPriority/PriorityCta';
import PriorityDropdown from './selectPriority/PriorityDropdown';
import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';
import TimeSlotCta from './selectTimeSlot/TimeSlotCta';
import { Step, StepBtnsType, StepSlotsType } from '../types';
import { resetPriorities } from '../utils';

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
  const stepSlot = stepSlots[step];

  const isValidSelection = Object.keys(selectedSlots).length !== 0;
  const stepBtns: StepBtnsType = {
    selectTimeSlot: <TimeSlotCta isValidSelection={isValidSelection} setStep={setStep} />,
    selectPriority: <PriorityCta />,
  };
  const stepBtn = stepBtns[step];

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
        {stepSlot}
      </Timetable>
      {step === 'selectPriority' && <PriorityDropdown />}
      {stepBtn}
    </TimetableContext.Provider>
  );
}

export default SelectScheduleTable;
