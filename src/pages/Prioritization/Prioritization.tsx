import TimeTable from 'components/scheduleComponents/components/TimeTable';
import { SELECTED_SCHEDULE } from 'components/scheduleComponents/data/selectedSchedule';

const Prioritization = () => {
  return <TimeTable selectedSchedule={SELECTED_SCHEDULE} scheduleType="priority" />;
};

export default Prioritization;
