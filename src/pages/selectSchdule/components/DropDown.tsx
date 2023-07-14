import React from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

function DropDown() {
  return (
    <DropDownWrapper>
      <DropDownList>
        <Text font="button1" color={`${theme.colors.white}`}>
          7월 13일 (일)
        </Text>
      </DropDownList>
      <DropDownList>
        {' '}
        <Text font="button1" color={`${theme.colors.white}`}>
          7월 14일 (월)
        </Text>
      </DropDownList>
    </DropDownWrapper>
  );
}

const DropDownWrapper = styled.div`
  position: absolute; //drop down에서 아래 DOM을 밀고 싶을 땐 지워주기

  z-index: 2;
  width: 28rem;
  height: 14.4rem;
`;
const DropDownList = styled.li`
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
export default DropDown;
