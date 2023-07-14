import React from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

function TimeDropDown() {
  return (
    <TimeDropDownWrapper>
      <TimeDropDownList>
        <Text font="button1" color={`${theme.colors.white}`}>
          7월 13일 (일)
        </Text>
      </TimeDropDownList>
      <TimeDropDownList>
        {' '}
        <Text font="button1" color={`${theme.colors.white}`}>
          7월 14일 (월)
        </Text>
      </TimeDropDownList>
      <TimeDropDownList>
        {' '}
        <Text font="button1" color={`${theme.colors.white}`}>
          7월 14일 (월)
        </Text>
      </TimeDropDownList>
      <TimeDropDownList>
        {' '}
        <Text font="button1" color={`${theme.colors.white}`}>
          7월 14일 (월)
        </Text>
      </TimeDropDownList>
      <TimeDropDownList>
        {' '}
        <Text font="button1" color={`${theme.colors.white}`}>
          7월 14일 (월)
        </Text>
      </TimeDropDownList>
    </TimeDropDownWrapper>
  );
}

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
const TimeDropDownList = styled.li`
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
