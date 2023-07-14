import { Dispatch, SetStateAction, useState } from 'react';

import Text from 'components/atomComponents/Text';
import { BackIc, ExitIc, HambergerIc, MainLogoIc } from 'components/Icon/icon';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

const navigationOption = ['공지사항', 'ASAP family', '약속 생성하기', '피드백 보내기'];

interface HeaderProps {
  position: string;
  setStep?: Dispatch<SetStateAction<number>>;
}

function Header({ position, setStep }: HeaderProps) {
  const navigate = useNavigate();
  const [isNaviOpen, setIsNaviOpen] = useState(false);
  const backToFunnel = () => {
    if (setStep !== undefined) {
      setStep((prev) => {
        if (prev === 0) {
          navigate('/');
          return prev;
        }
        return prev - 1;
      });
    }
  };
  return (
    <HeaderWrapper>
      <HeaderSection>
        {position === 'onBoarding' ? (
          <LogoIcSection>
            <MainLogoIc />
          </LogoIcSection>
        ) : (
          <IconSection onClick={backToFunnel}>
            <BackIc />
          </IconSection>
        )}
        {position === 'onBoarding' ? null : (
          <Text font={'title2'} color={`${theme.colors.white}`}>
            회의정보입력
          </Text>
        )}
        <IconSection onClick={() => setIsNaviOpen((prev) => !prev)}>
          <HambergerIc />
        </IconSection>
      </HeaderSection>
      {isNaviOpen ? (
        <NavigationSection>
          <IconContainer onClick={() => setIsNaviOpen((prev) => !prev)}>
            <ExitIc />
          </IconContainer>
          <NavigationContainer>
            {navigationOption.map((option, i) => {
              return (
                <Text key={i + option} font={'title2'} color={`${theme.colors.white}`}>
                  {option}
                </Text>
              );
            })}
          </NavigationContainer>
        </NavigationSection>
      ) : null}
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper =styled.div``
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
  width: 100%;
`;

const LogoIcSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
  height: 4.2rem;
`;

const IconSection = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.2rem;
`;

const NavigationSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
`;

const NavigationContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.grey8};
  padding: 20rem 2.4rem;
  width: 25.7rem;
  height: 100vh;
  span {
    display: flex;
    align-items: center;
    height: 5.2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5.1rem;
  right: 0.8rem;
  align-items: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
  width: 4.2rem;
  height: 4.2rem;
`;
