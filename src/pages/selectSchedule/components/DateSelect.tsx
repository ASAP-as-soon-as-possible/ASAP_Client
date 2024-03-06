
import { useEffect, useRef, useState } from 'react'; // Import React를 추가합니다.

import Text from 'components/atomComponents/Text';
import { DropDownIc, DropUpIc } from 'components/Icon/icon';
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

const DateSelect = ({ id, handleDate, availableDates, scheduleList }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [isOpen]); // ref.current를 의존성 배열에서 제거합니다.

  return (
    <DateSelectWrapper>
      <DateSelectContainer $drop={isOpen} onClick={() => setIsOpen((prev) => !prev)} ref={ref}>
        {(id >= 1) && scheduleList[id - 1]?.date ? (
          <Text font="button2" color={`${theme.colors.white}`}>
            {scheduleList[id - 1].date}
          </Text>
        ) : (
          <Text font="button2" color={`${theme.colors.grey5}`}>
            날짜 선택
          </Text>
        )}
        <DropDownIconWrapper>{isOpen ? <DropUpIc /> : <DropDownIcon />}</DropDownIconWrapper>
      </DateSelectContainer>
      {isOpen && ( // isOpen이 true일 때에만 렌더링되도록 변경합니다.
        <DropDownWrapper>
          {availableDates.map((item) => (
            <DateDropDown
              key={item.day + item.month}
              month={item.month}
              day={item.day}
              dayOfWeek={item.dayOfWeek}
              handleDate={handleDate}
            />
          ))}
        </DropDownWrapper>
      )}
    </DateSelectWrapper>
  );
};

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
  position: absolute;
  z-index: 3;
  width: 28rem;
  height: 14.4rem;
  overflow: auto;
`;

export default DateSelect;
