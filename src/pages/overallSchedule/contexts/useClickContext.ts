import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface ClickContextType {
  clickedSlot: string | null;
  setClickedSlot: Dispatch<SetStateAction<ClickContextType['clickedSlot']>>;
  clickedUserNames: string[];
  setClickedUserNames: Dispatch<SetStateAction<ClickContextType['clickedUserNames']>>;
}

export const ClickContext = createContext<ClickContextType>({
  clickedSlot: null,
  setClickedSlot: () => null,
  clickedUserNames: [],
  setClickedUserNames: () => [],
});

export function useClickContext() {
  const context = useContext(ClickContext);
  if (context == null) {
    throw new Error('ClickContext Error');
  }
  return context;
}
