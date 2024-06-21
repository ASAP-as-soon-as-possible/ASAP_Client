import styled from 'styled-components';

import Slot from './Slot';
import { useTimetableContext } from '../context';

interface ColumnProps {
  date: string;
  timeSlots: string[];
}

function Column({ date, timeSlots }: ColumnProps) {
  const { selectedSlots } = useTimetableContext();
  const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
    ([, slot]) => slot.date === date,
  );

  return (
    <StyledColumn>
      {timeSlots.map((timeSlot) => {
        const belongingEntry = selectedSlotsPerDate.find(
          ([, { startSlot, endSlot }]) => timeSlot >= startSlot && timeSlot <= endSlot,
        );

        const selectedEntryId = belongingEntry ? parseInt(belongingEntry[0]) : undefined;

        return (
          <Slot
            key={`${date}/${timeSlot}`}
            slot={`${date}/${timeSlot}`}
            selectedEntryId={selectedEntryId}
          />
        );
      })}
    </StyledColumn>
  );
}

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
`;
