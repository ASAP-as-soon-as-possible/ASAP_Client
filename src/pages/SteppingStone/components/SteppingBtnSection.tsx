import React from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';

interface ButtonType {
  [key: string]: React.JSX.Element;
}

const ButtonSection: ButtonType = {
  meetComplete: (
    <>
      <Button typeState={'halfTertiaryActive'}>
        <Text font={'button2'}>링크 복사하기</Text>
      </Button>
      <Button typeState={'halfPrimaryActive'}>
        <Text font={'button2'}>나의 가능시간 입력</Text>
      </Button>
    </>
  ),
  hostScheduleComplete: (
    <>
      <Button typeState={'halfTertiaryActive'}>
        <Text font={'button2'}>방장페이지 입장</Text>
      </Button>
      <Button typeState={'halfPrimaryActive'}>
        <Text font={'button2'}>링크 복사하기</Text>
      </Button>
    </>
  ),
  meetEntrance: (
    <>
      <Button typeState={'halfSecondaryActive'}>
        <Text font={'button2'}>방장 입장하기</Text>
      </Button>
      <Button typeState={'halfPrimaryActive'}>
        <Text font={'button2'}>팀원 입장하기</Text>
      </Button>
    </>
  ),
  memberScheduleComplete: (
    <>
      <Button typeState={'primaryActive'}>
        <Text font={'button2'}>홈으로 돌아가기</Text>
      </Button>
    </>
  ),
};

interface SteppingProps {
  steppingType: string;
}

function SteppingBtnSection({ steppingType }: SteppingProps) {
  const currentButtonSection = ButtonSection[steppingType];
  return (
    <>
      <StyledBtnSection>{currentButtonSection}</StyledBtnSection>
    </>
  );
}

export default SteppingBtnSection;

const StyledBtnSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 1.2rem;
  flex-direction: row;
  gap: 1.4rem;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
`;
