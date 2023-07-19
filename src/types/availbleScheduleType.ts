import { DateStates } from 'pages/selectSchdule/types/Schedule';

export interface AvailableScheduleOptionResponse {
  duration: string;
  place: string;
  placeDetail: string;
  availableDates: DateStates[];
}
