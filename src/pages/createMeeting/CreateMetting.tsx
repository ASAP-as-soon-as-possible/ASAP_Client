import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import ReturnBodyComponent from 'pages/createMeeting/components/ReturnBodyComponent';
import ReturnTitleComponent from 'pages/createMeeting/components/ReturnTitleComponent';
import styled from 'styled-components/macro';

const funnelStep = [
  'title',
  'availableDates',
  'preferTimes',
  'place',
  'duration',
  'hostInfo',
  'additionalInfo',
];

interface MeetingInfo {
  title: string;
  availableDates: string[];
  preferTimes: {
    startTime: string;
    endTime: string;
  }[];
  place: string | undefined;
  placeDetail: string ;
  duration: string;
  name: string;
  password: string;
  additionalInfo: string;
}

function CreateMetting() {

  const initialMettingInfo : MeetingInfo = {
    title: "",
    availableDates: [""],
    preferTimes: [
      {
        startTime: "",
        endTime: ""
      }
    ],
    place: "",
    placeDetail: "",
    duration: "",
    name: "",
    password: "",
    additionalInfo: ""
  };

  const [step, setStep] = useState(0);
  const [meetingInfo, setMeetingInfo] = useState(initialMettingInfo);

  const currentStep = funnelStep[step];
  return (
    <>
      <ViewTestingWrapper>
        <Header setStep={setStep} />

        <ReturnTitleComponent step={currentStep} />

        <ReturnBodyComponent
          currentStep={currentStep}
          meetingInfo={meetingInfo}
          setMeetingInfo={setMeetingInfo}
          setStep={setStep}
        />
      </ViewTestingWrapper>
    </>
  );
}

export default CreateMetting;

const ViewTestingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
