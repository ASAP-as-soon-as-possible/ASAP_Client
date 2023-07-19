import { DateStates, TimeStates } from 'pages/selectSchedule/types/Schedule';

export interface AvailableScheduleOptionResponse {
  data: {
    duration: string;
    place: string;
    placeDetail: string;
    availableDates: DateStates[];
    preferTimes: TimeStates[];
  };
}

export interface MeetingDetail {
  duration?: string;
  place?: string;
  placeDetail?: string;
}
