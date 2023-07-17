import React, { useState } from 'react';

import { styled } from 'styled-components';
//라우터 /Change로 확인 가능
function ChangeView() {
  const [viewBest, setViewBest] = useState<boolean>(true);
  return (
    <ChangeViewWrapper>
      <ViewPickerWrapper>
        <ChangeViewPicker id="best" onClick={() => setViewBest(true)} $isClicked={viewBest}>
          최적의 회의시간
        </ChangeViewPicker>
        <ChangeViewPicker id="obverall" onClick={() => setViewBest(false)} $isClicked={viewBest}>
          종합 일정 시간표
        </ChangeViewPicker>
      </ViewPickerWrapper>
      <ViewContainer>
        {/* green,blue 자리에 컴포넌트 입력 */}
        {viewBest ? <Green>최적의 회의시간</Green> : <Blue>종합 일정 시간표</Blue>}
      </ViewContainer>
    </ChangeViewWrapper>
  );
}

export default ChangeView;

const ChangeViewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ViewPickerWrapper = styled.div`
  display: flex;
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
const ViewContainer = styled.div`
  display: felx;
  align-items: center;
`;

const Green = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 37rem;
  height: 30rem;
`;
const Blue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  width: 37rem;
  height: 30rem;
`;
