import React from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import TextAreaInput from 'components/atomComponents/TextAreaInput';
import { MeetingInfo, funnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';

function SetAdditionalInfo({ meetingInfo, setMeetingInfo, setStep }: funnelProps) {
  const textAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 51) {
      setMeetingInfo((prev: MeetingInfo) => {
        return { ...prev, additionalInfo: e.target.value };
      });
    }
  };

  return (
    <SetAdditionalInfoWrapper>
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
          <Text font={'button2'}>{meetingInfo.additionalInfo ? `회의  생성하기` : `건너뛰기`}</Text>
        </Button>
      </StyledBtnWrapper>
    </SetAdditionalInfoWrapper>
  );
}

export default SetAdditionalInfo;

const SetAdditionalInfoWrapper = styled.div``;

const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;
