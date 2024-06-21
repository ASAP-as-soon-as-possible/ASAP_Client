import styled from 'styled-components';

import { useTimetableContext } from '../context';

interface SlotProps {
  slot: string;
  isSelectedSlot: boolean;
}

function Slot({ slot, isSelectedSlot }: SlotProps) {
  const { startSlot, setStartSlot, selectedSlots } = useTimetableContext();
  console.log(startSlot);

  const borderStyle = slot.endsWith(':30') ? 'dashed' : 'solid';
  return <StyledSlot $borderStyle={borderStyle} $isSelected={isSelectedSlot} />;
}

export default Slot;

const StyledSlot = styled.div<{ $borderStyle: string; $isSelected: boolean }>`
  border-top: 1px ${({ $borderStyle }) => $borderStyle} ${({ theme }) => theme.colors.grey7};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main1 : 'transparent'};
  width: 4.4rem;
  height: 2rem;
`;
