import Text from 'components/atomComponents/Text';
import { DropDownIc, DropUpIc } from 'components/Icon/icon';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import DateDropDown from './DateDropDown';

import { DateStates, ScheduleStates } from '../types/Schedule';

interface PropTypes {
  id: number;
  handleDate: (id: number, data: string) => void;
  availableDates: DateStates[];
  scheduleList: ScheduleStates[];
}

function DateSelect({ id, handleDate, availableDates, scheduleList }: PropTypes) {

  const [isOpen, setIsOpen] = useState(false);
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
    <DateSelectWrapper>
      <DateSelectContainer $drop={isOpen} onClick={() => setIsOpen((prev) => !prev)} ref={ref}>
        {(id>=1) && scheduleList[id-1]?.date ? (
          <Text font="button2" color={`${theme.colors.white}`}>
            {scheduleList[id-1].date}
          </Text>
        ) : (
          <Text font="button2" color={`${theme.colors.grey5}`}>
            날짜 선택
          </Text>
        )}

        <DropDownIconWrapper>{isOpen ? <DropUpIc /> : <DropDownIcon />}</DropDownIconWrapper>
      </DateSelectContainer>
      {isOpen ? (
        <DropDownWrapper>
          {availableDates.map((item) => (
            <DateDropDown
              id={id}
              key={item.day + item.month}
              month={item.month}
              day={item.day}
              dayOfWeek={item.dayOfWeek}
              handleDate={handleDate}
            />
          ))}
        </DropDownWrapper>
      ) : (
        <div />
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
  border-bottom-left-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};
  border-bottom-right-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};

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
