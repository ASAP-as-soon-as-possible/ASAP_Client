export interface AvailableDate {
  month: string;
  day: string;
  dayOfWeek: string;
}

export interface PreferTime {
  startTime: string;
  endTime: string;
}

export interface SelectedSchedule {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  priority: number;
}

export interface RowProps {
  rowIdx: number;
  timeSlots?: string[];
  monthDay: string;
  dayOfWeek: string;
  isMorningDinner: boolean;
  isLastofValidDate: boolean;
  selectedSchedulePerDate: SelectedSchedule[];
  scheduleType: 'priority' | 'available';
}

export interface ColumnProps {
  timeSlot: string;
  rowIdx?: number;
  $isHalf: boolean;
  $isEmpty: boolean;
  $isFirstRow: boolean;
  $isFirstColumn: boolean;
  $isLastColumn: boolean;
  $isLastofValidDate: boolean;
  EmptyRange?: string[];
  $isSelected?: boolean;
  priority?: number;
  $priorityColorInfo?: string;
  $isStartTimeofPrioritySlot?: boolean;
  scheduleType: string;
  userNames?: string[];
  $slotColorLevel?: number;
}

export interface PriorityInfo {
  priority: number | undefined;
  isStartTime: boolean;
}
