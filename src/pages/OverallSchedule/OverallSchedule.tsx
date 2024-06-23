import { useParams } from 'react-router-dom';
import { useGetOverallTimetable } from 'utils/apis/useGetOverallTimeTable';

function OverallSchedule() {
  const { meetingId } = useParams();
  const { data, isLoading } = useGetOverallTimetable(meetingId);
  return <div>OverallSchedule</div>;
}

export default OverallSchedule;
