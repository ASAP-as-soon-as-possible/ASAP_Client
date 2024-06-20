import styled from 'styled-components';

interface SlotProps {
  slot: string;
}

function Slot({ slot }: SlotProps) {
  const [month, day, dayOfWeek, time] = slot.split('/');
  const isHalf = time.endsWith(':30');
  return <StyledSlot $borderStyle={isHalf ? 'dashed' : 'solid'} />;
}

export default Slot;

const StyledSlot = styled.div<{ $borderStyle: string }>`
  border-top: 1px ${({ $borderStyle }) => $borderStyle} ${({ theme }) => theme.colors.grey7};
  width: 4.4rem;
  height: 2rem;
  color: white;
`;
