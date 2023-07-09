import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import ReturnBodyComponent from 'hooks/ReturnBodyComponent';
import ReturnTitleComponent from 'hooks/ReturnTitleComponent';
import styled from 'styled-components/macro';

const funnelStep = [
  'title',
  'availableDates',
  'preferTimes',
  'place',
  'duration',
  'hostInfo',
  'additionalInfo',
];

function CreateMetting() {
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState(``);

  const currentStep = funnelStep[step];
  return (
    <>
      <ViewTestingWrapper>
        <Header setStep={setStep} />

        <ReturnTitleComponent step={currentStep} />

        <ReturnBodyComponent
          currentStep={currentStep}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setStep={setStep}
        />
      </ViewTestingWrapper>
    </>
  );
}

export default CreateMetting;

const ViewTestingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
