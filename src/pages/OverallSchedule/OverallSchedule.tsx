import React, { useEffect } from 'react';

import { availableDatesAtom, preferTimesAtom } from 'atoms/atom';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { availableScheduleOptionApi } from 'utils/apis/availbleScheduleOptionApi';

import TimeTable from './components/TimeTable';
import { getFormattedAvailableDateTimes } from './utils/getFormattedAvailableDateTimes';

const data = {
  availableDateTimes: [
    {
      month: '7',
      day: '20',
      dayOfWeek: '목',
      timeSlots: [
        {
          time: '19:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '19:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '20:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
      ],
    },
    {
      month: '7',
      day: '21',
      dayOfWeek: '금',
      timeSlots: [
        {
          time: '14:00',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '14:30',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
      ],
    },
  ],
};

const formattedAvailableDateTimes = getFormattedAvailableDateTimes(data);

const OverallSchedule = () => {
  const { meetingId } = useParams();
  const [availableDates, setAvailableDates] = useRecoilState(availableDatesAtom);

  const [preferTimes, setPreferTimes] = useRecoilState(preferTimesAtom);

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
    <TimeTable
      selectedSchedule={formattedAvailableDateTimes.availableDateTimes}
      availableDates={availableDates}
      preferTimes={preferTimes}
      scheduleType="available"
    />
  );
};

export default OverallSchedule;
