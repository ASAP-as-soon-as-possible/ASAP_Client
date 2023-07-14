import React, { useState } from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import TimeDropDown from './TimeDropDown';

function TimeSelect({ text }): string {
  const [startTime, setStartTime] = useState(false);
  const [endTime, setEndTime] = useState(false);

  const handelStartTime = () => {
    setStartTime((prev) => !prev);
  };
  return (
    <TimeSelectWrapper>
      <TimeSelectContainer $drop={startTime} onClick={handelStartTime}>
        <Text font="button2" color={`${theme.colors.grey5}`}>
          {text}
        </Text>
      </TimeSelectContainer>
      {startTime ? <TimeDropDown /> : <div />}
    </TimeSelectWrapper>
  );
}
const TimeSelectWrapper = styled.div``;
const TimeSelectContainer = styled.div<{ $drop: boolean }>`
  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  border-bottom-left-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};
  border-bottom-right-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};

  background-color: ${({ theme }) => theme.colors.grey7};
  cursor: pointer;

  width: 13.6rem;
  height: 4.8rem;
`;

export default TimeSelect;
