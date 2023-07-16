import React, { useRef, useEffect, useState, SetStateAction, Dispatch } from 'react';

import Text from 'components/atomComponents/Text';

import { scheduleAtom, scheduleAtoms } from '/src/recoil/atoms/dateAtom';

import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface PropTypes {
  times: string;
  text: string;
  id: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
function TimeDropDown({ times, text, id, isOpen, setIsOpen }: PropTypes) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const clickOutSide = (e: MouseEvent) => {
        if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', clickOutSide);
      return () => {
        document.removeEventListener('mousedown', clickOutSide);
      };
    },
    [isOpen, ref.current],
  );
  return (
    <TimeDropDownWrapper onClick={setIsOpen((prev) => !prev)} ref={ref}>
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
