import React from 'react';

import Text from 'components/atomComponents/Text';
import { DropDownIc, DropUpIc } from 'components/Icon/icon';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import DateDropDown from './DateDropDown';
import { dummyData } from './dummyData';

interface PropTypes {
  dropdown: boolean;
  handleDropDown: (index: number) => void;
  id: number;
}

function DateSelect({ dropdown, handleDropDown, id }: PropTypes) {
  return (
    <DateSelectWrapper>
      <DateSelectContainer $drop={dropdown} onClick={() => handleDropDown(id)}>
        <Text font="button2" color={`${theme.colors.grey5}`}>
          날짜 선택
        </Text>
        <DropDownIconWrapper>{dropdown ? <DropDownIcon /> : <DropUpIc />}</DropDownIconWrapper>
      </DateSelectContainer>
      {dropdown ? (
        <div />
      ) : (
        <DropDownWrapper>
          {dummyData.availableDates.map((item) => (
            <DateDropDown
              id={id}
              key={item.day + item.month}
              month={item.month}
              day={item.day}
              dayOfWeek={item.dayOfWeek}
              handleDropDown={handleDropDown}
            />
          ))}
        </DropDownWrapper>
      )}
    </DateSelectWrapper>
  );
}

const DateSelectWrapper = styled.div`
  position: relative;
`;

const DateSelectContainer = styled.div<{ $drop: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  border-bottom-left-radius: ${(props) => (props.$drop ? '0.8rem' : '0rem')};
  border-bottom-right-radius: ${(props) => (props.$drop ? '0.8rem' : '0rem')};

  background-color: ${({ theme }) => theme.colors.grey7};

  cursor: pointer;
  width: 100%;
  height: 4.8rem;
  text-align: center;
`;
const DropDownIconWrapper = styled.div`
  position: absolute;
  bottom: 2.1rem;
  left: 25.5rem;
`;
const DropDownIcon = styled(DropDownIc)``;

const DropDownWrapper = styled.div`
  position: absolute; //drop down에서 아래 DOM을 밀고 싶을 땐 지워주기

  z-index: 3;
  width: 28rem;
  height: 14.4rem;
  overflow:auto;
`;
export default DateSelect;
