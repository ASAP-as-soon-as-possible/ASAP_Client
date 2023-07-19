import React, { useEffect } from 'react';

import { availableDatesAtom, preferTimesAtom, scheduleAtom } from 'atoms/atom';
import PriorityDropdown from 'components/scheduleComponents/components/PriorityDropdown';
import TimeTable from 'components/scheduleComponents/components/TimeTable';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { availableScheduleOptionApi } from 'utils/apis/availbleScheduleOptionApi';

const SelectSchedulePriority = () => {
  const [availableDates, setAvailableDates] = useRecoilState(availableDatesAtom);
  const [preferTimes, setPreferTimes] = useRecoilState(preferTimesAtom);
  const [scheduleList, setScheduleList] = useRecoilState(scheduleAtom);
  const { meetingId } = useParams();

  const getAvailableScheduleOption = async () => {
    try {
      const { data } = await availableScheduleOptionApi(meetingId);
      setAvailableDates(data.data.availableDates);
      setPreferTimes(data.data.preferTimes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAvailableScheduleOption();
  }, []);

  return (
    <>
      <TimeTable
        selectedSchedule={scheduleList}
        availableDates={availableDates}
        preferTimes={preferTimes}
        scheduleType="priority"
      />
      <PriorityDropdown />
    </>
  );
};

export default SelectSchedulePriority;
