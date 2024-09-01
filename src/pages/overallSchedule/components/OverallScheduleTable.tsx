import { useState } from 'react';

import Timetable from 'components/common/timetableComponents/Timetable';
import { ColumnStructure, TimetableStructure } from 'components/common/timetableComponents/types';
import {
  AvailableDateTime,
  TimeSlot,
  getOverallScheduleResponse,
} from 'utils/apis/useGetOverallSchedule';

import OverallScheduleColumn from './OverallScheduleColumn';
import UserNames from './UserNames';

import { ClickContext } from '../contexts/useClickContext';

interface OverallScheduleTableProps extends TimetableStructure {
  dataOverallSchedule: getOverallScheduleResponse['data'];
}

function OverallScheduleTable({
  timeSlots,
  availableDates,
  dataOverallSchedule,
}: OverallScheduleTableProps) {
  const [clickedSlot, setClickedSlot] = useState<string | null>(null);
  const [clickedUserNames, setClickedUserNames] = useState<string[]>([]);

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
        clickedUserNames,
        setClickedUserNames,
      }}
    >
      <Timetable
        timeSlots={timeSlots}
        availableDates={availableDates}
        slotUnit="HALF"
        bottomItem={<UserNames />}
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
