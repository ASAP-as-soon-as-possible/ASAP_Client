import { createContext, useContext } from 'react';

interface ClickContextType {
  clickedSlot: string | undefined;
  setClickedSlot: (clickedSlot?: string) => void;
  clickedUserNames: string[];
  setClickedUserNames: (clickedUserNames: string[]) => void;
}

export const ClickContext = createContext<ClickContextType>({
  clickedSlot: undefined,
  setClickedSlot: () => undefined,
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
