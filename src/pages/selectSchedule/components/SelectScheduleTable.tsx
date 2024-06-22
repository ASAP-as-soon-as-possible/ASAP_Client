import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';
import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import { Step, StepSlotsType } from '../types';

import Button from 'components/atomComponents/Button';
import PriorityDropdown from './selectPriority/PriorityDropdown';
import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';
import Text from 'components/atomComponents/Text';
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
      <BtnDim>
        <Button
          typeState={isValidSelection ? 'primaryActive' : 'secondaryDisabled'}
          onClick={() => {
            setStep('selectPriority');
          }}
        >
          <Text font={'button2'}>다음</Text>
        </Button>
      </BtnDim>
    </TimetableContext.Provider>
  );
}

export default SelectScheduleTable;

const BtnDim = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: end;
  justify-content: center;

  margin-top: 3rem;
  background: ${({ theme }) => theme.colors.dim_gradient};
  padding-bottom: 2.9rem;

  width: 100%;
  height: 16.4rem;

  pointer-events: none;
`;
