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
      setStartSlot(undefined);
    } else {
      if (startSlot === undefined) {
        setStartSlot(targetSlot);
      } else {
        const dateOfStartSlot = startSlot.substring(0, startSlot.lastIndexOf('/'));
        const dateOfTargetSlot = targetSlot.substring(0, targetSlot.lastIndexOf('/'));
        if (dateOfStartSlot === dateOfTargetSlot) {
          const newSelectedSlot = {
            date: dateOfStartSlot,
            startSlot: startSlot.substring(startSlot.lastIndexOf('/') + 1),
            endSlot: targetSlot.substring(targetSlot.lastIndexOf('/') + 1),
          };
          const keys = Object.keys(selectedSlots).map(Number);
          const newKey = keys.length ? Math.max(...keys) + 1 : 0;
          selectedSlots[newKey] = newSelectedSlot;
        }
        setStartSlot(undefined);
      }
    }
  };

  const borderStyle = slot.endsWith(':30') ? 'dashed' : 'solid';

  if (slot === startSlot) {
    return (
      <SelectingSlot
        $borderStyle={borderStyle}
        $isSelected={selectedEntryId !== undefined}
        onClick={() => onClickSlot(slot)}
      />
    );
  } else {
    return (
      <DefaultSlot
        $borderStyle={borderStyle}
        $isSelected={selectedEntryId !== undefined}
        onClick={() => onClickSlot(slot)}
      />
    );
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
