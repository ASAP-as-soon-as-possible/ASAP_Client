export interface BestMeetTimeRequest {
  month: string;
  day: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

export interface BestMeetTimeResponse {
  statue: number;
  message: string;
  data: null;
}
