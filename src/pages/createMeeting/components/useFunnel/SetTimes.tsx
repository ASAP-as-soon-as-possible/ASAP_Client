import { useState, useEffect } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { DropUpIc, DropDownIc, Wave } from 'components/Icon/icon';
import { preferTimeType, directInputButton } from 'pages/createMeeting/data/meetingInfoData';
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
      // btnState가 true인 경우 preferTimes에 객체를 추가
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
      console.log(meetingInfo.preferTimes[0]);
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
    [meetingInfo.preferTimes],
  );
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
              {meetingInfo.preferTimes.length > 0 ? (
                <Text font={'button2'}>{meetingInfo.preferTimes[0].startTime}</Text>
              ) : (
                <Text font={'button2'}>00:00</Text>
              )}
              {startDropDown ? <DropUpIcon /> : <DropDownIcon />}
              {startDropDown && (
                <DropDownContainer>
                  {timeList.map((time, i) => (
                    <StartDropDown
                      key={time + i}
                      type={'start'}
                      time={time}
                      setIsOpen={setStartDropDown}
                      setMeetingInfo={setMeetingInfo}
                    />
                  ))}
                </DropDownContainer>
              )}
            </DropDownSelect>
            <Wave />
            <DropDownSelect $drop={endDropDown} onClick={() => setEndDropDown((prev) => !prev)}>
              {meetingInfo.preferTimes.length > 0 ? (
                <Text font={'button2'}>{meetingInfo.preferTimes[0].endTime}</Text>
              ) : (
                <Text font={'button2'}>00:00</Text>
              )}
              {endDropDown ? <DropUpIcon /> : <DropDownIcon />}
              {endDropDown && (
                <DropDownContainer>
                  {timeList.map((time, i) => (
                    <StartDropDown
                      key={time + i}
                      type={'end'}
                      time={time}
                      setIsOpen={setEndDropDown}
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
          typeState={
            meetingInfo.preferTimes.length >= 1 &&
            meetingInfo.preferTimes[0].startTime &&
            meetingInfo.preferTimes[0].endTime !== '00:00'
              ? 'primaryActive'
              : 'secondaryDisabled'
          }
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
  position: absolute; //drop down에서 아래 DOM을 밀고 싶을 땐 지워주기
  background-color: white;
  margin-top: 4.8rem ;
z-index: 2;
  width:15.1rem;
  height:14.4rem;
  overflow:auto;
  border-bottom-left-radius:  0.8rem;
  border-bottom-right-radius: 0.8rem;
`;
