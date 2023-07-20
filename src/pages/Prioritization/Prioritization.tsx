import { SELECTED_SCHEDULE } from 'components/scheduleComponents/data/selectedSchedule';
import { ScheduleStates } from 'pages/selectSchedule/types/Schedule';
import TimeTable from 'components/scheduleComponents/components/TimeTable';
import { scheduleAtom } from 'atoms/atom';
import { useRecoilState } from 'recoil';

const Prioritization = () => {
  const [scheduleList, setScheduleList] = useRecoilState<ScheduleStates[]>(scheduleAtom);
  return <TimeTable selectedSchedule={scheduleList} scheduleType="priority" />;
};

export default Prioritization;
