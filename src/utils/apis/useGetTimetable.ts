import { client } from './axios';
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
    duration: string;
    place: string;
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
    console.log(err);
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
