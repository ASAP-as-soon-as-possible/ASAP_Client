import React from 'react';

import Button from 'components/common/atomComponents/Button';
import PasswordInput from 'components/common/atomComponents/PasswordInput';
import Text from 'components/common/atomComponents/Text';
import TextInput from 'components/common/atomComponents/TextInput';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { FunnelProps, MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function SetHostInfo({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  const hostOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingInfo((prev: MeetingInfo) => {
      return { ...prev, name: e.target.value };
    });
  };
  const resetHost = () => {
    setMeetingInfo((prev: MeetingInfo) => {
      return { ...prev, name: '' };
    });
  };

  const passWordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingInfo((prev: MeetingInfo) => {
      return { ...prev, password: e.target.value };
    });
  };

  const containsNonNumeric = (password: string) => {
    const nonNumericPattern = /[^0-9]/;
    if (!nonNumericPattern.test(password)) {
      setStep((prev) => {
        if (prev === 6) {
          return prev;
        }
        return prev + 1;
      });
    } else {
      alert('비밀번호는 4자리 이상 숫자로만 이루어져야합니다');
    }
  };

  const validateForm = () => {
    return (
      meetingInfo.name &&
      meetingInfo.name.length <= 15 &&
      meetingInfo.password.length >= 4 &&
      meetingInfo.password.length <= 8
    );
  };
  
  return (
    <SetHostInfoWrapper>
      <HostInfoSection>
        <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>
            방장 이름
          </Text>
          <TextInput
            value={meetingInfo.name}
            setValue={hostOnChange}
            resetValue={resetHost}
            max={8}
            placeholder={'방장 이름'}
          />
        </HostNameSection>
        <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>
            방 비밀번호
          </Text>
          <PasswordInput
            value={meetingInfo.password}
            placeholder={`숫자 4자리 이상 8자리 이하`}
            passWordOnChange={passWordOnChange}
            page={'createMeeting'}
          />
        </HostNameSection>
      </HostInfoSection>
      <BottomBtnSection>
        <Button
          typeState={validateForm() ? 'primaryActive' : 'primaryDisabled'}
          onClick={validateForm() ? () => containsNonNumeric(meetingInfo.password) : undefined}
        >
          <Text font={'button2'}>다음</Text>
        </Button>
      </BottomBtnSection>
    </SetHostInfoWrapper>
  );
}

export default SetHostInfo;

const SetHostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HostNameSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const HostInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`;
