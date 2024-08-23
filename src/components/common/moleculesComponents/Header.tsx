import { Dispatch, SetStateAction, useState } from 'react';

import Text from 'components/common/atomComponents/Text';
import { BackIc, ExitIc, HambergerIc, LinkIc, MainLogoIc } from 'components/Icon/icon';
import { useScheduleStepContext } from 'pages/selectSchedule/contexts/useScheduleStepContext';
import { ScheduleStepType } from 'pages/selectSchedule/types';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { notify } from 'utils/toast/copyLinkToast';

import Navigation from './Navigation';

import Tooltip from '../../../pages/completeCreateMeeting/components/Tooltip';

interface HeaderProps {
  position?: string;
  setFunnelStep?: Dispatch<SetStateAction<number>>;
  setSelectScheduleStep?: Dispatch<SetStateAction<ScheduleStepType>>;
}

function Header({ position, setFunnelStep }: HeaderProps) {
  const { scheduleStep, setScheduleStep } = useScheduleStepContext();
  const navigationOptions = [
    {
      title: '회의 일정 정하기',
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
    if (setFunnelStep !== undefined) {
      setFunnelStep((prev) => {
        if (prev === 0) {
          navigate('/');
          return prev;
        }
        return prev - 1;
      });
    }
  };
  const backToSelectSchedule = () => {
    if (setScheduleStep !== undefined) {
      if (scheduleStep === 'selectTimeSlot') {
        window.history.back();
        return;
      } else if (scheduleStep === 'selectPriority') {
        setScheduleStep('selectTimeSlot');
      }
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
            </ConfirmIconSection>
          ) : position === 'schedule' ? (
            <ConfirmIconSection onClick={backToSelectSchedule}>
              <IconSection>
                <BackIc />
              </IconSection>
            </ConfirmIconSection>
          ) : undefined}
          {position === 'createMeeting' ? (
            <Text font={'title2'} color={`${theme.colors.white}`}>
              회의 정보 입력
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
          <IconWrapper>
          {(position==="completeCreateMeeting" || position==="cueCard" || position==="confirmMeet") &&
            <LinkIcWrapper>
             <IconSection onClick={notify}>
            <CopyToClipboard text={ position==="cueCard" ? `${import.meta.env.VITE_WEB_IP}/q-card/${meetingId}`:`${import.meta.env.VITE_WEB_IP}/meet/${meetingId}` }>
          <LinkIc/>
          </CopyToClipboard>
          </IconSection>
          {position==="completeCreateMeeting" && <Tooltip tooltipText={"링크 공유하기"}></Tooltip>}

          </LinkIcWrapper>}
          <IconSection onClick={() => setIsNaviOpen((prev) => !prev)}>
            <HambergerIc />
          </IconSection>

          </IconWrapper>
        </HeaderSection>
        {isNaviOpen ? (
          <NavigationSection>
            <NavigationContainer>
            <IconContainer onClick={() => setIsNaviOpen((prev) => !prev)}>
              <ExitIc />
            </IconContainer>
              <Navigation navigationOptions={navigationOptions}/>
            </NavigationContainer>
          </NavigationSection>
        ) : undefined}
      </HeaderWrapper>
    </>
  );
}

export default Header;

const LinkIcWrapper=styled.div`
  position:relative;
`

const IconWrapper= styled.div`
  display:flex;
  align-items: center;
`
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
  width:4.2rem;
  height: 4.2rem;
`;

const NavigationSection = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
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
