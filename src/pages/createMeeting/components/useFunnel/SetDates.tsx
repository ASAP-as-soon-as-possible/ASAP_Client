import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { funnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';

function SetDates({meetingInfo,setMeetingInfo,setStep}:funnelProps) {
  return (
    <>
       <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.title && meetingInfo?.title.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo?.title && meetingInfo?.title?.length < 16
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
  )
}

export default SetDates

const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;