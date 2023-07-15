export interface AvailableDate {
  month: string;
  day: string;
  dayOfWeek: string;
}

export interface PreferTime {
  startTime: string;
  endTime: string;
}

export interface RowProps {
  rowIdx: number;
  timeSlots: string[];
  monthDay: string;
  dayOfWeek: string;
  isMorningDinner: boolean;
  isLastofValidDate: boolean;
}
export interface ColumnProps {
  timeSlot: string;
  $isHalf: boolean;
  $isEmpty: boolean;
  $isFirstRow: boolean;
  $isFirstColumn: boolean;
  $isLastColumn: boolean;
  $isLastofValidDate: boolean;
  EmptyRange: string[] | undefined;
}
