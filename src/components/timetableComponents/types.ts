export interface TimetableStructure {
  date: string;
  timeSlots: string[];
}

export type DateType = {
  month: string | undefined;
  day: string | undefined;
  dayOfWeek: string | undefined;
};
