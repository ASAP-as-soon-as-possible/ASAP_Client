import { getAvailableTimes } from 'components/timetableComponents/utils';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetOverallSchedule } from 'utils/apis/useGetOverallSchedule';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

import OverallScheduleTable from './components/OverallScheduleTable';
import Title from './components/Title';

function OverallSchedule() {
  const { meetingId } = useParams();
  const { data: dataTimetable, isLoading: isLoadingTimetable } = useGetTimetable(meetingId);
  const { data: dataOverallSchedule, isLoading: isLoadingOverallSchedule } = useGetOverallSchedule(
    meetingId,
  );

  return (
    <OverallScheduleWrapper>
      <Title memberCount={dataOverallSchedule?.memberCount} totalUserNames={dataOverallSchedule?.totalUserNames}/>
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
    </OverallScheduleWrapper>
  );
}

export default OverallSchedule;

const OverallScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16.4rem;
`;


