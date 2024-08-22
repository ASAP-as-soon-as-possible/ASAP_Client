import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { durationType } from 'pages/createMeeting/data/meetingInfoData';
import { FunnelProps, MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components';

function SetDuration({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  return (
    <SetAdditionalInfoWrapper>
      <DurationWrapper>
        {durationType.map((duration, i) => {
          return (
            <Button
              key={i + duration.enum}
              typeState={
                meetingInfo.duration === duration.enum ? `halfPrimaryActive` : `halfPrimaryDisabled`
              }
              onClick={() => {
                setMeetingInfo((prev: MeetingInfo) => {
                  return { ...prev, duration: duration.enum };
                });
              }}
            >
              <Text font={'button2'}>{duration.time}</Text>
            </Button>
          );
        })}
      </DurationWrapper>
      <BottomBtnSection>
        <Button
          typeState={meetingInfo.duration ? 'primaryActive' : 'primaryDisabled'}
          onClick={
            meetingInfo.duration
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
    </SetAdditionalInfoWrapper>
  );
}

export default SetDuration;

const SetAdditionalInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DurationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;

  justify-content: center;
`;
