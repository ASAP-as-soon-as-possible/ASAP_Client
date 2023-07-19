import { DateStates, TimeStates } from 'pages/selectSchdule/types/Schedule';

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
  duration: string;
  place?: string;
  placeDetail?: string;
}
