import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import ReturnBodyComponent from 'pages/createMeeting/components/ReturnBodyComponent';
import ReturnTitleComponent from 'pages/createMeeting/components/ReturnTitleComponent';
import styled from 'styled-components/macro';

import { funnelStep } from './data/meetingInfoData';
import { MeetingInfo } from './types/useFunnelInterface';

const initialMeetingInfo: MeetingInfo = {
  // title: '',
  // availableDates: [''],
  // preferTimes: [],
  // place: '',
  // placeDetail: '',
  // duration: '',
  // name: '',
  // password: '',
  // additionalInfo: '',
  title: 'ASAP 회의',
  availableDates: ['2023/07/06/MON'],
  preferTimes: [
    {
      startTime: '06:00',
      endTime: '12:00',
    },
  ],
  place: 'ONLINE',
  placeDetail: 'zoom',
  duration: 'HALF',
  name: '서지원',
  password: '0702',
  additionalInfo: '추가 공지사항',
};

function CreateMeeting() {
  const [step, setStep] = useState(6);
  const [meetingInfo, setMeetingInfo] = useState(initialMeetingInfo);
  const currentStep = funnelStep[step];
  return (
    <>
      <CreateMeetingWrapper>
        <Header position={'createMeeting'} setStep={setStep} />

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

const CreateMeetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
