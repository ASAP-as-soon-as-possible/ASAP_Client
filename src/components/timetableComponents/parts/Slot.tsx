import styled from 'styled-components';

import useSlotSeletion from '../hooks/useSlotSelection';

interface SlotProps {
  slot: string;
  selectedEntryId?: number;
}

function Slot({ slot, selectedEntryId }: SlotProps) {
  const { startSlot, onClickSlot } = useSlotSeletion();

  const borderStyle = slot.endsWith(':30') ? 'dashed' : 'solid';
  const styledSlotProps = {
    $borderStyle: borderStyle,
    $isSelected: selectedEntryId !== undefined,
    onClick: () => onClickSlot(slot, selectedEntryId),
  };

  if (slot === startSlot) {
    return <SelectingSlot {...styledSlotProps} />;
  } else {
    return <DefaultSlot {...styledSlotProps} />;
  }
}

export default Slot;

const DefaultSlot = styled.div<{ $borderStyle: string; $isSelected: boolean }>`
  border-top: 1px ${({ $borderStyle }) => $borderStyle} ${({ theme }) => theme.colors.grey7};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main1 : 'transparent'};
  cursor: pointer;
  width: 4.4rem;
  height: 2.2rem;
`;

const SelectingSlot = styled.div<{ $borderStyle: string; $isSelected: boolean }>`
  border: 1px dashed ${({ theme }) => theme.colors.main5};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main1 : 'transparent'};
  cursor: pointer;
  width: 4.4rem;
  height: 2.2rem;
`;
