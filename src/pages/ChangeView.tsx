import React, { useState } from 'react';

import { styled } from 'styled-components';

function ChangeView() {
  const [viewBest, setViewBest] = useState<boolean>(true);
  return (
    <ViewTestingWrapper>
      <ChangeViewPicker id="best" onClick={() => setViewBest(true)} $isClicked={viewBest}>
        최적의 회의시간
      </ChangeViewPicker>
      <ChangeViewPicker id="obverall" onClick={() => setViewBest(false)} $isClicked={viewBest}>
        종합 일정 시간표
      </ChangeViewPicker>
    </ViewTestingWrapper>
  );
}

export default ChangeView;

const ViewTestingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.5rem;
  height: 72.9rem;
  color: white;
`;
const ChangeViewPicker = styled.div<{ $isClicked: boolean }>`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.body2};
  width: 18.7rem;
  height: 3.5rem;
  color: ${({ $isClicked, theme, id }) =>
    id === 'best'
      ? $isClicked
        ? theme.colors.main1
        : theme.colors.grey4
      : $isClicked
        ? theme.colors.grey4
        : theme.colors.main1};
  border-bottom: 2px solid
    ${({ $isClicked, theme, id }) =>
      id === 'best'
        ? $isClicked
          ? theme.colors.main1
          : theme.colors.grey4
        : $isClicked
          ? theme.colors.grey4
          : theme.colors.main1};
`;
