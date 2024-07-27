import { ReactNode } from 'react';

import styled from 'styled-components';

interface SlotProps {
  slotId: string;
  customSlotStyle?: string;
  slotUnit: 'HALF' | 'HOUR';
  onClick?: () => void;
  children?: ReactNode;
}

function Slot({ slotId, customSlotStyle, slotUnit, onClick, children }: SlotProps) {
  const defaultSlotStyle = `
    width: 4.4rem;
    height: ${slotUnit === 'HALF' ? '2.2rem' : '1.2rem'};
    display: flex;
    justify-content: center;
  `;

  const borderTopStyle = slotId.endsWith(':30')
    ? slotUnit === 'HALF'
      ? 'dashed'
      : 'none'
    : 'solid';

  return (
    <SlotWrapper
      $defaultSlotStyle={defaultSlotStyle}
      $borderTopStyle={borderTopStyle}
      $customSlotStyle={customSlotStyle}
      onClick={onClick}
    >
      {children}
    </SlotWrapper>
  );
}

export default Slot;

const SlotWrapper = styled.div<{
  $defaultSlotStyle: string;
  $borderTopStyle: string;
  $customSlotStyle?: string;
}>`
  border-top: 1px solid ${({ theme }) => theme.colors.grey7};
  border-top-style: ${({ $borderTopStyle }) => $borderTopStyle};
  ${({ $defaultSlotStyle }) => $defaultSlotStyle};
  ${({ $customSlotStyle }) => $customSlotStyle};
`;
