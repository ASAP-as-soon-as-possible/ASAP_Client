interface BaseStructure {
  timeSlots: string[];
}

export interface TimetableStructure extends BaseStructure {
  availableDates: DateType[];
}

export interface ColumnStructure extends BaseStructure {
  date: string;
}

export interface DateType {
  month: string | undefined;
  day: string | undefined;
  dayOfWeek: string | undefined;
}

export interface SlotType {
  startTime: string;
  endTime: string;
}
