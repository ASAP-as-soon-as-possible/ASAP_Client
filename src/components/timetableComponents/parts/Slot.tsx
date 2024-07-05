import { ReactNode } from 'react';
import styled from 'styled-components';

interface SlotProps {
  slotId: string;
  slotStyle?: string;
  onClick?: () => void;
  children?: ReactNode;
}

function Slot({ slotId, slotStyle, onClick, children }: SlotProps) {
  const borderStyle = slotId.endsWith(':30') ? 'dashed' : 'solid';

  return (
    <DefaultSlot $borderStyle={borderStyle} $slotStyle={slotStyle} onClick={onClick}>
      {children}
    </DefaultSlot>
  );
}

export default Slot;

const DefaultSlot = styled.div<{
  $borderStyle: string;
  $slotStyle?: string;
}>`
  border-top: 1px solid ${({ theme }) => theme.colors.grey7};
  border-top-style: ${({ $borderStyle }) => $borderStyle};
  ${({ $slotStyle }) => $slotStyle};

  width: 4.4rem;
  height: 2.2rem;

  display: flex;
  justify-content: center;
`;
