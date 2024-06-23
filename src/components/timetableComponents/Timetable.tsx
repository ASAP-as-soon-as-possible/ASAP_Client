import { ReactNode, useState } from 'react';

import styled from 'styled-components';

import { SelectedSlotType, TimetableContext } from './context';
import DateTitle from './parts/ColumnTitle';
import SlotTitle from './parts/SlotTitle';
import { ColumnStructure, DateType } from './types';

interface TimetableProps {
  timeSlots: string[];
  availableDates: DateType[];
  children: (props: ColumnStructure) => ReactNode;
}

function Timetable({ timeSlots, availableDates, children }: TimetableProps) {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({});

  const emptyDates = Array.from({ length: 7 - availableDates.length }, (_, i) => `empty${i + 1}`);

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
            {availableDates.map((date) => {
              const dateKey = Object.values(date).join('/');
              return <Column key={dateKey}>{children({ date: dateKey, timeSlots })}</Column>;
            })}
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

const Column = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
`;

const EmptyColumn = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.grey7};
  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
  background-color: ${({ theme }) => theme.colors.grey9};
  width: 4.4rem;
`;
