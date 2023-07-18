import React, { useEffect, useRef, useState } from 'react';

import { PlusIc } from 'components/Icon/icon';
import TimeTable from 'components/scheduleComponents/components/TimeTable';
import styled from 'styled-components/macro';

import SelectSchedule from './components/SelectSchedule';
import { DateStates, ScheduleStates, TimeStates } from './types/Schedule';

function SelectPage() {
  // 가능시간 선택지 - 날짜
  const [availableDates, setAvailableDates] = useState<DateStates[]>([
    {
      month: '7',
      day: '6',
      dayOfWeek: '월',
    },
    {
      month: '7',
      day: '7',
      dayOfWeek: '화',
    },
    {
      month: '7',
      day: '8',
      dayOfWeek: '수',
    },
    {
      month: '7',
      day: '9',
      dayOfWeek: '목',
    },
    {
      month: '7',
      day: '10',
      dayOfWeek: '금',
    },
    {
      month: '7',
      day: '11',
      dayOfWeek: '토',
    },
    {
      month: '7',
      day: '12',
      dayOfWeek: '일',
    },
  ])

  const [preferTimes, setPreferTimes] = useState<TimeStates[]>(
    [
      {
        startTime: '06:00',
        endTime: '12:00',
      },
      {
        startTime: '12:00',
        endTime: '18:00',
      },
      {
        startTime: '18:00',
        endTime: '24:00',
      },
    ]
  )

  const [scheduleList, setScheduleList] = useState<ScheduleStates[]>([
    {
      id: 1,
      date: '',
      startTime: '',
      endTime: '',
      priority: 0,
    },
  ]);

  const nextID = useRef<number>(2);

  const addDateList = () => {
    const schedule = {
      id: nextID.current,
      date: '',
      startTime: '',
      endTime: '',
      priority: 0,
    };
    setScheduleList([...scheduleList, schedule]);
    nextID.current += 1;
  };

  const deleteDataList = (index: number) => {
    setScheduleList(scheduleList.filter((item) => item?.id !== index));
  };

  return (
    <SelectPageWrapper>
      <TimeTable selectedSchedule={scheduleList} availableDates={availableDates} preferTimes={preferTimes} scheduleType="available" />;
      <SelectSchedule
        availableDates={availableDates}
        preferTimes={preferTimes}
        scheduleList={scheduleList}
        setScheduleList={setScheduleList}
        deleteData={deleteDataList}
      />
      <PlusButton onClick={addDateList} type="button">
        <PlusIc />
      </PlusButton>
    </SelectPageWrapper>
  );
}

const SelectPageWrapper = styled.div``;
const PlusButton = styled.button`
  margin-top: 3.2rem;
  margin-bottom: 2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey2};
  width: 33.5rem;
  height: 5.2rem;
`;
export default SelectPage;
