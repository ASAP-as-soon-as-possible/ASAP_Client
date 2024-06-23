import { createContext, useContext } from 'react';

interface BaseSlotType {
  date: string;
  startSlot: string;
  endSlot: string;
}

/**
 * desc 가능시간, 우선순위 테이블에 사용되는 Slot Type
 */
export interface SelectSlotType extends BaseSlotType {
  priority: 0 | 1 | 2 | 3;
}

/**
 * desc 종합일정시간표 테이블에 사용되는 Slot Type
 */
export interface OverallSlotType extends BaseSlotType {
  userNames: string[];
  colorLevel: 1 | 2 | 3 | 4;
}
export interface SelectedSlotType {
  [key: number]: SelectSlotType | OverallSlotType;
}

type TimetableContextType = {
  startSlot: string | undefined;
  setStartSlot: (startSlot?: string) => void;
  selectedSlots: SelectedSlotType;
  setSelectedSlots: (selectedSlots: SelectedSlotType) => void;
};

export const TimetableContext = createContext<TimetableContextType>({
  startSlot: undefined,
  setStartSlot: () => undefined,
  selectedSlots: {},
  setSelectedSlots: () => undefined,
});

export function useTimetableContext() {
  const context = useContext(TimetableContext);
  if (context == null) {
    throw new Error('TimetableContext Error');
  }
  return context;
}
