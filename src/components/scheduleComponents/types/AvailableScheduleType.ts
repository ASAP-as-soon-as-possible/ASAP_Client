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

import React from 'react';

export interface RowProps {
  rowIdx: number;
  timeSlots: string[];
  monthDay: string;
  dayOfWeek: string;
  isMorningDinner: boolean;
  isLastofValidDate: boolean;
  selectedSchedulePerDate: SelectedSchedule[];
  scheduleType: 'priority' | 'available';
  timeSlotUserNames: string[];
  setTimeSlotUserNames: React.Dispatch<React.SetStateAction<string>>;
}

export interface ColumnProps {
  timeSlot: string;
  rowIdx: number;
  $isHalf: boolean;
  $isEmpty: boolean;
  $isFirstRow: boolean;
  $isFirstColumn: boolean;
  $isLastColumn: boolean;
  $isLastofValidDate: boolean;
  EmptyRange: string[] | undefined;
  $isSelected: boolean;
  priority?: number;
  $priorityColorInfo: string;
  $isStartTimeofPrioritySlot: boolean;
  scheduleType: string;
  userNames: string[];
  $slotColorLevel: number;
}

export interface PriorityInfo {
  priority: number | undefined;
  isStartTime: boolean;
}
