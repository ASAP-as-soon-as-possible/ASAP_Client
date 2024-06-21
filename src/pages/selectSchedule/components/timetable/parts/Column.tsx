import styled from 'styled-components';

import Slot from './Slot';
import { useTimetableContext } from '../context';

interface ColumnProps {
  date: string;
  timeSlots: string[];
}

function Column({ date, timeSlots }: ColumnProps) {
  const { selectedSlots } = useTimetableContext();
  const { startSlot, endSlot } = selectedSlots[date] ?? {};

  return (
    <StyledColumn>
      {timeSlots.map((timeSlot) => {
        const isSelectedSlot = timeSlot >= startSlot && timeSlot <= endSlot;
        return (
        <Slot
          key={`${date}/${timeSlot}`}
          slot={`${date}/${timeSlot}`}
          isSelectedSlot={isSelectedSlot}
        />)
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
