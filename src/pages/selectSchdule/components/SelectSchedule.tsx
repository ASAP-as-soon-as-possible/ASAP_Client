import React, { useState } from 'react';

import { ExitIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';

import DateSelect from './DateSelect';
import TimeSelect from './TimeSelect';
import { SelectBoxState } from '../types/Schedule';

interface PropTypes {
  dataList: SelectBoxState[];
  deleteData: (index: number) => void;
}

function SelectSchedule({ dataList, deleteData }: PropTypes) {
  return (
    <SelectScheduleWrapper>
      {dataList &&
        dataList.map((item) => (
          <SelectWrapper key={item.id}>
            <SelectSection>
              <DateSelect id={item.id} />
              <ExitIconWrapper>
                <ExitButton onClick={() => deleteData(item.id)}>
                  <ExitIc />
                </ExitButton>
              </ExitIconWrapper>
            </SelectSection>
            <TimeSelectSection>
              <TimeSelect text="시작 시간" id={item.id} />
              <TimeSelect text="종료 시간" id={item.id} />
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
  padding-right: 4rem;
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

const ExitButton = styled.button``;

const ExitIconWrapper = styled.div`
  position: absolute;
  left: 32.5rem;
  cursor: pointer;
`;

const TimeSelectSection = styled.section`
  display: flex;
  gap: 0.8rem;
`;

export default SelectSchedule;
