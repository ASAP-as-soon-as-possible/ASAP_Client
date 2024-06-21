import styled from 'styled-components';

import { useTimetableContext } from '../context';

interface SlotProps {
  slot: string;
  selectedEntryId?: number;
}

function Slot({ slot, selectedEntryId }: SlotProps) {
  const { startSlot, setStartSlot, selectedSlots, setSelectedSlots } = useTimetableContext();

  const onClickSlot = (targetSlot: string) => {
    if (selectedEntryId !== undefined) {
      const newSelectedSlots = { ...selectedSlots };
      delete newSelectedSlots[selectedEntryId];
      setSelectedSlots(newSelectedSlots);
    }
  };

  const borderStyle = slot.endsWith(':30') ? 'dashed' : 'solid';
  return (
    <StyledSlot
      $borderStyle={borderStyle}
      $isSelected={selectedEntryId !== undefined}
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
