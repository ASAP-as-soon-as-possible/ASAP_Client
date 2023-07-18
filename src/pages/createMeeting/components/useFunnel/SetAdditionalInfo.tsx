import React from 'react';

import axios from 'axios';
import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import TextAreaInput from 'components/atomComponents/TextAreaInput';
import { MeetingInfo, FunnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

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
      // 서버에 방 정보가 담긴 POST 요청을 보냄
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/meeting`, meetingInfo);
      console.log(response);
      // 성공 시에 콘솔에 성공 콘솔
      if (response.status === 201) {
        navigate('/meet/complete')
        console.log('회의 생성에 성공했습니다.');
      }
    } catch (error) {
      console.log('좋아요 상태 변경에 실패했습니다.', error);
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
