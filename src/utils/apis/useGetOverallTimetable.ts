import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { authClient, client } from './axios';

interface Date {
  month: string;
  day: string;
  dayOfWeek: string;
}

interface TimeSlot {
  time: string;
  userNames: string[];
  colorLevel: 1 | 2 | 3 | 4 | 5;
}

interface AvailableDateTime extends Date {
  timeSlots: TimeSlot[];
}

interface getOverallTimetableResponse {
  data: {
    memberCount: number;
    totalUserNames: string[];
    availableDateTimes: AvailableDateTime[];
  };
}

const getOverallTimetable = async (meetingId: string) => {
  try {
    const res = await authClient.get<getOverallTimetableResponse>(
      `/meeting/${meetingId}/timetable`,
    );
    return res.data.data;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      throw new Error(err.response.data.message);
    }
  }
};

export const useGetOverallTimetable = (meetingId?: string) => {
  const navigate = useNavigate();
  if (meetingId === undefined) {
    navigate('/error');
    throw new Error('잘못된 회의 아이디입니다.');
  }
  const { data, isLoading } = useQuery({
    queryKey: ['getOverallTimetable', meetingId],
    queryFn: () => getOverallTimetable(meetingId),
  });

  return { data, isLoading };
};
