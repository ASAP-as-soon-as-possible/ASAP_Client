import React, { Dispatch, SetStateAction } from 'react';

import Button from 'components/atomComponents/Button';
import PasswordInput from 'components/atomComponents/PasswordInput';
import PlaceInput from 'components/atomComponents/PlaceInput';
import Text from 'components/atomComponents/Text';
import TextAreaInput from 'components/atomComponents/TextAreaInput';
import TextInput from 'components/atomComponents/TextInput';
import { durationType, placeType } from 'pages/createMeeting/data/meetingInfoData'
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import SetTitle from './useFunnel/SetTitle';
import { MeetingInfo } from '../types/useFunnelInterface';
import SetPlace from './useFunnel/SetPlace';
import SetDates from './useFunnel/SetDates';
import SetTimes from './useFunnel/SetTimes';

interface BodyProps {
  currentStep: string;
  meetingInfo: MeetingInfo;
  setMeetingInfo: Dispatch<SetStateAction<MeetingInfo>>;
  setStep: Dispatch<SetStateAction<number>>;
}

type BodyType = {
  [key: string]: React.JSX.Element;
};

function ReturnBodyComponent({ currentStep, meetingInfo, setMeetingInfo, setStep }: BodyProps) {

  console.log(meetingInfo)

  const passWordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingInfo((prev : MeetingInfo) => {
      return { ...prev, password: e.target.value };
    });
  };

  const hostOnChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingInfo((prev : MeetingInfo ) => {
      return { ...prev, name: e.target.value };
    });
  };

  const resetHost = () => {
    setMeetingInfo((prev : MeetingInfo ) => {
      return { ...prev, name: "" };
    });
  };

  const textAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(e.target.value.length < 51) {
      setMeetingInfo((prev : MeetingInfo) => {
      return { ...prev, additionalInfo: e.target.value };
    });
  }
  };

  const BodyType: BodyType = {
    title: (
      <>
        <SetTitle meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} setStep={setStep} />
      </>
    )
    ,
    availableDates: (
      <>
        <SetDates meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} setStep={setStep} />
      </>
    ),
    preferTimes: (
      <>
        <SetTimes meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} setStep={setStep} />
      </>
    ),
    place: (
      <>
        <SetPlace meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} setStep={setStep} />
      </>
    ),
    duration: (
      <>
        <DurationWrapper>
          {durationType.map((duration , i)=>{
            return (<Button key={i+duration} typeState={meetingInfo.duration === duration ? `halfPrimaryActive`:`halfsecondaryDisabled`} onClick={()=>{
              setMeetingInfo((prev : MeetingInfo) => {
                return { ...prev, duration: duration };
              });
            }} >
            <Text font={'button2'}>{duration}</Text>
          </Button>)
          })}
        </DurationWrapper>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.duration ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
              meetingInfo?.duration
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    hostInfo: (
      <>
        <HostInfoWrapper>
          <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>방장 이름</Text>
          <TextInput
            value={meetingInfo.name}
            setValue={hostOnChange}
            resetValue={resetHost}
            placeholder={'방장 이름'}
          />
          </HostNameSection>
          <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>방 비밀번호</Text>
          <PasswordInput
            value={meetingInfo.password}
            placeholder={`방 비밀번호`}
            passWordOnChange={passWordOnChange}
          />
          </HostNameSection>
        </HostInfoWrapper>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.name && meetingInfo?.password.length >= 4 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
              meetingInfo?.name && meetingInfo?.password.length >= 4
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    additionalInfo: (
      <>
        <TextAreaInput
          value={meetingInfo.additionalInfo}
          setValue={textAreaOnChange}
          placeholder={'회의 안건, 준비물 등 회의와 관련하여 알리고 싶은 추가 내용을 적어 보세요.'}
        />
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo.additionalInfo ? 'primaryActive' : 'tertiaryActive'}
            onClick={
                meetingInfo.additionalInfo
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>{meetingInfo.additionalInfo ? `회의  생성하기`: `건너뛰기`}</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
  };

  return <ReturnBodyComponentWrapper>{BodyType[currentStep]}</ReturnBodyComponentWrapper>;
}

export default ReturnBodyComponent;

const ReturnBodyComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;

const DurationWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap:1.1rem;

  justify-content:center;
`
const HostNameSection =styled.section`
  display: flex;
  flex-direction: column;
  gap:1rem;
  
`
const HostInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap:3.4rem;
  padding : 0 2rem;
`

const PlaceInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap:1rem;
`

const PlaceSetion = styled.section`

`