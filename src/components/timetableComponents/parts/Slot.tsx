import styled from 'styled-components';

interface SlotProps {
  slotId: string;
  slotStyle?: string;
  onClick?: () => void;
}

function Slot({ slotId, slotStyle, onClick }: SlotProps) {
  const borderStyle = slotId.endsWith(':30') ? 'dashed' : 'solid';

  return <DefaultSlot $borderStyle={borderStyle} $slotStyle={slotStyle} onClick={onClick} />;
}

export default Slot;

const DefaultSlot = styled.div<{
  $borderStyle: string;
  $slotStyle?: string;
}>`
  ${({ $slotStyle }) => $slotStyle};
  border-top-style: ${({ $borderStyle }) => $borderStyle};
  cursor: pointer;
  width: 4.4rem;
  height: 2.2rem;
`;
