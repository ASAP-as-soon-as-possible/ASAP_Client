import React, { Dispatch, SetStateAction } from 'react';

import styled from 'styled-components/macro';

import SetAdditionalInfo from './useFunnel/SetAdditionalInfo';
import SetDates from './useFunnel/SetDates';
import SetDuration from './useFunnel/SetDuration';
import SetHostInfo from './useFunnel/SetHostInfo';
import SetPlace from './useFunnel/SetPlace';
import SetTimes from './useFunnel/SetTimes';
import SetTitle from './useFunnel/SetTitle';
import { MeetingInfo } from '../types/useFunnelInterface';

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
        <SetAdditionalInfo meetingInfo={meetingInfo} setMeetingInfo={setMeetingInfo} setStep={setStep} />
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