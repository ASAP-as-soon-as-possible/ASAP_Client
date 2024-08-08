import Text from 'components/common/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import { DateType } from '../types';

interface ColumnTitleProps {
  availableDates: DateType[];
}

function ColumnTitle({ availableDates }: ColumnTitleProps) {
  return (
    <ColumnTitleWrapper>
      {availableDates.map((date) => {
        const { month, day, dayOfWeek } = date;
        return (
          <Date key={[month, day, dayOfWeek].join('/')}>
            <Text font={'body4'} color={theme.colors.grey6}>
              {month ?? ''}/{day ?? ''}
            </Text>
            <Text font={'body4'} color={theme.colors.grey4}>
              {dayOfWeek ?? ''}
            </Text>
          </Date>
        );
      })}
    </ColumnTitleWrapper>
  );
}

const ColumnTitleWrapper = styled.div`
  display: flex;
  gap: 1px;
  padding-left: 1px;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.13rem;
  align-items: center;
  width: 4.3rem;
`;

export default ColumnTitle;
