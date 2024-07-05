import { useClickContext } from '../contexts/useClickContext';

export const useSlotClick = () => {
  const { clickedSlot, setClickedSlot, setClickedUserNames } = useClickContext();

  const onClickSlot = (targetSlot: string, targetUserNames: string[]) => {
    setClickedSlot(targetSlot);
    setClickedUserNames(targetUserNames);
  };

  return { clickedSlot, onClickSlot };
};
