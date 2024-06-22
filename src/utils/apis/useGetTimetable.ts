import { client } from './axios';
import { useQuery } from '@tanstack/react-query';

const getTimetable = async (meetingId: string) => {
  try {
    const res = await client.get(`/meeting/${meetingId}/schedule`);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const useGetTimetable = (meetingId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getTimetable', meetingId],
    queryFn: () => getTimetable(meetingId),
  });
  const duration = data?.duration;
  const place = data?.place;
  const placeDetail = data?.placeDetail;
  const availableDates = data?.availableDates;
  const preferTimes = data?.preferTimes;

  return {duration, place, placeDetail, availableDates, preferTimes, isLoading}
};
