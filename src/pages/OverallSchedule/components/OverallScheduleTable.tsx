import { useState } from 'react';

import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure, TimetableStructure } from 'components/timetableComponents/types';
import {
  AvailableDateTime,
  TimeSlot,
  getOverallScheduleResponse,
} from 'utils/apis/useGetOverallSchedule';

import OverallScheduleColumn from './OverallScheduleColumn';
import TimeSlotUserNames from './TimeSlotUserNames';
import { ClickContext } from '../contexts/useClickContext';

interface OverallScheduleTableProps extends TimetableStructure {
  dataOverallSchedule: getOverallScheduleResponse['data'];
}

function OverallScheduleTable({
  timeSlots,
  availableDates,
  dataOverallSchedule,
}: OverallScheduleTableProps) {
  const [clickedSlot, setClickedSlot] = useState<string | undefined>(undefined);
  const [timeSlotUserNames, setTimeSlotUserNames] = useState<string[]>([]);

  const getAvailableTimesPerDate = (
    availableDates: AvailableDateTime[],
    date: string,
  ): TimeSlot[] => {
    const [month, day, dayOfWeek] = date.split('/');

    const matchedDate = availableDates.find(
      (date) => date.month === month && date.day === day && date.dayOfWeek === dayOfWeek,
    );

    return matchedDate ? matchedDate.timeSlots : [];
  };

  return (
    <ClickContext.Provider
      value={{
        clickedSlot,
        setClickedSlot,
        timeSlotUserNames,
        setTimeSlotUserNames,
      }}
    >
      <Timetable
        timeSlots={timeSlots}
        availableDates={availableDates}
        bottomItem={<TimeSlotUserNames />}
      >
        {({ date, timeSlots }: ColumnStructure) => (
          <OverallScheduleColumn
            date={date}
            timeSlots={timeSlots}
            availableSlotInfo={getAvailableTimesPerDate(
              dataOverallSchedule.availableDateTimes,
              date,
            )}
          />
        )}
      </Timetable>
    </ClickContext.Provider>
  );
}

export default OverallScheduleTable;
