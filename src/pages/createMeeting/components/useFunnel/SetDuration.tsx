import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { durationType } from 'pages/createMeeting/data/meetingInfoData';
import { MeetingInfo, funnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';

function SetDuration({ meetingInfo, setMeetingInfo, setStep }: funnelProps) {
  return (
    <>
      <DurationWrapper>
        {durationType.map((duration, i) => {
          return (
            <Button
              key={i + duration}
              typeState={
                meetingInfo.duration === duration ? `halfPrimaryActive` : `halfsecondaryDisabled`
              }
              onClick={() => {
                setMeetingInfo((prev: MeetingInfo) => {
                  return { ...prev, duration: duration };
                });
              }}
            >
              <Text font={'button2'}>{duration}</Text>
            </Button>
          );
        })}
      </DurationWrapper>
      <StyledBtnWrapper>
        <Button
          typeState={meetingInfo.duration ? 'primaryActive' : 'secondaryDisabled'}
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
      </StyledBtnWrapper>
    </>
  );
}

export default SetDuration;

const SetAdditionalInfoWrapper = styled.div``;

const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;

const DurationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;

  justify-content: center;
`;
