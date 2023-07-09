import { Dispatch, SetStateAction } from 'react';

import Text from 'components/atomComponents/Text';
import { BackIc, HambergerIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface HeaderProps {
  setStep: Dispatch<SetStateAction<number>>;
}

function Header({ setStep }: HeaderProps) {
  const backToFunnel = () => {
    setStep((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };
  return (
    <HeaderWrapper>
      <IconSection onClick={backToFunnel}>
        <BackIc />
      </IconSection>
      <Text font={'title2'} color={`${theme.colors.white}`}>
        회의정보입력
      </Text>
      <IconSection>
        <HambergerIc />
      </IconSection>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const IconSection = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.2rem;
  height: 4.2rem;
`;
