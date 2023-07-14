import React, { useState } from 'react';

import Text from 'components/atomComponents/Text';
import { DropDownIc, DropUpIc, ExitIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import { DateStates } from './types/Schedule';

interface PropTypes {
  dataList: DateStates[];
  deleteData: (index: number) => void;
  handleDropDown: (index: number) => void;
}

function SelectSchedule({ dataList, deleteData, handleDropDown }: PropTypes) {
  return (
    <SelectScheduleWrapper>
      {dataList &&
        dataList.map((item) => (
          <SelectWrapper key={item.id}>
            <SelectSection>
              <SelectContainer>
                <DateSelect onClick={() => handleDropDown(item.id)}>
                  <Text font="button2" color={`${theme.colors.grey5}`}>
                    날짜 선택
                  </Text>
                  <DropDownIconWrapper>
                    {item.dropDown ? <DropDownIcon /> : <DropUpIc />}
                  </DropDownIconWrapper>
                </DateSelect>
              </SelectContainer>
              <ExitIconWrapper>
                <ExitButton onClick={() => deleteData(item.id)}>
                  <ExitIc />
                </ExitButton>
              </ExitIconWrapper>
            </SelectSection>
            <TimeSelectSection>
              <TimeSelect>
                <Text font="button2" color={`${theme.colors.grey5}`}>
                  시작 시간
                </Text>
              </TimeSelect>
              <TimeSelect>
                <Text font="button2" color={`${theme.colors.grey5}`}>
                  종료 시간
                </Text>
              </TimeSelect>
            </TimeSelectSection>
          </SelectWrapper>
        ))}
    </SelectScheduleWrapper>
  );
}

const SelectScheduleWrapper = styled.div``;
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey8};
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  padding-left: 1.2rem;

  width: 33.5rem;
  height: 12.8rem;
`;
const SelectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 27.9rem;
`;

const SelectContainer = styled.div`
  position: relative;
`;

const DateSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey7};

  cursor: pointer;
  width: 100%;
  height: 4.8rem;
  text-align: center;
`;

const DropDownIcon = styled(DropDownIc)``;

const ExitButton = styled.button``;

const ExitIconWrapper = styled.div`
  position: absolute;
  left: 32.5rem;
  cursor: pointer;
`;
const DropDownIconWrapper = styled.div`
  position: absolute;
  bottom: 2.1rem;
  left: 25.5rem;
`;

const TimeSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey7};
  cursor: poniter;

  width: 13.6rem;
  height: 4.8rem;
`;

const TimeSelectSection = styled.section`
  display: flex;
  gap: 0.8rem;

  cursor: pointer;
`;

export default React.memo(SelectSchedule);
