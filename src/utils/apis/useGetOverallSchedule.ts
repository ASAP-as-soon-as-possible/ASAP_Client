import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { authClient } from './axios';

interface Date {
  month: string;
  day: string;
  dayOfWeek: string;
}

export interface TimeSlot {
  time: string;
  userNames: string[];
  colorLevel: number;
}

export interface AvailableDateTime extends Date {
  timeSlots: TimeSlot[];
}

export interface getOverallScheduleResponse {
  data: {
    memberCount: number;
    totalUserNames: string[];
    availableDateTimes: AvailableDateTime[];
  };
}

const getOverallSchedule = async (meetingId: string) => {
  try {
    const res = await authClient.get<getOverallScheduleResponse>(`/meeting/${meetingId}/timetable`);
    return res.data.data;
  } catch (err) {
    if (isAxiosError(err) && err.response) {
      throw new Error(err.response.data.message);
    }
  }
};

export const useGetOverallSchedule = (meetingId?: string) => {
  const navigate = useNavigate();
  if (meetingId === undefined) {
    navigate('/error');
    throw new Error('잘못된 회의 아이디입니다.');
  }
  const { data, isLoading } = useQuery({
    queryKey: ['getOverallSchedule', meetingId],
    queryFn: () => getOverallSchedule(meetingId),
  });

  return { data, isLoading };
};
