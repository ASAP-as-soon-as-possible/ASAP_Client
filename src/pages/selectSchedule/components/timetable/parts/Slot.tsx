import styled from 'styled-components';

import { useTimetableContext } from '../context';

interface SlotProps {
  slot: string;
  isSelected: boolean;
}

function Slot({ slot, isSelected }: SlotProps) {
  const { startSlot, setStartSlot, selectedSlots } = useTimetableContext();

  const onClickSlot = (targetSlot: string) => {
    if (isSelected) {
      const date = slot.substring(0, slot.lastIndexOf('/'));
      const updatedSlots = selectedSlots[date].filter(
        (slot) => !(targetSlot >= slot.startSlot && targetSlot <= slot.endSlot),
      );
      if (selectedSlots[date].length === 0) {
        delete selectedSlots[date];
      }
      console.log(updatedSlots);
    }
  };

  const borderStyle = slot.endsWith(':30') ? 'dashed' : 'solid';
  return (
    <StyledSlot
      $borderStyle={borderStyle}
      $isSelected={isSelected}
      onClick={() => onClickSlot(slot)}
    />
  );
}

export default Slot;

const StyledSlot = styled.div<{ $borderStyle: string; $isSelected: boolean }>`
  border-top: 1px ${({ $borderStyle }) => $borderStyle} ${({ theme }) => theme.colors.grey7};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main1 : 'transparent'};
  cursor: pointer;
  width: 4.4rem;
  height: 2rem;
`;
