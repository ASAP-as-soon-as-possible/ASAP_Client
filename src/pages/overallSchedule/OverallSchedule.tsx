import { getAvailableTimes } from 'components/common/timetableComponents/utils';
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

  // 시간대 선택 단계가 없어질 것을 고려하여 상수값을 설정해놓음
  const PREFER_TIMES = { startTime: '06:00', endTime: '24:00' };

  return (
    <OverallScheduleWrapper>
      <Title memberCount={dataOverallSchedule?.memberCount} totalUserNames={dataOverallSchedule?.totalUserNames}/>
      {!isLoadingTimetable &&
        !isLoadingOverallSchedule &&
        dataTimetable &&
        dataOverallSchedule && (
          <OverallScheduleTable
            timeSlots={getAvailableTimes(PREFER_TIMES)}
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


