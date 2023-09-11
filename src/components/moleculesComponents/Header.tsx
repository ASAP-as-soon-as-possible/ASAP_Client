import { BackIc, ExitIc, HambergerIc, LinkIc, MainLogoIc } from 'components/Icon/icon';
import { Dispatch, SetStateAction, useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import Navigation from './Navigation';
import Text from 'components/atomComponents/Text';
import { notify } from 'utils/toast/copyLink';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

interface HeaderProps {
  position: string;
  setStep?: Dispatch<SetStateAction<number>>;
}

function Header({ position, setStep }: HeaderProps) {
  const navigationOptions = [
    // {
    //   title: '공지사항',
    //   url: '',
    // },
    // {
    //   title: 'ASAP family',
    //   url: '',
    // },
    {
      title: '약속 생성하기',
      url: '/meet/create',
    },
    {
      title: '피드백 보내기',
      url: 'https://tally.so/r/wL79av',
    },
  ]

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

  const { meetingId } = useParams();
  return (
    <>
      <HeaderWrapper>
        <HeaderSection>
          {position === 'onBoarding' ? (
            <LogoIcSection>
              <MainLogoIc />
            </LogoIcSection>
          ) : position === 'createMeeting' ? (
            <IconSection onClick={backToFunnel}>
              <BackIc />
            </IconSection>
          ) : position === 'login' ? (
            <IconSection onClick={() => window.history.back()}>
              <BackIc />
            </IconSection>
          ) : position === 'confirmMeet' ? (
            <ConfirmIconSection>
              <IconSection onClick={() => window.history.back()}>
                <BackIc />
              </IconSection>
              <CopyToClipboard text={`${import.meta.env.VITE_WEB_IP}/meet/${meetingId}`}>
                <IconSection onClick={notify}>
                  <LinkIc />
                </IconSection>
              </CopyToClipboard>
            </ConfirmIconSection>
          ) : position === 'schedule' ? (
            <ConfirmIconSection onClick={() => window.history.back()}>
              <IconSection>
                <BackIc />
              </IconSection>
            </ConfirmIconSection>
          ) : undefined}
          {position === 'createMeeting' ? (
            <Text font={'title2'} color={`${theme.colors.white}`}>
              회의정보입력
            </Text>
          ) : position === 'confirmMeet' ? (
            <Text font={'title2'} color={`${theme.colors.white}`}>
              회의 일정 확정
            </Text>
          ) : position === 'schedule' ? (
            <Text font={'title2'} color={`${theme.colors.white}`}>
              가능 시간 입력
            </Text>
          ) : (
            <EmptyBox />
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
              <Navigation navigationOptions={navigationOptions}/>
            </NavigationContainer>
          </NavigationSection>
        ) : undefined}
      </HeaderWrapper>
    </>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
`;
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

const EmptyBox = styled.div``;

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

const ConfirmIconSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: fit-content;
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
  animation: fadeInRight 0.5s;
  span {
    display: flex;
    align-items: center;
    height: 5.2rem;
  }
  @keyframes fadeInRight {
    0% {
      transform: translate3d(100%, 0, 0);
      opacity: 0.8;
    }
    to {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 2rem;
  right: 0.8rem;
  align-items: center;
  justify-content: center;
  z-index: 3;
  cursor: pointer;
  width: 4.2rem;
  height: 4.2rem;
`;
