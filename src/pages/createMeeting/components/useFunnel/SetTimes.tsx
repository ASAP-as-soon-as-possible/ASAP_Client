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

  const getDate = (btnState: boolean, startTime: string, endTime: string) => {
    console.log(startTime, endTime);

    if (!btnState) {
      // btnState가 true인 경우 preferTimes에 객체를 추가
      console.log(btnState);
      setMeetingInfo((prev) => ({
        ...prev,
        preferTimes: [...prev.preferTimes, { startTime: startTime, endTime: endTime }],
      }));
    } else {
      console.log(btnState);
      // btnState가 false인 경우 해당 startTime과 endTime을 가진 객체를 preferTimes에서 삭제
      setMeetingInfo((prev) => ({
        ...prev,
        preferTimes: prev.preferTimes.filter(
          (time) => time.startTime !== startTime && time.endTime !== endTime,
        ),
      }));
    }

    // setMeetingInfo((prev: MeetingInfo) => ({
    //   ...prev,
    //   preferTimes: [{ startTime: startTime, endTime: endTime }],
    // }));
  };

  const deletePreferTimes = () => {
    setMeetingInfo((prev) => ({
      ...prev,
      preferTimes: [],
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
    deletePreferTimes();
  };

  useEffect(
    () => {
      console.log(meetingInfo);
    },
    [meetingInfo],
  );
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
                getDate(preferTime.btnState, preferTime.startTime, preferTime.endTime);
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
          typeState={meetingInfo.preferTimes.length >= 1 ? 'primaryActive' : 'secondaryDisabled'}
          onClick={
            meetingInfo.preferTimes
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
