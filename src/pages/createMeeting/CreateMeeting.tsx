import { useEffect, useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import { MeetingInfo } from './types/useFunnelInterface';
import ReturnBodyComponent from 'pages/createMeeting/components/ReturnBodyComponent';
import ReturnTitleComponent from 'pages/createMeeting/components/ReturnTitleComponent';
import { funnelStep } from './data/meetingInfoData';
import styled from 'styled-components/macro';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

const initialMeetingInfo: MeetingInfo = {
  title: '',
  availableDates: [''],
  preferTimes: [{ startTime: '00:00', endTime: '00:00' }],
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

const Button = styled.div`
  font-size: 5rem;
  color: white;
`;
const CreateMeetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
