import React from 'react';

import Button from 'components/atomComponents/Button';
import PasswordInput from 'components/atomComponents/PasswordInput';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
import { MeetingInfo, FunnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';
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
            placeholder={'방장 이름'}
          />
        </HostNameSection>
        <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>
            방 비밀번호
          </Text>
          <PasswordInput
            value={meetingInfo.password}
            placeholder={`방 비밀번호`}
            passWordOnChange={passWordOnChange}
          />
        </HostNameSection>
      </HostInfoSection>
      <StyledBtnSection>
        <Button
          typeState={
            meetingInfo.name && meetingInfo.password.length >= 4
              ? 'primaryActive'
              : 'secondaryDisabled'
          }
          onClick={
            meetingInfo.name && meetingInfo.password.length >= 4
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
      </StyledBtnSection>
    </SetHostInfoWrapper>
  );
}

export default SetHostInfo;

const SetHostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBtnSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
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
  padding: 0 2rem;
`;