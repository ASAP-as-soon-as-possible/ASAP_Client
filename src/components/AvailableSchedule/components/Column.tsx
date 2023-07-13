import styled from 'styled-components';

const Column = ({ timeSlot, $isHalf, $isEmpty, $isFirstRow, $isFirstColumn, $isLastColumn }) => {
  return (
    <ColumnWrapper
      $isEmpty={$isEmpty}
      $isFirstRow={$isFirstRow}
      $isHalf={$isHalf}
      $isFirstColumn={$isFirstColumn}
      $isLastColumn={$isLastColumn}
    />
  );
};

export default Column;

const ColumnWrapper = styled.div<{
  $isEmpty: string;
  $isHalf: string;
  $isFirstRow: string;
  $isFirstColumn: string;
  $isLastColumn: string;
}>`
    border-top: ${({ theme, $isFirstColumn }) =>
      $isFirstColumn ? `0.1rem solid ${theme.colors.grey7}` : 'none'};
  border-right: ${({ theme }) => `0.1rem solid ${theme.colors.grey7}`};
  /* border: 0.05rem solid ${({ theme }) => theme.colors.grey7}; */
  border-bottom: ${({ $isHalf, $isEmpty, $isLastColumn, theme }) =>
    ($isEmpty && !$isLastColumn) || !$isHalf ? 'none' : `0.1rem solid ${theme.colors.grey7}`};
  border-left: ${({ theme, $isFirstRow }) =>
    $isFirstRow ? `0.1rem solid ${theme.colors.grey7}` : 'none'};
  width: 4.4rem;
  height: 1.2rem;
`;
