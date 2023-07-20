import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface PropTypes {
  times: string;
  text: string;
  id: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleStartTime: (id: number, startTime: string) => void;
}
function TimeDropDown({ times, text, id, isOpen, setIsOpen, handleStartTime }: PropTypes) {
  const getStartTime = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    handleStartTime(id, times);
    setIsOpen((prev) => !prev);
  };

  return (
    <TimeDropDownWrapper
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        getStartTime(e);
      }}
    >
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
