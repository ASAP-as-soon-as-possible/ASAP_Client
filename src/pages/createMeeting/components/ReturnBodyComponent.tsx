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
import SetDuration from './useFunnel/SetDuration';
import SetHostInfo from './useFunnel/SetHostInfo';

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
        <SetDuration meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} setStep={setStep} />
      </>
    ),
    hostInfo: (
      <>
       <SetHostInfo meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} setStep={setStep} />
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