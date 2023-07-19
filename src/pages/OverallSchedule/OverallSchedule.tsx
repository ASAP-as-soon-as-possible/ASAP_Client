import React from 'react';

import { AVAILABLE_DATES } from 'components/scheduleComponents/data/availableDates';
import { PREFER_TIMES } from 'components/scheduleComponents/data/preferTimes';
import { SELECTED_SCHEDULE } from 'components/scheduleComponents/data/selectedSchedule';

import TimeTable from './components/TimeTable';

const OverallSchedule = () => {
  return (
    <TimeTable
      selectedSchedule={SELECTED_SCHEDULE}
      availableDates={AVAILABLE_DATES}
      preferTimes={PREFER_TIMES}
      scheduleType="available"
    />
  );
};

export default OverallSchedule;
