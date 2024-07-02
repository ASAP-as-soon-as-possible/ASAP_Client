import { useEffect, useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { DropDownIc, DropUpIc, Wave } from 'components/Icon/icon';
import { directInputButton, preferTimeType } from 'pages/createMeeting/data/meetingInfoData';
import { FunnelProps, PreferTimeInfo } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components/macro';

import { timeList } from '../../data/meetingInfoData';
import StartDropDown from '../StartDropDown';

function SetTimes({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  const [preferTimes, setPreferTimes] = useState(preferTimeType);
  const [directInput, setDirectInput] = useState(directInputButton);
  const [startDropDown, setStartDropDown] = useState(false);
  const [endDropDown, setEndDropDown] = useState(false);

  const getDate = (btnState: boolean, startTime: string, endTime: string) => {
    if (!btnState) {
      setMeetingInfo((prev) => ({
        ...prev,
        preferTimes: [...prev.preferTimes, { startTime: startTime, endTime: endTime }],
      }));
    } else {
      setMeetingInfo((prev) => ({
        ...prev,
        preferTimes: prev.preferTimes.filter(
          (time) => !(time.startTime === startTime && time.endTime === endTime),
        ),
      }));
    }
  };

  const filterDate = () => {
    setMeetingInfo((prev) => ({
      ...prev,
      preferTimes: prev.preferTimes.filter(
        (time) => !(time.startTime === '00:00' && time.endTime === '00:00'),
      ),
    }));
  };

  const deletePreferTimes = () => {
    setMeetingInfo((prev) => ({
      ...prev,
      preferTimes: [{ startTime: '00:00', endTime: '00:00' }],
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

  const buttonStateHandler = () => {
    if (
      meetingInfo.preferTimes.length >= 2 ||
      (meetingInfo.preferTimes[0].startTime !== '00:00' &&
        meetingInfo.preferTimes[0].endTime !== '00:00')
    ) {
      return true;
    }

    return false;
  };
  useEffect(
    () => {
      if (
        meetingInfo.preferTimes &&
        meetingInfo.preferTimes[0] &&
        parseInt(meetingInfo.preferTimes[0].startTime) >=
          parseInt(meetingInfo.preferTimes[0].endTime)
      ) {
        if (meetingInfo.preferTimes[0].endTime !== '00:00') {
          alert('종료 시간은 시작 시간 이후로 설정해주세요!');
          deletePreferTimes();
        }
      }
    },
    [meetingInfo.preferTimes[0].startTime, meetingInfo.preferTimes[0].endTime],
  );

  useEffect(() => {
    deletePreferTimes();
  }, []);
  return (
    <SetTimesWrapper>
      <SetTimeSection>
        {preferTimes.map((preferTime, i) => {
          return (
            <Button
              key={i + preferTime.title}
              typeState={preferTime.btnState ? 'primaryActive' : 'tertiaryDisabled'}
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
                if (directInput.btnState) {
                  deletePreferTimes();
                }
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
          typeState={directInput.btnState ? 'primaryActive' : 'tertiaryDisabled'}
          onClick={onClickDirectBtn}
        >
          <Text font={'title2'}>{directInputButton.title} </Text>
        </Button>
        {directInput.btnState ? (
          <DropDownWrapper>
            <DropDownSelect $drop={startDropDown} onClick={() => setStartDropDown((prev) => !prev)}>
              <Text font={'button2'}>{meetingInfo.preferTimes[0].startTime}</Text>
              {startDropDown ? <DropUpIcon /> : <DropDownIcon />}
              {startDropDown && (
                <DropDownContainer>
                  {timeList.map((time, i) => (
                    <StartDropDown
                      key={time + i}
                      type={'start'}
                      time={time}
                      setMeetingInfo={setMeetingInfo}
                    />
                  ))}
                </DropDownContainer>
              )}
            </DropDownSelect>
            <Wave />
            <DropDownSelect $drop={endDropDown} onClick={() => setEndDropDown((prev) => !prev)}>
              <Text font={'button2'}>{meetingInfo.preferTimes[0].endTime}</Text>
              {endDropDown ? <DropUpIcon /> : <DropDownIcon />}
              {endDropDown && (
                <DropDownContainer>
                  {timeList.map((time, i) => (
                    <StartDropDown
                      key={time + i}
                      type={'end'}
                      time={time}
                      setMeetingInfo={setMeetingInfo}
                    />
                  ))}
                </DropDownContainer>
              )}
            </DropDownSelect>
          </DropDownWrapper>
        ) : (
          <div />
        )}
      </SetTimeSection>

      <StyledBtnSection>
        <Button
          typeState={buttonStateHandler() ? 'primaryActive' : 'primaryDisabled'}
          onClick={
            buttonStateHandler()
              ? () => {
                  setStep((prev) => {
                    if (prev === 6) {
                      return prev;
                    }
                    return prev + 1;
                  });
                  filterDate();
                }
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

const DropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4.8rem;
`;

const DropDownSelect = styled.div<{ $drop: boolean }>`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 0.6rem;
  border-radius: 1rem;
  border-bottom-left-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};
  border-bottom-right-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};
  background-color: ${({ theme }) => theme.colors.grey7};
  cursor: pointer;
  width: 15.1rem;
  height: 4.8rem;
  text-align: center;

  color: ${({ theme }) => theme.colors.grey5};
`;

const DropDownIcon = styled(DropDownIc)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 1;
`;

const DropUpIcon = styled(DropUpIc)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 1;
`;

const DropDownContainer = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 4.8rem;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  background-color: white;
  width: 15.1rem;
  height: 14.4rem;
  overflow: auto;
`;
