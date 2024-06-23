import { getAvailableTimes } from 'components/timetableComponents/utils';
import { useParams } from 'react-router-dom';
import { useGetOverallSchedule } from 'utils/apis/useGetOverallSchedule';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

import OverallScheduleTable from './components/OverallScheduleTable';

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
          <OverallScheduleTable
            timeSlots={getAvailableTimes(dataTimetable.preferTimes[0])}
            availableDates={dataTimetable.availableDates}
            dataOverallSchedule={dataOverallSchedule}
          />
        )}
    </>
  );
}

export default OverallSchedule;
