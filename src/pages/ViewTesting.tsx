import { useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
import Header from 'components/moleculesComponents/Header';
import ReturnTitleComponent from 'src/hooks/ReturnTitleComponent';
import styled from 'styled-components/macro';

// 차후 이용계획
// const funnelStep = [
//   'title',
//   'availableDates',
//   'preferTimes',
//   'place',
//   'duration',
//   'hostInfo',
//   'additionalInfo',
// ];

function ViewTesting() {
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState(``);
  return (
    <>
      <ViewTestingWrapper>
        <Header setStep={setStep} />

        <ReturnTitleComponent step={step} />

        <TextInput
          value={inputValue}
          setValue={setInputValue}
          placeholder={'서비스 기획 1차 회의'}
        />
        <StyledBtnWrapper>
          <Button
            typeState={inputValue && inputValue.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
              inputValue && inputValue.length < 16 ? () => setStep((prev) => prev + 1) : undefined
            }
          >
            <Text font={'button2'}>약속 생성하기</Text>
          </Button>
        </StyledBtnWrapper>
      </ViewTestingWrapper>
    </>
  );
}

export default ViewTesting;

const ViewTestingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;
