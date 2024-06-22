import { DURATION, PLACE } from 'pages/selectSchedule/utils';

import { client } from './axios';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

interface Date {
  month: string;
  day: string;
  dayOfWeek: string;
}
interface TimeSlot {
  startTime: string;
  endTime: string;
}

interface getTimetableResponse {
  data: {
    duration: keyof typeof DURATION;
    place: keyof typeof PLACE;
    placeDetail: string;
    availableDates: Date[];
    preferTimes: TimeSlot[];
  };
}

const getTimetable = async (meetingId: string) => {
  try {
    const res = await client.get<getTimetableResponse>(`/meeting/${meetingId}/schedule`);
    return res.data.data;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      throw new Error(err.response.data.message);
    }
  }
};

export const useGetTimetable = (meetingId?: string) => {
  const navigate = useNavigate();
  if (meetingId === undefined) {
    navigate('/error');
    throw new Error('잘못된 회의 아이디입니다.');
  }
  const { data, isLoading } = useQuery({
    queryKey: ['getTimetable', meetingId],
    queryFn: () => getTimetable(meetingId),
  });

  return { data, isLoading };
};
