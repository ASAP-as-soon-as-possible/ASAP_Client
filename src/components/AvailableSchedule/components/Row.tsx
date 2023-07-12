import styled from 'styled-components';

const Row = ({ timeSlot }) => {
  return <RowWrapper>Row</RowWrapper>;
};

export default Row;

const RowWrapper = styled.div`
  box-sizing: content-box;
  outline: 0.1rem solid ${({ theme }) => theme.colors.grey7};

  width: 4.4rem;
  height: 2.4rem;
`;
