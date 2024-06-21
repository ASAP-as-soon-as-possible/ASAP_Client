import { ReactNode, createContext, useContext } from 'react';

export type SelectedSlotsType = {
  [date: string]: {
    startSlot: string;
    endSlot: string;
  }[];
};

type TimetableContextType = {
  startSlot?: ReactNode;
  setStartSlot: (startSlot?: string) => void;
  selectedSlots: SelectedSlotsType;
  setSelectedSlots: (selectedSlots: SelectedSlotsType) => void;
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
