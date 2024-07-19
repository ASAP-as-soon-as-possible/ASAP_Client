import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import ReturnBodyComponent from 'pages/createMeeting/components/ReturnBodyComponent';
import ReturnTitleComponent from 'pages/createMeeting/components/ReturnTitleComponent';
import styled from 'styled-components/macro';

import { funnelStep } from './data/meetingInfoData';
import { MeetingInfo } from './types/useFunnelInterface';

const initialMeetingInfo: MeetingInfo = {
  title: '',
  availableDates: [''],
  preferTimes: [{ startTime: '06:00', endTime: '24:00' }],
  place: '',
  placeDetail: '',
  duration: '',
  name: '',
  password: '',
  additionalInfo: '',
};

function CreateMeeting() {
  const [step, setStep] = useState(0);
  const [meetingInfo, setMeetingInfo] = useState(initialMeetingInfo);
  const currentStep = funnelStep[step];

  return (
    <>
      <CreateMeetingWrapper>
        <Header position={'createMeeting'} setFunnelStep={setStep} />
        <ProgressBar>
          <StepBar step={step + 1} />
        </ProgressBar>
        <ReturnTitleComponent step={currentStep} />
        <ReturnBodyComponent
          currentStep={currentStep}
          meetingInfo={meetingInfo}
          setMeetingInfo={setMeetingInfo}
          setStep={setStep}
        />
      </CreateMeetingWrapper>
    </>
  );
}

export default CreateMeeting;
const StepBar = styled.div<{ step: number }>`
  width: ${({ step }) => `calc(100%* ${step}/6)`};
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.main1};
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.grey6};
`;
const CreateMeetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
