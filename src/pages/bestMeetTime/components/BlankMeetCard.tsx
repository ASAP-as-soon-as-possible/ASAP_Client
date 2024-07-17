import React from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

function BlankMeetCard() {
  return (
    <BlankMeetCardWrapper>
      <Text font={'body4'} color={`${theme.colors.grey3}`}>
        입력된 다른 시간대가 없어요!
      </Text>
    </BlankMeetCardWrapper>
  );
}

export default BlankMeetCard;

const BlankMeetCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  border-radius: 1rem;
  width: 33.5rem;
  height: 5.2rem;
`;
