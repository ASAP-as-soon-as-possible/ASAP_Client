import React from 'react';

import Text from 'components/atomComponents/Text';

import { scheduleAtom, scheduleAtoms } from '/src/recoil/atoms/dateAtom';

import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface PropTypes {
  times: string;
  text: string;
}
function TimeDropDown({ times, text }: PropTypes) {
  // const [time, setTime] = useRecoilState(scheduleAtom);

  return (
    <TimeDropDownWrapper>
      <Text font="button1" color={theme.colors.white}>
        {times}
      </Text>
    </TimeDropDownWrapper>
  );
}

const TimeDropDownWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey7};
  background: ${({ theme }) => theme.colors.grey6};
  cursor: pointer;
  padding: 1rem;
  height: 4.8rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey7};
  }
`;
export default TimeDropDown;
