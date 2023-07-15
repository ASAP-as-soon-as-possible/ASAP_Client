import TimeTable from './components/TimeTable';

const SELECTED_SCHEDULE = [
  {
    id: 1,
    date: '',
    startTime: '',
    endTime: '',
    dropDown: true,
    priority: 0,
  },
];

const AvailableSchedule = () => {
  return <TimeTable />;
};

export default AvailableSchedule;
