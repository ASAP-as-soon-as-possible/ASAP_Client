import React, { useState } from 'react';

import Text from 'components/atomComponents/Text';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import { dummyData, time } from './dummyData';
import TimeDropDown from './TimeDropDown';

interface PropTypes {
  text: string;
  id: number;
}
function TimeSelect({ text, id }: PropTypes) {
  const [startTime, setStartTime] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleStartTime = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <TimeSelectWrapper>
      <TimeSelectSection $drop={startTime} onClick={handleStartTime}>
        <Text font="button2" color={`${theme.colors.grey5}`}>
          {text}
        </Text>
      </TimeSelectSection>
      {isOpen && (
        <TimeDropDownWrapper>
          {time.map((item, i) => (
            <TimeDropDown
              key={i}
              times={item}
              text={text}
              id={id}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
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
export default TimeSelect;
