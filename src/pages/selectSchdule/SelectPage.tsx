import React, { useEffect, useRef, useState } from 'react';

import { PlusIc } from 'components/Icon/icon';
import TimeTable from 'components/scheduleComponents/components/TimeTable';
import styled from 'styled-components/macro';

import SelectSchedule from './components/SelectSchedule';
import { ScheduleStates } from './types/Schedule';

function SelectPage() {
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

  // useEffect(() => {}, [scheduleList]);
  return (
    <SelectPageWrapper>
      <TimeTable selectedSchedule={scheduleList} scheduleType="available" />;
      <SelectSchedule
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
