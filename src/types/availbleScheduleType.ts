import { DateStates, TimeStates } from 'pages/legacy/selectSchedule/types/Schedule';

export interface AvailableScheduleOptionResponse {
  data: {
    duration: string;
    place: string;
    placeDetail: string;
    availableDates: DateStates[];
  };
}

export interface MeetingDetail {
  duration: string;
  place?: string;
  placeDetail?: string;
}
