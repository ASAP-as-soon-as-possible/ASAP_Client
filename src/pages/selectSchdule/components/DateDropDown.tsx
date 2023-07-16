import React, { useEffect, useRef, SetStateAction, Dispatch } from 'react';

import Text from 'components/atomComponents/Text';
import { useRecoilState } from 'recoil';

import { scheduleAtom, dateAtoms } from '/src/recoil/atoms/dateAtom';

import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface PropTypes {
  id: number;
  month: number;
  day: number;
  dayOfWeek: string;
  handleDropDown: (id: number) => {};
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

function DateDropDown({ month, day, dayOfWeek, setIsOpen, isOpen }: PropTypes) {
  const [schedule, setSchedule] = useRecoilState(scheduleAtom);
  const ref = useRef<HTMLDivElement>(null);
  const getDate = () => {
    const updatedDate = `${month}월 ${day}일 ${dayOfWeek}요일`;
    setSchedule({ ...schedule, date: updatedDate });
    console.log(updatedDate);
  };
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
    <DropDownList onClick={getDate} ref={ref}>
      <Text font="button1" color={`${theme.colors.white}`}>
        {`${month}월 ${day}일 ${dayOfWeek}요일`}
      </Text>
    </DropDownList>
  );
}

const DropDownList = styled.div`
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
export default DateDropDown;
