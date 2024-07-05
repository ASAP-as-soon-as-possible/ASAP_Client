import { FunnelProps, MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';

import Button from 'components/atomComponents/Button';
import React from 'react';
import Text from 'components/atomComponents/Text';
import TextAreaInput from 'components/atomComponents/TextAreaInput';
import { createMeetingApi } from 'utils/apis/legacy/createMeetingApi';
import { isAxiosError } from 'axios';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

function SetAdditionalInfo({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  const navigate = useNavigate();
  const textAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 51) {
      setMeetingInfo((prev: MeetingInfo) => {
        return { ...prev, additionalInfo: e.target.value };
      });
    }
  };
  const createMeeting = async () => {
    try {
      const {
        data: { data },
      } = await createMeetingApi(meetingInfo);
      localStorage.setItem('hostToken', data.accessToken);
      navigate('/meet/complete', {
        state: {
          meetingId: data.url,
        },
      });
    } catch (err) {
      if (isAxiosError(err) && err.response) {
        if (err.response.status === (400 || 500)) {
          console.log(err.response.data.message);
        } else {
          console.log(err.response.data.code);
        }
        navigate('/error');
      }
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
          onClick={createMeeting}
        >
          <Text font={'button2'}>{meetingInfo.additionalInfo ? `회의  생성하기` : `건너뛰기`}</Text>
        </Button>
      </StyledBtnWrapper>
    </SetAdditionalInfoWrapper>
  );
}

export default SetAdditionalInfo;

const SetAdditionalInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;
