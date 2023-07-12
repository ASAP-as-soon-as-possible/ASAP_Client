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

const BodyType: { [key: string]: React.JSXElementConstructor<any> } = {
  title: SetTitle,
  availableDates: SetDates,
  preferTimes: SetTimes,
  place: SetPlace,
  duration: SetDuration,
  hostInfo: SetHostInfo,
  additionalInfo: SetAdditionalInfo,
};

function ReturnBodyComponent({ currentStep, meetingInfo, setMeetingInfo, setStep }: BodyProps) {
  const FunnelComponent = BodyType[currentStep];

  return (
    <ReturnBodyComponentWrapper>
      <FunnelComponent
        meetingInfo={meetingInfo}
        setMeetingInfo={setMeetingInfo}
        setStep={setStep}
      />
    </ReturnBodyComponentWrapper>
  );
}

export default ReturnBodyComponent;

const ReturnBodyComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
