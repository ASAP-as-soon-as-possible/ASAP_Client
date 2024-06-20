import styled from 'styled-components';

import { useTimetableContext } from '../context';

interface SlotProps {
  slot: string;
}

function Slot({ slot }: SlotProps) {
  const { selectedSlots } = useTimetableContext();
  const [month, day, dayOfWeek, time] = slot.split('/');
  const isHalf = time.endsWith(':30');

  const key = [month, day, dayOfWeek].join('/');

  let isSelected = false;
  if (key in selectedSlots) {
    const { startSlot, endSlot } = selectedSlots[key];

    isSelected = time >= startSlot && time <= endSlot;
  }

  return <StyledSlot $borderStyle={isHalf ? 'dashed' : 'solid'} $isSelected={isSelected} />;
}

export default Slot;

const StyledSlot = styled.div<{ $borderStyle: string; $isSelected: boolean }>`
  border-top: 1px ${({ $borderStyle }) => $borderStyle} ${({ theme }) => theme.colors.grey7};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main1 : 'transparent'};
  width: 4.4rem;
  height: 2rem;
`;
