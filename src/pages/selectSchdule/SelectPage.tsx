import React, { useState, useRef } from 'react';

import { PlusIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';

import SelectSchedule from './SelectSchedule';
import { DateStates } from './types/Schedule';

function SelectPage() {
  const [dateList, setDateList] = useState<DateStates[]>([
    {
      id: 1,
      date: '',
      startTime: '',
      endTime: '',
      dropDown: true,
      priority: 0,
    },
  ]);
  const nextID = useRef<number>(2);

  const addDateList = () => {

    const selectBox = {
      id: nextID.current,
      date: '',
      startTime: '',
      endTime: '',
      dropDown: true,
      view: false,
    };

    setDateList([...dateList, selectBox]);
    nextID.current += 1;
  };

  const deleteDataList = (index: number) => {
    setDateList(dateList.filter((item) => item.id !== index));
  };

  const handleDropDown = (index: number) => {
    setDateList((prevDateList) => {
      return prevDateList.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            dropDown: !item.dropDown, // Set the desired value for dropDown
          };
        }
        return item;
      });
    });
  };

  return (
    <SelectPageWrapper>
      <SelectSchedule
        dataList={dateList}
        deleteData={deleteDataList}
        handleDropDown={handleDropDown}
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
