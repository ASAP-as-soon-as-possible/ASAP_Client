import styled from 'styled-components';

import Row from './Row';

const Column = ({ timeSlots, date }) => {
  return (
    <ColumnWrapper>
      {timeSlots.map((slot) => (
        <Row
          key={slot}
          timeSlot={slot}
          $borderTop={slot.endsWith(':30') && 'none'}
          $borderBottom={slot.endsWith(':00') && 'none'}
        />
      ))}
    </ColumnWrapper>
  );
};

export default Column;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
