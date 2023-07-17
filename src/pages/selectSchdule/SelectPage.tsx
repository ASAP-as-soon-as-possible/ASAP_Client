import React, { useState, useEffect, useRef } from 'react';

import { PlusIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';

import SelectSchedule from './components/SelectSchedule';
import { SelectBoxState, ScheduleStates } from './types/Schedule';

function SelectPage() {
  const [dateList, setDateList] = useState<SelectBoxState[]>([
    {
      id: 1,
      dropDown: true,
    },
  ]);

  const [scheduleList, setScheduleList] = useState<ScheduleStates[]>([
    {
      id: 1,
      date: '',
      startTime: '',
      endTime: '',
    },
  ]);

  const nextID = useRef<number>(2);

  const addDateList = () => {
    const selectBox = {
      id: nextID.current,
      dropDown: true,
    };

    const schedule = {
      id: nextID.current,
      date: '',
      startTime: '',
      endTime: '',
    };

    setDateList([...dateList, selectBox]);
    setScheduleList([...scheduleList, schedule]);
    nextID.current += 1;
  };

  const deleteDataList = (index: number) => {
    setDateList(dateList.filter((item) => item.id !== index));
    setScheduleList(scheduleList.filter((item) => item.id !== index));
  };

  return (
    <SelectPageWrapper>
      <SelectSchedule dataList={dateList} deleteData={deleteDataList} />
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
