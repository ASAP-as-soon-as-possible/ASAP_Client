interface UserType {
  id: number;
  name: string;
}

export interface BestMeetTimeRequest {
  month: string;
  day: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  users: UserType[];
}

export interface BestMeetTimeResponse {
  statue: number;
  message: string;
  data: null;
}
