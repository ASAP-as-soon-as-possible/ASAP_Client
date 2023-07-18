export interface ScheduleStates {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  priority: number;
}

export interface DateStates {
  month: string;
  day: string;
  dayOfWeek: string;
}
