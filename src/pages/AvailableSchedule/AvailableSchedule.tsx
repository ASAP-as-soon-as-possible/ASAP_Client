import { SELECTED_SCHEDULE } from 'components/scheduleComponents/data/selectedSchedule';

import TimeTable from '../../components/scheduleComponents/components/TimeTable';

const AvailableSchedule = () => {
  return <TimeTable selectedSchedule={SELECTED_SCHEDULE} scheduleType="available" />;
};

export default AvailableSchedule;
