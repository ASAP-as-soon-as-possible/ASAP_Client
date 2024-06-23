import { createContext, useContext } from 'react';

export interface SelectSlotType {
  date: string;
  startSlot?: string;
  endSlot: string;
  priority: number;
}

export interface SelectedSlotType {
  [key: number]: SelectSlotType;
}

interface SelectContextType {
  startSlot: string | undefined;
  setStartSlot: (startSlot?: string) => void;
  selectedSlots: SelectedSlotType;
  setSelectedSlots: (selectedSlots: SelectedSlotType) => void;
}

export const SelectContext = createContext<SelectContextType>({
  startSlot: undefined,
  setStartSlot: () => undefined,
  selectedSlots: {},
  setSelectedSlots: () => undefined,
});

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (context == null) {
    throw new Error('SelectContext Error');
  }
  return context;
}
