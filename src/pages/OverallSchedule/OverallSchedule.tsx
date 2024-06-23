import Timetable from 'components/timetableComponents/Timetable';
import { ColumnStructure } from 'components/timetableComponents/types';
import { getAvailableTimes } from 'components/timetableComponents/utils';
import { useParams } from 'react-router-dom';
import { useGetOverallSchedule } from 'utils/apis/useGetOverallSchedule';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

function OverallSchedule() {
  const { meetingId } = useParams();
  const { data: dataTimetable, isLoading: isLoadingTimetable } = useGetTimetable(meetingId);
  const { data: dataOverallSchedule, isLoading: isLoadingOverallSchedule } = useGetOverallSchedule(
    meetingId,
  );
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
            {({ date, timeSlots }: ColumnStructure) => <div>OverallScheduleSlots</div>}
          </Timetable>
        )}
    </>
  );
}

export default OverallSchedule;
