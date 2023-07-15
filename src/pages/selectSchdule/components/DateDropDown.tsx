import React from 'react';

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
  handleDropDown: () => {};
}

function DateDropDown({ month, day, dayOfWeek, id, handleDropDown }: PropTypes) {
  const [schedule, setSchedule] = useRecoilState(scheduleAtom);

  const getDate = () => {
    const updatedDate = `${month}월 ${day}일 ${dayOfWeek}요일`;
    setSchedule({ ...schedule, date: updatedDate });
    console.log(updatedDate);
    handleDropDown(id);
  };
  return (
    <DropDownList onClick={getDate}>
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
