import styled from 'styled-components';

import Slot from './Slot';

interface ColumnProps {
  date: string;
  timeSlots: string[];
}

function Column({ date, timeSlots }: ColumnProps) {
  return (
    <StyledColumn>
      {timeSlots.map((timeSlot) => (
        <Slot key={`${date}/${timeSlot}`} slot={`${date}/${timeSlot}`} />
      ))}
    </StyledColumn>
  );
}

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
`;
