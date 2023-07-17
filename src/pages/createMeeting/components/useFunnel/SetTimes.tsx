import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { preferTimeType, preferTimeList } from 'pages/createMeeting/data/meetingInfoData';
import { FunnelProps, MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';

function SetTimes({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  return (
    <SetTimesWrapper>
      <SetTimeSection>
        {preferTimeType.map((preferTime, i) => {
          console.log(preferTime);
          console.log(meetingInfo);
          return (
            <Button
              key={i + preferTime.title}
              typeState={
                meetingInfo.preferTimes &&
                meetingInfo.preferTimes.startTime === preferTime.startTime
                  ? `primaryDisabled`
                  : ` primaryActive`
              }
              onClick={() => {
                // setMeetingInfo((prev: MeetingInfo) => {
                //   if (preferTime.preferTimes[i]?.startTime === preferTime.startTime) {
                //     return {
                //       ...prev,
                //     };
                //   }
                // });
              }}
            >
              <Text font={'title2'}>{preferTime.title}</Text>
            </Button>
          );
        })}
      </SetTimeSection>

      <StyledBtnSection>
        <Button
          typeState={meetingInfo.preferTimes.length >= 2 ? 'primaryActive' : 'secondaryDisabled'}
          onClick={
            meetingInfo.preferTimes && meetingInfo.preferTimes.length >= 2
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
    </SetTimesWrapper>
  );
}

export default SetTimes;

const SetTimesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledBtnSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
`;

const SetTimeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
