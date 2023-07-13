import { Dispatch, SetStateAction } from 'react';

import Text from 'components/atomComponents/Text';
import { BackIc, HambergerIc, MainLogoIc } from 'components/Icon/icon';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface HeaderProps {
  position: string;
  setStep?: Dispatch<SetStateAction<number>>;
}

function Header({ position, setStep }: HeaderProps) {

  const navigate = useNavigate()
  const backToFunnel = () => {
    if (setStep !== undefined) {
      setStep((prev) => {
        if (prev === 0) {
          navigate('/')
          return prev;
        }
        return prev - 1;
      });
    }
  };
  return (
    <HeaderWrapper>
      {position === 'onBoarding' ? (
        <LogoIcSection>
          <MainLogoIc />
        </LogoIcSection>
      ) : (
        <IconSection onClick={backToFunnel}>
          <BackIc />
        </IconSection>
      )}
      {position === 'onBoarding' ? (
        null
      ) : (
        <Text font={'title2'} color={`${theme.colors.white}`}>
        회의정보입력
      </Text>
      )}
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

const LogoIcSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:0.8rem;
  height: 4.2rem;
`;

const IconSection = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.2rem;
`;
