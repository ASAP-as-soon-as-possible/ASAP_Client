import { useClickContext } from '../contexts/useClickContext';

export const useSlotClick = () => {
  const { clickedSlot, setClickedSlot, setTimeSlotUserNames } = useClickContext();

  const onClickSlot = (targetSlot: string, targetUserNames: string[]) => {
    setClickedSlot(targetSlot);
    setTimeSlotUserNames(targetUserNames);
  };

  return { clickedSlot, onClickSlot };
};
