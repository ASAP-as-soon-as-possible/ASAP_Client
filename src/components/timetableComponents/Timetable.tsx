import { ReactNode } from 'react';

import styled from 'styled-components';

import DateTitle from './parts/ColumnTitle';
import SlotTitle from './parts/SlotTitle';
import { ColumnStructure, DateType } from './types';

interface TimetableProps {
  timeSlots: string[];
  availableDates: DateType[];
  children: (props: ColumnStructure) => ReactNode;
  bottomItem?: ReactNode;
}

function Timetable({ timeSlots, availableDates, children, bottomItem }: TimetableProps) {
  const emptyDates = Array.from({ length: 7 - availableDates.length }, (_, i) => `empty${i + 1}`);

  return (
    <>
      <TimetableWrapper>
        <SlotTitle timeSlots={timeSlots} />
        <TableWithDateWrapper>
          <DateTitle availableDates={availableDates} />
          <TableWrapper>
            {availableDates.map((date) => {
              const dateKey = Object.values(date).join('/');
              return (
                <ColumnWrapper key={dateKey}>
                  {children({ date: dateKey, timeSlots })}
                </ColumnWrapper>
              );
            })}
            {emptyDates && emptyDates.map((value) => <EmptyColumnWrapper key={value} />)}
          </TableWrapper>
        </TableWithDateWrapper>
      </TimetableWrapper>
      {bottomItem}
    </>
  );
}

export default Timetable;

const TimetableWrapper = styled.section`
  display: flex;
  gap: 0.75rem;
`;

const TableWithDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const TableWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey7};
  border-left: 1px solid ${({ theme }) => theme.colors.grey7};
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
`;

const EmptyColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.grey7};
  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
  background-color: ${({ theme }) => theme.colors.grey9};
  width: 4.4rem;
`;
