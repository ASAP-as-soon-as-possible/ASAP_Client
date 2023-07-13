import styled from 'styled-components';

const Column = ({ timeSlot, $borderTop, $borderBottom, $isEmpty }) => {
  return (
    <ColumnWrapper $isEmpty={$isEmpty} $borderTop={$borderTop} $borderBottom={$borderBottom} />
  );
};

export default Column;

const ColumnWrapper = styled.div<{ $borderTop: string; $borderBottom: string }>`
  border: 0.05rem solid ${({ theme }) => theme.colors.grey7};
  border-top: ${({ $borderTop, $isEmpty }) => ($isEmpty ? 'none' : $borderTop)};
  border-bottom: ${({ $borderBottom, $isEmpty }) => ($isEmpty ? 'none' : $borderBottom)};
  /* background-color: ${({ $isEmpty, theme }) => ($isEmpty ? theme.colors.grey7 : undefined)}; */

  width: 4.4rem;
  height: 1.2rem;
`;
