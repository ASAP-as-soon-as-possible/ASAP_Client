import { useEffect, useState } from 'react';

import { authClient } from 'utils/apis/axios';

import { CueCardResponse } from '../types/cueCardType';

const GetQcardDataHooks = (meetingId: string) => {
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cueCardData, setCueCardData] = useState<CueCardResponse>();

  const GetQcardData = async () => {
    try {
      setIsloading(true);
      const result = await authClient.get(`/meeting/${meetingId}/card`);
      setCueCardData(result.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsloading(false);
  };

  useEffect(
    () => {
      GetQcardData();
    },
    [meetingId],
  );
  return { isError, isloading, cueCardData };
};

export default GetQcardDataHooks;
