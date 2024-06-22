import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import styled from 'styled-components';

import SelectScheduleTable from './components/SelectScheduleTable';
import { Step } from './types';

function SelectSchedule() {
  const [step, setStep] = useState<Step>('selectTimeSlot');

  return (
    <SelectScheduleWrapper>
      <Header position="schedule" setSelectScheduleStep={setStep} />
      <SelectScheduleTable step={step} />
    </SelectScheduleWrapper>
  );
}

export default SelectSchedule;

const SelectScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
