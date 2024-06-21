import { useState } from 'react';

import styled from 'styled-components';

import { SelectedSlotsType, TimetableContext } from './context';
import Column from './parts/Column';
import DateTitle from './parts/ColumnTitle';
import SlotTitle from './parts/SlotTitle';
import { getAvailableTimes } from './utils';

// api 연결 후 지울 것
export type DateType = {
  month: string | undefined;
  day: string | undefined;
  dayOfWeek: string | undefined;
};

const availableDates: DateType[] = [
  {
    month: '6',
    day: '20',
    dayOfWeek: '목',
  },
  {
    month: '6',
    day: '21',
    dayOfWeek: '금',
  },
  {
    month: '6',
    day: '22',
    dayOfWeek: '토',
  },
  {
    month: '6',
    day: '23',
    dayOfWeek: '일',
  },
];

const emptyDates = Array.from({ length: 7 - availableDates.length }, (_, i) => `empty${i + 1}`);

export type SlotType = {
  startTime: string;
  endTime: string;
};

const preferTimes: SlotType = {
  startTime: '06:00',
  endTime: '24:00',
};

const timeSlots = getAvailableTimes(preferTimes);

function Timetable() {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotsType>({});
  return (
    <TimetableContext.Provider
      value={{
        startSlot,
        setStartSlot,
        selectedSlots,
        setSelectedSlots,
      }}
    >
      <TimetableWrapper>
        <SlotTitle timeSlots={timeSlots} />
        <TableWrapper>
          <DateTitle availableDates={availableDates} />
          <Table>
            {availableDates.map((date) => (
              <Column
                key={Object.values(date).join('/')}
                date={Object.values(date).join('/')}
                timeSlots={timeSlots}
              />
            ))}
            {emptyDates && emptyDates.map((value) => <EmptyColumn key={value} />)}
          </Table>
        </TableWrapper>
      </TimetableWrapper>
    </TimetableContext.Provider>
  );
}

export default Timetable;

const TimetableWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Table = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey7};
  border-left: 1px solid ${({ theme }) => theme.colors.grey7};
`;

const EmptyColumn = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.grey7};
  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
  background-color: ${({ theme }) => theme.colors.grey9};
  width: 4.4rem;
`;
