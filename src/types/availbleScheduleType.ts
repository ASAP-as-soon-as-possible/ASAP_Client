import { DateStates } from 'pages/selectSchdule/types/Schedule';

export interface AvailableScheduleOptionResponse {
  data: {
    duration: string;
    place: string;
    placeDetail: string;
    availableDates: DateStates[];
  };
}
