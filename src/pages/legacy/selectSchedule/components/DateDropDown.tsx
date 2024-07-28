import Text from 'components/atomComponents/Text';
import React from 'react';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface PropTypes {
  id: number;
  month: string;
  day: string;
  dayOfWeek: string;
  handleDate: (id: number, data: string) => void;
}

function DateDropDown({ id, month, day, dayOfWeek, handleDate }: PropTypes) {
  const getDate = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const updatedDate = `${month}월 ${day}일 (${dayOfWeek})`;
    handleDate(id, updatedDate);
  };

  return (
    <DropDownList
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        getDate(e);
      }}
    >
      <Text font="button1" color={`${theme.colors.white}`}>
        {`${month}월 ${day}일 (${dayOfWeek})`}
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
