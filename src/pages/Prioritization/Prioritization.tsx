import TimeTable from 'components/scheduleComponents/components/TimeTable';
import { SelectedSchedule } from 'components/scheduleComponents/types/AvailableScheduleType';

const SELECTED_SCHEDULE: SelectedSchedule[] = [
  {
    id: 1,
    date: '7월 6일 (월)',
    startTime: '17:30',
    endTime: '18:00',
    priority: 2,
  },
  {
    id: 2,
    date: '7월 6일 (월)',
    startTime: '11:00',
    endTime: '15:00',
    priority: 3,
  },
  {
    id: 3,
    date: '7월 7일 (화)',
    startTime: '18:00',
    endTime: '24:00',
    priority: 0,
  },
  {
    id: 4,
    date: '7월 8일 (수)',
    startTime: '13:00',
    endTime: '18:00',
    priority: 1,
  },
];

const Prioritization = () => {
  return <TimeTable selectedSchedule={SELECTED_SCHEDULE} scheduleType="priority" />;
};

export default Prioritization;
