import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ExitIc } from 'components/Icon/icon';
import { compareTime } from 'components/scheduleComponents/utils/compareTime';
import styled from 'styled-components/macro';

import DateSelect from './DateSelect';
import EndTimeSelect from './EndTimeSelect';
import TimeSelect from './TimeSelect';
import { DateStates, ScheduleStates, TimeStates } from '../types/Schedule';

interface PropTypes {
  scheduleList: ScheduleStates[];
  availableDates: DateStates[];
  preferTimes: TimeStates[];
  setScheduleList: Dispatch<SetStateAction<ScheduleStates[]>>;
  deleteData: (index: number) => void;
}

function SelectSchedule({ scheduleList, availableDates, preferTimes, setScheduleList, deleteData }: PropTypes) {
  const handleDate = (id: number, date: string) => {

    const updateDate: ScheduleStates[] = scheduleList?.map((schedule) => {
      if (schedule?.id === id) {
        return { ...schedule, date:date };
      }
      return schedule;
    });
    setScheduleList(updateDate);
  }


  const handleStartTime = (id: number, startTime: string) => {
    const updateStartTime: ScheduleStates[] = scheduleList?.map((schedule) =>
   {
    if (schedule?.id === id) {
      console.log("1")
      if(schedule.endTime==="" ){
        console.log("2")
        return { ...schedule, startTime };
      }
      else if (compareTime(startTime,schedule.endTime)){
        return { ...schedule, startTime };
      }
      return schedule;
    }
    else if (schedule?.id === id &&!compareTime(startTime,schedule.endTime)) {

      console.log(schedule.endTime);
      alert('종료 시간은 시작 시간 이후로 설정해주세요!');
      return schedule;
    }
    console.log("3")
    return schedule;
  });
        setScheduleList(updateStartTime);
  };

  const handleEndTime = (id: number, endTime: string) => {
    const updateEndTime: ScheduleStates[] = scheduleList.map((schedule) => {
      if (schedule?.id === id &&compareTime(schedule.startTime,endTime)) {
        return { ...schedule, endTime };
      }
      else if (schedule?.id === id &&!compareTime(schedule.startTime,endTime)) {
        alert('종료 시간은 시작 시간 이후로 설정해주세요!');
        return schedule;
      }

      return schedule;
    });
    setScheduleList(updateEndTime);
  };

  return (
    <>
      {scheduleList &&
        scheduleList?.map((item,idx) =>(
          <SelectWrapper key={item?.id+idx}>
            <SelectSection>
              <DateSelect id={item?.id} availableDates={availableDates} handleDate={handleDate} scheduleList={scheduleList} />
              <ExitIconWrapper>
                <ExitButton onClick={() => deleteData(item?.id)}>
                  <ExitIc />
                </ExitButton>
              </ExitIconWrapper>
            </SelectSection>
            <TimeSelectSection>
              <TimeSelect
                text="시작 시간"
                id={item?.id}
                handleStartTime={handleStartTime}
                scheduleList={scheduleList}
                preferTimes={preferTimes}
              />
             <EndTimeSelect text="종료 시간"
                id={item?.id}
                handleEndTime={handleEndTime}
                scheduleList={scheduleList}
                preferTimes={preferTimes}
              />
             </TimeSelectSection>
          </SelectWrapper>
        ))};
    </>
  );
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 2rem;
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
