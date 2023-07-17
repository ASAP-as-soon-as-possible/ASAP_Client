import { useEffect } from 'react';

import { createMeetingApi } from 'utils/apis/createMeetingApi';

const createMeetingRequestExample = {
  title: 'ASAP 회의',
  availableDates: ['2023/04/23/MON'],
  preferTimes: [
    {
      startTime: '06:00',
      endTime: '12:00',
    },
  ],
  place: 'ONLINE',
  placeDetail: 'zoom',
  duration: 'HALF',
  name: '서지원',
  password: '0702',
  additionalInfo: '추가 공지사항',
};

const ApiTesting = () => {
  const postCreateMeeting = async () => {
    try {
      const {
        data: { data },
      } = await createMeetingApi(createMeetingRequestExample);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    postCreateMeeting();
  }, []);

  return <div>ApiTesting</div>;
};

export default ApiTesting;
