import { useState } from 'react';

import styled from 'styled-components';

import { SelectedSlotsType, TimetableContext } from './context';
import Column from './parts/Column';
import { fillWeekDates, getAvailableTimes } from './utils';

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

const dates = fillWeekDates(availableDates);

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
        selectedSlots,
      }}
    >
      <StyledTimetable>
        {dates.map((date) => (
          <Column
            key={Object.values(date).join('/')}
            date={Object.values(date).join('/')}
            timeSlots={timeSlots}
          />
        ))}
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
