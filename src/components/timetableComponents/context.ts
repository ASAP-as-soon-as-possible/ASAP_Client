import { createContext, useContext } from 'react';

export interface SlotInfoType {
  date: string;
  startSlot: string;
  endSlot: string;
  priority: 0 | 1 | 2 | 3;
}
export interface SelectedSlotType {
  [key: number]: SlotInfoType;
}

type TimetableContextType = {
  startSlot?: string;
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
