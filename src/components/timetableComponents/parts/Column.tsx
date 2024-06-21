import { ReactNode } from 'react';

import styled from 'styled-components';

interface ColumnProps {
  children: ReactNode;
}

function Column({ children }: ColumnProps) {
  return <ColumnWrapper>{children}</ColumnWrapper>;
}

export default Column;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${({ theme }) => theme.colors.grey7};
`;
