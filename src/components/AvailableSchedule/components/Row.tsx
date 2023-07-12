import styled from 'styled-components';

const Row = ({ timeSlot, $borderTop, $borderBottom }) => {
  return (
    <RowWrapper $borderTop={$borderTop} $borderBottom={$borderBottom}>
      row
    </RowWrapper>
  );
};

export default Row;

const RowWrapper = styled.div<{ $borderTop: string; $borderBottom: string }>`
  border: 0.1rem solid ${({ theme }) => theme.colors.grey7};
  border-top: ${({ $borderTop }) => $borderTop};
  border-bottom: ${({ $borderBottom }) => $borderBottom};

  width: 4.4rem;
  height: 2.4rem;
`;
