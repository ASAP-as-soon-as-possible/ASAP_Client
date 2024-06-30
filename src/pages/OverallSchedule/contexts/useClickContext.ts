import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface ClickContextType {
  clickedSlot: string | undefined;
  setClickedSlot: Dispatch<SetStateAction<ClickContextType['clickedSlot']>>;
  timeSlotUserNames: string[];
  setTimeSlotUserNames: Dispatch<SetStateAction<ClickContextType['timeSlotUserNames']>>;
}

export const ClickContext = createContext<ClickContextType>({
  clickedSlot: undefined,
  setClickedSlot: () => undefined,
  timeSlotUserNames: [],
  setTimeSlotUserNames: () => [],
});

export function useClickContext() {
  const context = useContext(ClickContext);
  if (context == null) {
    throw new Error('ClickContext Error');
  }
  return context;
}
