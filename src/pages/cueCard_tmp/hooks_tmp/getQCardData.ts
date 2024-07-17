import { useEffect, useState } from 'react';

import { authClient, client } from 'utils/apis/axios';

import { CueCardResponse } from '../types/cueCardType';

const initCardData: CueCardResponse = {
  status: 200,
  message: '큐카드 조회 성공입니다.',
  data: {
    title: 'ASAP 간챙기자',
    place: 'ONLINE',
    placeDetail: '',
    month: '7',
    day: '30',
    dayOfWeek: '월',
    startTime: '06:00',
    endTime: '12:00',
    hostName: '서지원',
    userNames: [
      '서지원',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
    ],
    additionalInfo: '',
  },
};
const GetQcardDataHooks = (meetingId: string) => {
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [cueCardData, setCueCardData] = useState<CueCardResponse>();

  const GetQcardData = async () => {
    try {
      setIsloading(true);
      const result = await authClient.get(`/meeting/${meetingId}/card`);
      setCueCardData(result.data);
      // setTimeout(() => setCueCardData(initCardData), 1000);
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
