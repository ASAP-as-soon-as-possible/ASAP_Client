import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure } from 'components/timetableComponents/types';
import { getAvailableTimes } from 'components/timetableComponents/utils';
import { useParams } from 'react-router-dom';
import {
  AvailableDateTime,
  TimeSlot,
  useGetOverallSchedule,
} from 'utils/apis/useGetOverallSchedule';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

import OverallScheduleSlots from './components/OverallScheduleSlots';

function OverallSchedule() {
  const { meetingId } = useParams();
  const { data: dataTimetable, isLoading: isLoadingTimetable } = useGetTimetable(meetingId);
  const { data: dataOverallSchedule, isLoading: isLoadingOverallSchedule } = useGetOverallSchedule(
    meetingId,
  );

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
    <>
      {!isLoadingTimetable &&
        !isLoadingOverallSchedule &&
        dataTimetable &&
        dataOverallSchedule && (
          <Timetable
            timeSlots={getAvailableTimes(dataTimetable.preferTimes[0])}
            availableDates={dataTimetable.availableDates}
          >
            {({ date, timeSlots }: ColumnStructure) => (
              <OverallScheduleSlots
                date={date}
                timeSlots={timeSlots}
                availableSlotInfo={getAvailableTimesPerDate(
                  dataOverallSchedule.availableDateTimes,
                  date,
                )}
              />
            )}
          </Timetable>
        )}
    </>
  );
}

export default OverallSchedule;
