import { createContext, useContext } from 'react';

export type SelectedSlotsType = {
  [date: string]: {
    startSlot: string;
    endSlot: string;
  };
};

type TimetableContextType = {
  startSlot?: string;
  selectedSlots: SelectedSlotsType;
};

export const TimetableContext = createContext<TimetableContextType>({
  startSlot: undefined,
  selectedSlots: {},
});

export function useTimetableContext() {
  const context = useContext(TimetableContext);
  if (context == null) {
    throw new Error('TimetableContext Error');
  }
  return context;
}
