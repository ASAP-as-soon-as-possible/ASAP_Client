export interface AvailableSchduleRequestType {
  id: number;
  month: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  priority: number;
}

export interface AvailableScheduleResponseType {
  data: {
    url: string;
    accessToken: string;
  };
}
