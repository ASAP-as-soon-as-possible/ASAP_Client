import { ScheduleStates, TimeStates } from '../types/Schedule';
import { useEffect, useRef, useState } from 'react';

import EndTimeDropDown from './EndTimeDropDown';
import Text from 'components/atomComponents/Text';
import { addThirtyMinutesToLastElement } from '../utils/addThirtyMinutesToLastElement';
import getTimeSlots from 'components/legacy/scheduleComponents/utils/getTimeSlots';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface PropTypes {
  text: string;
  id: number;
  handleEndTime: (id: number, endTime: string) => void;
  scheduleList: ScheduleStates[];
  preferTimes: TimeStates[];
}

function EndTimeSelect({ text, id, handleEndTime, scheduleList, preferTimes }: PropTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const startTimeModal = () => {
    setIsOpen((prev) => !prev);
  };

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
    <TimeSelectWrapper>
      <TimeSelectSection $drop={isOpen} onClick={startTimeModal} ref={ref}>
        {scheduleList[id - 1]?.endTime ? (
          <Text font="button2" color={`${theme.colors.white}`}>
            {scheduleList[id - 1].endTime}
          </Text>
        ) : (
          <Text font="button2" color={`${theme.colors.grey5}`}>
            {"종료 시간"}
          </Text>
        )}
      </TimeSelectSection>
      {isOpen && (
        <TimeDropDownWrapper>
          { getTimeSlots(preferTimes) && addThirtyMinutesToLastElement(getTimeSlots(preferTimes)).map((item) => (
            <EndTimeDropDown
              key={item}
              times={item}
              text={text}
              id={id}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              handleEndTime={handleEndTime}
            />
          ))}
        </TimeDropDownWrapper>
      )}
    </TimeSelectWrapper>
  );
}
const TimeSelectWrapper = styled.div`
  position: relative;
`;
const TimeSelectSection = styled.div<{ $drop: boolean }>`
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
const TimeDropDownWrapper = styled.div`
  position: absolute; //drop down에서 아래 DOM을 밀고 싶을 땐 지워주기

  z-index: 2;
  width: 13.6rem;
  height: 14.4rem;
  overflow:auto;

  //스크롤 없애기
  /* -ms-overflow-style: none; // 인터넷 익스플로러
  scrollbar-width: none; // 파이어폭스
  &::-webkit-scrollbar { //크롬
    display: none;
  } */

`;
export default EndTimeSelect;
