import { useState } from 'react';

import styled from 'styled-components';

import { SelectedSlotsType, TimetableContext } from './context';
import Column from './parts/Column';
import { getAvailableTimes } from './utils';

// api 연결 후 지울 것
type DateType = {
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
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotsType>({
    // 시간표 색칠을 테스트하기 위한 더미 값
    '6/20/목': [
      {
        startSlot: '09:00',
        endSlot: '13:00',
      },
    ],
    '6/21/금': [
      {
        startSlot: '15:00',
        endSlot: '18:00',
      },
    ],
    '6/22/토': [
      {
        startSlot: '12:00',
        endSlot: '12:00',
      },
      {
        startSlot: '17:30',
        endSlot: '20:00',
      },
    ],
  });
  return (
    <TimetableContext.Provider
      value={{
        startSlot,
        setStartSlot,
        selectedSlots,
        setSelectedSlots,
      }}
    >
      <StyledTimetable>
        {availableDates.map((date) => (
          <Column
            key={Object.values(date).join('/')}
            date={Object.values(date).join('/')}
            timeSlots={timeSlots}
          />
        ))}
        {emptyDates && emptyDates.map((value) => <EmptyColumn key={value} />)}
      </StyledTimetable>
    </TimetableContext.Provider>
  );
}

export default Timetable;

const StyledTimetable = styled.div`
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
