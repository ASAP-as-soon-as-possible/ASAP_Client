import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import { DateType } from '../Timetable';

interface DateTitleProps {
  availableDates: DateType[];
}

function DateTitle({ availableDates }: DateTitleProps) {
  return (
    <DateTitleWrapper>
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
    </DateTitleWrapper>
  );
}

const DateTitleWrapper = styled.div`
  display: flex;
  gap: 1px;
  margin-bottom:0.8rem;
  padding-left: 1px;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.13rem;
  align-items: center;
  width: 4.4rem;
`;

export default DateTitle;
