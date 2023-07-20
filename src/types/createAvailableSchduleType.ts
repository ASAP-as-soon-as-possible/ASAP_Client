export interface HostAvailableSchduleRequestType {
  id: string;
  month: string;
  day: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  priority: number;
}

export interface HostAvailableScheduleResponseType {
  data: {
    url: string;
    accessToken: string;
  };
}

export interface UserAvailableScheduleRequestType {
  name: string;
  availableTimes: [
    {
      id: string;
      month: string;
      day: string;
      dayOfWeek: string;
      startTime: string;
      endTime: string;
      priority: number;
    }
  ];
}

export interface UserAvailableScheduleResponseType {
  data: {
    role: string;
  };
}
