import { useState, useEffect } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { preferTimeType, directInputButton } from 'pages/createMeeting/data/meetingInfoData';
import {
  FunnelProps,
  MeetingInfo,
  PreferTimeInfo,
} from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';

function SetTimes({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  const [preferTimes, setPreferTimes] = useState(preferTimeType);
  const [directInput, setDirectInput] = useState(directInputButton);
  const getDate = (startTime: string, endTime: string) => {
    setMeetingInfo((prev: MeetingInfo) => ({
      ...prev,
      preferTimes: [{ startTime: startTime, endTime: endTime }],
    }));
  };

  const onClickDirectBtn = () => {
    setDirectInput((prev) => ({
      ...prev,
      btnState: !prev.btnState,
    }));

    setPreferTimes((prev) => {
      const updatePreferTime = prev.map((btn) => {
        return {
          ...btn,
          btnState: false,
        };
      });
      return updatePreferTime;
    });
  };
  return (
    <SetTimesWrapper>
      <SetTimeSection>
        {preferTimes.map((preferTime, i) => {
          return (
            <Button
              key={i + preferTime.title}
              typeState={
                // meetingInfo.preferTimes[getMeetingInfoLen()]?.startTime === '' || meetingInfo.preferTimes[getMeetingInfoLen()]
                //   ? `primaryDisabled`
                //   : meetingInfo.preferTimes[i] && meetingInfo.preferTimes[i].startTime !== ''
                //     ? ` primaryActive`
                //     : `primaryDisabled`
                preferTime.btnState ? 'primaryActive' : 'primaryDisabled'
              }
              onClick={() => {
                // setMeetingInfo((prev: MeetingInfo) => ({
                //   ...prev,
                //   preferTimes: [{ startTime: preferTime.startTime, endTime: preferTime.endTime }],
                // }));
                setPreferTimes((prev: PreferTimeInfo[]) => {
                  const updatedBtnState = prev.map((btn, index) => {
                    if (index < 3 && index == i) {
                      return {
                        ...btn,
                        btnState: !btn.btnState,
                      };
                    }
                    return btn;
                  });
                  return updatedBtnState;
                });
                setDirectInput((prev) => ({
                  ...prev,
                  btnState: false,
                }));
              }}
            >
              <Text font={'title2'}>{preferTime.title}</Text>
            </Button>
          );
        })}
        <Button
          typeState={directInput.btnState ? 'primaryActive' : 'primaryDisabled'}
          onClick={onClickDirectBtn}
        >
          <Text font={'title2'}>{directInputButton.title} </Text>
        </Button>
      </SetTimeSection>

      <StyledBtnSection>
        <Button
          typeState={
            meetingInfo.preferTimes[0].startTime !== '' ? 'primaryActive' : 'secondaryDisabled'
          }
          onClick={
            // meetingInfo.preferTimes &&
            // (meetingInfo.preferTimes[0] !== '' || meetingInfo.preferTimes.length >= 2)
            meetingInfo.preferTimes[0].startTime !== ''
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
