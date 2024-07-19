import { useEffect, useState } from 'react';

import { authClient } from 'utils/apis/axios';

import { DateTimeData } from '../types/meetCardData';

const initialData = {
  status: 200,
  message: '최적의 회의시간 조회 성공입니다.',
  data: {
    memberCount: 12,
    bestDateTime: {
      month: '7',
      day: '30',
      dayOfWeek: '월',
      startTime: '06:00',
      endTime: '12:00',
      users: [
        {
          id: 1,
          name: '심은서',
        },
        {
          id: 2,
          name: '이동헌',
        },
        {
          id: 3,
          name: '정찬우',
        },
      ],
    },
    otherDateTimes: [
      {
        month: '7',
        day: '31',
        dayOfWeek: '화',
        startTime: '06:00',
        endTime: '12:00',
        users: [
          {
            id: 1,
            name: '심은서',
          },
          {
            id: 2,
            name: '이동헌',
          },
          {
            id: 3,
            name: '정찬우',
          },
        ],
      },
      {
        month: '7',
        day: '32',
        dayOfWeek: '화',
        startTime: '06:00',
        endTime: '12:00',
        users: [
          {
            id: 1,
            name: '심은서',
          },
          {
            id: 2,
            name: '이동헌',
          },
          {
            id: 3,
            name: '정찬우',
          },
        ],
      },
    ],
  },
};
const GetBestMeetimeListHooks = (meetingId: string) => {
  const [isError, setIsError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [bestTimeData, setBestTimeData] = useState<DateTimeData>();

  const getBestMeetimeList = async () => {
    try {
      setIsloading(true);
      const result = await authClient.get(`/meeting/${meetingId}/details`);
      setBestTimeData(result.data);
      // setTimeout(() => setBestTimeData(initialData), 1000);
    } catch (error) {
      console.log(error);
      setIsError(true)
    }
    setIsloading(false);
  };

  useEffect(
    () => {
      getBestMeetimeList();
    },
    [meetingId],
  );
  return { isloading, bestTimeData ,isError };
};

export default GetBestMeetimeListHooks;
