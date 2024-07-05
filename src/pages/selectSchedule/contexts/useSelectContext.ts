import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface SelectSlotType {
  date: string;
  startSlot: string;
  endSlot: string;
  priority: number;
}

export interface SelectedSlotType {
  [key: number]: SelectSlotType;
}

interface SelectContextType {
  startSlot: string | undefined;
  setStartSlot: Dispatch<SetStateAction<SelectContextType['startSlot']>>;
  selectedSlots: SelectedSlotType;
  setSelectedSlots: Dispatch<SetStateAction<SelectedSlotType>>;
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
