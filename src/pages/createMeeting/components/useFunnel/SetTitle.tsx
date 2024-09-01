import React from 'react';

import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import TextInput from 'components/common/atomComponents/TextInput';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { FunnelProps, MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components';

function SetTitle({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  const titleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingInfo((prev: MeetingInfo) => {
      return { ...prev, title: e.target.value };
    });
  };

  const resetTitle = () => {
    setMeetingInfo((prev: MeetingInfo) => {
      return { ...prev, title: '' };
    });
  };
  return (
    <SetTitleWrapper>
      <TextInput
        value={meetingInfo.title}
        setValue={titleOnChange}
        resetValue={resetTitle}
        max={15}
        placeholder={'서비스 기획 1차 회의'}
      />
      <BottomBtnSection>
        <Button
          typeState={
            meetingInfo.title && meetingInfo.title.length < 16 ? 'primaryActive' : 'primaryDisabled'
          }
          onClick={
            meetingInfo.title && meetingInfo.title.length < 16
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
      </BottomBtnSection>
    </SetTitleWrapper>
  );
}

export default SetTitle;

const SetTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// const StyledBtnSection = styled.section`
//   position: absolute;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   bottom: 1.2rem;
//   border-radius: 50%;
// `;
