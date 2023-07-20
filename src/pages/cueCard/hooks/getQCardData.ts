import { useEffect, useState } from 'react';

import { client } from 'utils/apis/axios';

import { CueCardResponse } from '../types/cueCardType';

const initCardData: CueCardResponse = {
  status: 200,
  message: '큐카드 조회 성공입니다.',
  data: {
    title: 'ASAP 간챙기자',
    place: 'ONLINE',
    placeDetail: '구글미트',
    month: '7',
    day: '30',
    dayOfWeek: '월',
    startTime: '06:00',
    endTime: '12:00',
    hostName: '서지원',
    userNames: ['서지원', '도소현'],
    additionalInfo: '공지사항 입니다 이바밥보아럼 공지사항 입니다 이바밥보아럼 공지사항 입니다 이바밥보아럼',
  },
};
const GetQcardDataHooks = (meetingId: string) => {
  const [isloading, setIsloading] = useState(true);
  const [cueCardData, setCueCardData] = useState<CueCardResponse>();

  const GetQcardData = async () => {
    try {
      setIsloading(true);
      // const result = await client.get(`/meeting/${meetingId}/details`);
      // setBestTimeData(result.data);
      setTimeout(() => setCueCardData(initCardData), 1000);
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };

  useEffect(
    () => {
      GetQcardData();
    },
    [meetingId],
  );
  return { isloading, cueCardData };
};

export default GetQcardDataHooks;
