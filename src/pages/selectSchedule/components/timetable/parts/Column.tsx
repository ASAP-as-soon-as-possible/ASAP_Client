import { ReactNode } from 'react';

import styled from 'styled-components';

interface ColumnProps {
  children: ReactNode;
}

function Column({ children }: ColumnProps) {
  return <StyledColumn>{children}</StyledColumn>;
}

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
`;
