import { useState } from 'react';

import Text from 'components/atomComponents/Text';
import { Circle1Ic, Circle2Ic, Circle3Ic, DropDownIc, DropUpIc } from 'components/Icon/icon';
import { addMinutes } from 'components/timetableComponents/utils';
import {
  SelectedSlotType,
  SelectSlotType,
  useSelectContext,
} from 'pages/selectSchedule/contexts/useSelectContext';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

/**
 *
 * @desc 기존의 우선순위 Dropdown 컴포넌트를 그대로 가져와서, 따로 리팩토링 없이 새로운 시간표 컴포넌트에 맞게 적용되도록 수정한 컴포넌트입니다.
 */

function PriorityDropdown() {
  const { selectedSlots, setSelectedSlots } = useSelectContext();
  const [isOpenDropDown, setIsOpenDropDown] = useState([false, false, false]);

  const formatDate = (date: string) => {
    const [month, day, dayOfWeek] = date.split('/');
    return `${month}/${day}(${dayOfWeek})`;
  };

  let defaultInput1 = '';
  let defaultInput2 = '';
  let defaultInput3 = '';
  for (const key in selectedSlots) {
    const item = selectedSlots[key];
    const date = formatDate(item.date);
    const endSlot = addMinutes(item.endSlot, 30);
    if (item.priority === 3) {
      defaultInput1 = `${date} ${item.startSlot}~${endSlot}`;
    } else if (item.priority === 2) {
      defaultInput2 = `${date} ${item.startSlot}~${endSlot}`;
    } else if (item.priority === 1) {
      defaultInput3 = `${date} ${item.startSlot}~${endSlot}`;
    }
  }
  const [input_, setInput] = useState<string[]>([defaultInput1, defaultInput2, defaultInput3]);

  const handleDropdown = (idx: number) => {
    //dropdown이 열려있을 때
    if (isOpenDropDown[idx]) {
      setIsOpenDropDown((prevState) => {
        const updatedIsDropDown = [...prevState];
        updatedIsDropDown[idx] = !updatedIsDropDown[idx];
        return updatedIsDropDown;
      });
    }
    // dropdown이 닫혀있을 때
    else {
      setIsOpenDropDown((prevState) => {
        const updatedIsDropDownOpen = prevState.map((_, index) => index === idx);
        return updatedIsDropDownOpen;
      });
    }
  };

  const handlePriority = (idx: number, item: SelectSlotType, stringSelectedSlotKey: string) => {
    const selectedSlotKey = parseInt(stringSelectedSlotKey);
    let selectedPriority: 0 | 1 | 2 | 3 = 0;
    switch (idx) {
      case 0:
        selectedPriority = 3;
        break;
      case 1:
        selectedPriority = 2;
        break;
      case 2:
        selectedPriority = 1;
        break;
      default:
        selectedPriority = 0;
        break;
    }

    //이전 상태를 순회하면서 선택된 우선순위를 가지고 있는 데이터를 우선순위 0으로 초기화
    setSelectedSlots((prev: SelectedSlotType) => {
      const updatedSelectedSlots = Object.entries(prev).reduce(
        (acc, [key, value]) => {
          const prevSelectedSlotKey = parseInt(key);
          //선택된 우선순위가 기존에 존재할 경우 0으로 초기화
          if (value.priority === selectedPriority) {
            acc[prevSelectedSlotKey] = { ...value, priority: 0 };
          } else {
            acc[prevSelectedSlotKey] = value;
          }
          return acc;
        },
        {} as SelectedSlotType,
      );

      // 해당하는 selectedSlot의 priority를 선택된 우선순위로 변경
      if (updatedSelectedSlots[selectedSlotKey]) {
        updatedSelectedSlots[selectedSlotKey] = {
          ...updatedSelectedSlots[selectedSlotKey],
          priority: selectedPriority,
        };
      }

      return updatedSelectedSlots;
    });

    setInput((prev) => {
      const updatedInput = [...prev];
      const endSlot = addMinutes(item.endSlot, 30);
      const date = formatDate(item.date);
      if (idx === 0) {
        updatedInput[idx] = `${date} ${item.startSlot}~${endSlot}`;
      } else if (idx === 1) {
        updatedInput[idx] = `${date} ${item.startSlot}~${endSlot}`;
      } else if (idx === 2) {
        updatedInput[idx] = `${date} ${item.startSlot}~${endSlot}`;
      } else {
        updatedInput[idx] = 'error';
      }
      return updatedInput;
    });
    handleDropdown(idx);
  };

  return (
    <PriorityDropdownWrapper>
      {Object.entries(selectedSlots).map(([key, _], idx) => {
        return idx < 3 ? (
          <PriorityDropdownSection key={key}>
            <CircleWrapper>
              <TextWrapper>
                <Text font={'body2'} color={theme.colors.white}>
                  {`${idx + 1}`}순위
                </Text>
              </TextWrapper>
              {idx === 0 ? (
                <Circle1Icon />
              ) : idx === 1 ? (
                <Circle2Icon />
              ) : idx === 2 ? (
                <Circle3Icon />
              ) : (
                <div />
              )}
            </CircleWrapper>
            <InputWrapper>
              <TimeInput
                type="text"
                $drop={isOpenDropDown[idx]}
                placeholder="시간대 선택"
                readOnly
                onClick={() => handleDropdown(idx)}
                value={input_[idx]}
              />

              {isOpenDropDown[idx] ? (
                <DropDownIconWrapper>
                  <DropUpIc />{' '}
                </DropDownIconWrapper>
              ) : (
                <DropDownIconWrapper>
                  <DropDownIc />
                </DropDownIconWrapper>
              )}

              {isOpenDropDown[idx] && (
                <DropdownWrapper>
                  {Object.entries(selectedSlots).map(
                    ([key, value]) =>
                      !value.priority && (
                        <DropDownItem key={key} onClick={() => handlePriority(idx, value, key)}>
                          <Text font={'button1'} color={theme.colors.white}>
                            {formatDate(value.date)} {value.startSlot}~{addMinutes(
                              value.endSlot,
                              30,
                            )}
                          </Text>
                        </DropDownItem>
                      ),
                  )}
                </DropdownWrapper>
              )}
            </InputWrapper>
          </PriorityDropdownSection>
        ) : (
          <div key={key} />
        );
      })}
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
