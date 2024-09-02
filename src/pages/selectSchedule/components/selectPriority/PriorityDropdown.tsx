import { useState } from 'react';

import Text from 'components/common/atomComponents/Text';
import { addMinutes } from 'components/common/timetableComponents/utils';
import {
  ArrowBottomIc,
  ArrowTopIc,
  Circle1Ic,
  Circle2Ic,
  Circle3Ic,
  InputCancelIc,
} from 'components/Icon/icon';
import {
  SelectedSlotType,
  SelectSlotType,
  useSelectContext,
} from 'pages/selectSchedule/contexts/useSelectContext';
import styled from 'styled-components';
import { theme } from 'styles/theme';
/**
 *
 * @desc 기존의 우선순위 Dropdown 컴포넌트를 그대로 가져와서, 따로 리팩토링 없이 새로운 시간표 컴포넌트에 맞게 적용되도록 수정한 컴포넌트입니다.
 */

function PriorityDropdown() {
  const { selectedSlots, setSelectedSlots } = useSelectContext();
  const [isOpenDropDown, setIsOpenDropDown] = useState([false, false, false]);
  const defaultInputs = Array(3).fill('');

  const [input_, setInput] = useState<string[]>(defaultInputs);

  //우선 순위 시간순 정렬을 위한 날짜 시간 파싱함수
  const parseDateTime = (dateStr: string, timeStr: string) => {
    const [month, day] = dateStr.split('/');
    const formatDay = day.padStart(2, '0');
    const [hour, minute] = timeStr.split(':');
    return Number(month + formatDay + hour + minute);
  };

  const sortedSlots = Object.entries(selectedSlots)
    .slice()
    .sort(
      (a, b) => parseDateTime(a[1].date, a[1].startSlot) - parseDateTime(b[1].date, b[1].startSlot),
    );

  const formatDate = (date: string) => {
    const [month, day, dayOfWeek] = date.split('/');
    return `${month}/${day}(${dayOfWeek})`;
  };

  Object.values(selectedSlots).forEach((item) => {
    const date = formatDate(item.date);
    const endSlot = addMinutes(item.endSlot, 30);
    if (item.priority > 0) {
      defaultInputs[3 - item.priority] = `${date} ${item.startSlot}~${endSlot}`;
    }
  });

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
    const selectedPriority = 3 - idx;
    //이전 상태를 순회하면서 선택된 우선순위를 가지고 있는 데이터를 우선순위 0으로 초기화
    setSelectedSlots((prev: SelectedSlotType) => {
      const updatedSelectedSlots = Object.entries(prev).reduce(
        (acc, [key, value]) => {
          const prevSelectedSlotKey = parseInt(key);
          //우선순위를 선택한 후 다시 설정할 경우 기존 priority 0으로 초기화
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

      updatedInput[idx] = `${date} ${item.startSlot}~${endSlot}`;
      return updatedInput;
    });
    handleDropdown(idx);
  };

  const deletePriority = (idx: number) => {
    setSelectedSlots((prevSelectedSlots: SelectedSlotType) => {
      const updateSlots = { ...prevSelectedSlots };
      Object.values(updateSlots).map((item) => {
        if (item.priority === 3 - idx) {
          item.priority = 0;
        }
      });
      return updateSlots;
    });

    setInput((prev) => {
      const updatedInput = [...prev];
      updatedInput[idx] = '';
      return updatedInput;
    });
  };
  return (
    <PriorityDropdownWrapper>
      {isOpenDropDown.map((item, idx) => (
        <PriorityDropdownSection key={idx}>
          <CircleWrapper>
            <TextWrapper>
              <Text font={'body2'} color={theme.colors.white}>
                {`${idx + 1}`}순위
              </Text>
            </TextWrapper>
            {idx === 0 ? <Circle1Ic /> : idx === 1 ? <Circle2Ic /> : <Circle3Ic />}
          </CircleWrapper>
          <InputWrapper>
            <TimeInput
              type="text"
              $drop={item}
              placeholder="시간대 선택"
              readOnly
              onClick={() => handleDropdown(idx)}
              value={input_[idx]}
            />
            <DropDownIconWrapper>
              {defaultInputs[idx] ? (
                <InputCancelIcon onClick={() => deletePriority(idx)} />
              ) : item ? (
                <ArrowTopIc />
              ) : (
                <ArrowBottomIc />
              )}
            </DropDownIconWrapper>
            {item && (
              <DropdownWrapper>
                {sortedSlots.map(
                  ([key, value]) =>
                    !value.priority && (
                      <DropDownItem key={key} onClick={() => handlePriority(idx, value, key)}>
                        <Text font={'button1'} color={theme.colors.white}>
                          {formatDate(value.date)} {value.startSlot}~{addMinutes(value.endSlot, 30)}
                        </Text>
                      </DropDownItem>
                    ),
                )}
              </DropdownWrapper>
            )}
          </InputWrapper>
        </PriorityDropdownSection>
      ))}
    </PriorityDropdownWrapper>
  );
}

const InputCancelIcon = styled(InputCancelIc)`
  cursor: pointer;
`;
const PriorityDropdownWrapper = styled.div`
  display: flex;

  flex-direction: column;
  gap: 1.2rem;
  justify-content: start;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 7.5rem;
  width: 33.5rem;
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
  top: 50%;
  transform: translate(0, -50%);
  right: 1.6rem;
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
  max-height: 18.3rem;

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
