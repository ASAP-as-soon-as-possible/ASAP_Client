import { useState } from 'react';

import { scheduleAtom } from 'atoms/atom';
import Text from 'components/common/atomComponents/Text';
import { Circle1Ic, Circle2Ic, Circle3Ic, DropDownIc, DropUpIc } from 'components/Icon/icon';
import { ScheduleStates } from 'pages/legacy/selectSchedule/types/Schedule';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function PriorityDropdown() {
  const [scheduleList, setScheduleList] = useRecoilState<ScheduleStates[]>(scheduleAtom);
  const [timeSelect, setTimeSelect] = useState([false, false, false]);
  const [input_, setInput] = useState<string[]>(['', '', '']);
  const handleDropdown = (i: number) => {
    if (!timeSelect[i]) {
      setTimeSelect((prevState) => {
        const updatedTimeSelect = prevState.map((value, index) => index === i);
        return updatedTimeSelect;
      });
    } else {
      setTimeSelect((prevState) => {
        const updatedTimeSelect = [...prevState];
        updatedTimeSelect[i] = !updatedTimeSelect[i];
        return updatedTimeSelect;
      });
    }
  };

  const handlePriority = (i: number, idx: number, item: ScheduleStates) => {
    let temp = 0;
    switch (i) {
      case 0:
        temp = 3;
        break;
      case 1:
        temp = 2;
        break;
      case 2:
        temp = 1;
        break;

      default:
        temp = 0;
        break;
    }
    setScheduleList((prev) => {
      const updatedScheduleList = prev.map((schedule) => {
        if (schedule.priority === temp) {
          return { ...schedule, priority: 0 };
        }
        return schedule;
      });
      return updatedScheduleList;
    });

    setScheduleList((prev) => {
      const updatedScheduleList = prev.map((schedule) => {
        if (schedule.id === item.id) {
          return { ...schedule, priority: temp };
        }
        return schedule;
      });
      return updatedScheduleList;
    });

    setInput((prev) => {
      const updatedInput = [...prev];

      if (i === 0) {
        updatedInput[i] = `${item.date} ${item.startTime}~${item.endTime}`;
      } else if (i === 1) {
        updatedInput[i] = `${item.date} ${item.startTime}~${item.endTime}`;
      } else if (i === 2) {
        updatedInput[i] = `${item.date} ${item.startTime}~${item.endTime}`;
      } else {
        updatedInput[i] = 'error';
      }
      return updatedInput;
    });
    handleDropdown(i);
  };

  return (
    <PriorityDropdownWrapper>
      {scheduleList.map(
        (item, i) =>
          i < 3 ? (
            <PriorityDropdownSection key={item.id}>
              <CircleWrapper>
                <TextWrapper>
                  <Text font={'body2'} color={theme.colors.white}>
                    {`${i + 1}`}순위
                  </Text>
                </TextWrapper>
                {i === 0 ? (
                  <Circle1Icon />
                ) : i === 1 ? (
                  <Circle2Icon />
                ) : i === 2 ? (
                  <Circle3Icon />
                ) : (
                  <div />
                )}
              </CircleWrapper>
              <InputWrapper>
                <TimeInput
                  type="text"
                  $drop={timeSelect[i]}
                  placeholder="시간대 선택"
                  readOnly
                  onClick={() => handleDropdown(i)}
                  value={input_[i]}
                />

                {timeSelect[i] ? (
                  <DropDownIconWrapper>
                    <DropUpIc />{' '}
                  </DropDownIconWrapper>
                ) : (
                  <DropDownIconWrapper>
                    <DropDownIc />
                  </DropDownIconWrapper>
                )}

                {timeSelect[i] && (
                  <DropdownWrapper>
                    {scheduleList.map(
                      (item, idx) =>
                        !item.priority && (
                          <DropDownItem key={item.id} onClick={() => handlePriority(i, idx, item)}>
                            <Text font={'button1'} color={theme.colors.white}>
                              {item.date} {item.startTime}~{item.endTime}
                            </Text>
                          </DropDownItem>
                        ),
                    )}
                  </DropdownWrapper>
                )}
              </InputWrapper>
            </PriorityDropdownSection>
          ) : (
            <div key={item.id} />
          ),
      )}
    </PriorityDropdownWrapper>
  );
}
const PriorityDropdownWrapper = styled.div`
  display: flex;

  flex-direction: column;
  gap: 1.2rem;
  justify-content: start;

  margin-top: 3rem;
  margin-bottom: 7.5rem;
  width: 100%;
  height: 18rem;
`;

const PriorityDropdownSection = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: space-between;
  width: 100%;
  height: 5.2rem;
`;
const CircleWrapper = styled.div`
  position: relative;
  width: 4.8rem;
  height: 4.8rem;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Circle1Icon = styled(Circle1Ic)``;
const Circle2Icon = styled(Circle2Ic)``;
const Circle3Icon = styled(Circle3Ic)``;

const InputWrapper = styled.div`
  position: relative;
`;
const TimeInput = styled.input<{ $drop: boolean }>`
  appearance: none;
  outline: none;
  border: none;
  border-radius: 0.8rem;
  border-bottom-left-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};
  border-bottom-right-radius: ${(props) => (props.$drop ? '0rem' : '0.8rem')};

  background-color: ${({ theme }) => theme.colors.grey7};
  ${({ theme }) => theme.fonts.button1};
  cursor: pointer;
  padding-left: 2rem;
  width: 27.4rem;
  height: 5.2rem;
  color: ${({ theme }) => theme.colors.white};
`;
const DropDownIconWrapper = styled.div`
  position: absolute;
  top: 36%;
  right: 1rem;
  cursor: pointer;
`;
const DropdownWrapper = styled.div`
  position: absolute;
  top: 5.2rem;
  z-index: 2;
  border-radius: 0rem 0rem 0.8rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey6};
  width: 27.4rem;
  height: fit-content;
  max-height: 15.6rem;

  overflow-x: hidden;
  overflow-y: auto;
`;

const DropDownItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey7};
  background-color: ${({ theme }) => theme.colors.grey6};

  cursor: pointer;

  width: 27.4rem;
  height: 5.2rem;
`;

export default PriorityDropdown;
