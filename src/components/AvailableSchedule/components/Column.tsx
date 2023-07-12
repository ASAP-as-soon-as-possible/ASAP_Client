import styled from 'styled-components';

const Column = ({ timeSlot, $borderTop, $borderBottom }) => {
  return <ColumnWrapper $borderTop={$borderTop} $borderBottom={$borderBottom} />;
};

export default Column;

const ColumnWrapper = styled.div<{ $borderTop: string; $borderBottom: string }>`
  border: 0.05rem solid ${({ theme }) => theme.colors.grey7};
  border-top: ${({ $borderTop }) => $borderTop};
  border-bottom: ${({ $borderBottom }) => $borderBottom};

  width: 4.4rem;
  height: 1.2rem;
`;
