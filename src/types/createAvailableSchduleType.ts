export interface HostAvailableSchduleRequestType {
  month: string;
  day: string;
  startTime: string;
  endTime: string;
  priority: number;
}

export interface HostAvailableScheduleResponseType {
  code: number;
  message: string;
  data: {
    url: string;
    accessToken: string;
  };
}
export interface UserAvailableScheduleRequestType {
  name: string;
  availableTimes: {
    id: string;
    month: string;
    day: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    priority: number;
  }[];
}
export interface UserAvailableScheduleRequestTypeNull {
  name: string;
  availableTimes: [null];
}

export interface UserAvailableScheduleResponseType {
  code: number;
  message: string;
  data: {
    role: string;
  };
}
