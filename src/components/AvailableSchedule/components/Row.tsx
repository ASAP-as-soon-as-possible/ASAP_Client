import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import Column from './Column';

const Row = ({ idx, timeSlots, monthDay, dayOfWeek }) => {
  return (
    <ColumnWrapper>
      <DateWrapper>
        <Text font={'body4'} color={`${theme.colors.grey6}`}>
          {monthDay}
        </Text>
        <Text font={'body4'} color={`${theme.colors.grey4}`}>
          {dayOfWeek}
        </Text>
      </DateWrapper>

      {timeSlots.map((slot) => (
        <Column
          key={slot}
          timeSlot={slot}
          $borderTop={slot.endsWith(':30') && 'none'}
          $borderBottom={slot.endsWith(':00') && 'none'}
        />
      ))}
    </ColumnWrapper>
  );
};

export default Row;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;

  margin-bottom: 1rem;
`;
