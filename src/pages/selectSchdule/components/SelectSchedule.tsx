import React, { useState, Dispatch, SetStateAction } from 'react';

import { ExitIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';

import DateSelect from './DateSelect';
import TimeSelect from './TimeSelect';
import { ScheduleStates } from '../types/Schedule';

interface PropTypes {
  scheduleList: ScheduleStates[];
  setScheduleList: Dispatch<SetStateAction<ScheduleStates[]>>;
  deleteData: (index: number) => void;
}

function SelectSchedule({ scheduleList, setScheduleList, deleteData }: PropTypes) {
  const handleDateChange = (id: number, date: string) => {
    const updateScheduleList = scheduleList.map((schedule) => {
      if (schedule.id === id) {
        console.log('id값 일치?');
        return { ...schedule, date };
      }
    });

    setScheduleList(updateScheduleList);
  };

  return (
    <SelectScheduleWrapper>
      {scheduleList &&
        scheduleList.map((item) => (
          <SelectWrapper key={item.id}>
            <SelectSection>
              <DateSelect id={item.id} handleDateChange={handleDateChange} />
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
