import useSlotSeletion from 'pages/selectSchedule/selectTimeSlot/hooks/useSlotSelection';
import styled from 'styled-components';

interface SlotProps {
  slot: string;
  selectedEntryId?: number;
}

function Slot({ slot, selectedEntryId }: SlotProps) {
  const { startSlot, onClickSlot } = useSlotSeletion();

  const borderStyle = slot.endsWith(':30') ? 'dashed' : 'solid';
  const isSelected = selectedEntryId !== undefined;
  const isStartSlot = slot === startSlot;

  return (
    <DefaultSlot
      $borderStyle={borderStyle}
      $isSelected={isSelected}
      $isStartSlot={isStartSlot}
      onClick={() => onClickSlot(slot, selectedEntryId)}
    />
  );
}

export default Slot;

const DefaultSlot = styled.div<{
  $borderStyle: string;
  $isSelected: boolean;
  $isStartSlot: boolean;
}>`
  ${({ $isStartSlot, $borderStyle, theme }) =>
    $isStartSlot
      ? `border: 1px dashed ${theme.colors.main5};`
      : `border-top: 1px ${$borderStyle} ${theme.colors.grey7};`}
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.main1 : 'transparent'};
  cursor: pointer;
  width: 4.4rem;
  height: 2.2rem;
`;
