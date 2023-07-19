import React, { useState } from 'react';

import Text from 'components/atomComponents/Text';
import { Circle1Ic, Circle2Ic, Circle3Ic } from 'components/Icon/icon';
import { AVAILABLE_DATES } from 'components/scheduleComponents/data/availableDates';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

const arr = [1, 2, 3, 43, 5, 6];
function PriorityDropdown() {
  const [timeSelect, setTimeSelect] = useState([false, false, false]);
  const [rankData, setRankData] = useState([]);
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

  return (
    <PriorityDropdownWrapper>
      {arr.map(
        (item, i) =>
          i < 3 ? (
            <PriorityDropdownSection key={item + i}>
              <CircleWrapper>
                <TextWrapper>
                  <Text font={'body2'} color={theme.colors.white}>
                    {i + 1}순위{' '}
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
                  $drop={timeSelect[i]}
                  placeholder="시간대 선택"
                  readOnly
                  onClick={() => handleDropdown(i)}
                  // value={}
                />
                {timeSelect[i] && (
                  <DropdownWrapper>
                    {AVAILABLE_DATES.map((item) => (
                      <DropDownItem key={item}>
                        <Text font={'button1'} color={theme.colors.white}>
                          {item.month}월 {item.day}일 {item.dayOfWeek}요일
                        </Text>
                      </DropDownItem>
                    ))}
                  </DropdownWrapper>
                )}
              </InputWrapper>
            </PriorityDropdownSection>
          ) : (
            <div key={item + i} />
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

  margin-top: 1rem;
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

  cursor: pointer;

  padding-left: 2rem;
  width: 27.4rem;
  height: 5.2rem;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 5.2rem;
  z-index: 2;
  border-radius: 0rem 0rem 0.8rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey6};
  width: 27.4rem;
  height: 20.8rem;
  overflow-x: hidden;
  /* max-height: 10.4rem; */
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
