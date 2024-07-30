import { useEffect, useState } from 'react';

import { authClient } from 'utils/apis/axios';

import { DateTimeData } from '../types/meetCardData';

const GetBestMeetimeListHooks = (meetingId: string) => {
  const [isError, setIsError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [bestTimeData, setBestTimeData] = useState<DateTimeData>();

  const getBestMeetimeList = async () => {
    try {
      setIsloading(true);
      const result = await authClient.get(`/meeting/${meetingId}/details`);
      setBestTimeData(result.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsloading(false);
  };

  useEffect(
    () => {
      getBestMeetimeList();
    },
    [meetingId],
  );
  return { isloading, bestTimeData, isError };
};

export default GetBestMeetimeListHooks;
