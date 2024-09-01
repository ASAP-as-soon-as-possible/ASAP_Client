import { ReactNode } from 'react';

import styled from 'styled-components';

interface SlotProps {
  customSlotStyle?: string;
  onClick?: () => void;
  children?: ReactNode;
}

function Slot({ customSlotStyle, onClick, children }: SlotProps) {
  const defaultSlotStyle = `
    width: 4.3rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
  `;

  return (
    <SlotWrapper
      $defaultSlotStyle={defaultSlotStyle}
      $customSlotStyle={customSlotStyle}
      onClick={onClick}
    >
      <PriorityNumber>{children}</PriorityNumber>
    </SlotWrapper>
  );
}

export default Slot;

const SlotWrapper = styled.div<{
  $defaultSlotStyle: string;
  $customSlotStyle?: string;
}>`
  ${({ $defaultSlotStyle }) => $defaultSlotStyle};
  ${({ $customSlotStyle }) => $customSlotStyle};
`;

const PriorityNumber = styled.div`
  display: flex;
  position: relative;
  top: 6px;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
