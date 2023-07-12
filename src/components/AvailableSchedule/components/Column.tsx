import styled from 'styled-components';

import Row from './Row';

const Column = ({ timeSlots, date }) => {
  return (
    <ColumnWrapper>{timeSlots.map((slot) => <Row key={slot} timeSlot={slot} />)}</ColumnWrapper>
  );
};

export default Column;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
