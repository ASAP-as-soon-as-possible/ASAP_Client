interface TimeSlots {
  time: string;
  userNames: string[];
  colorLevel: number;
}

interface AvailableDateTimes {
  month: string;
  day: string;
  dayOfWeek: string;
  timeSlots: TimeSlots[];
}

export interface OverallScheduleData {
  memberCount: number;
  totalUserNames: string[];
  availableDateTimes: AvailableDateTimes[];
}

export interface OverallScheduleResponse {
  data: OverallScheduleData;
}
