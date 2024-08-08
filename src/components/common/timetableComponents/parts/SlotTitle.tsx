import { Fragment } from 'react';

import Text from 'components/common/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import { TimetableProps } from '../Timetable';

type SlotTitleProps = Pick<TimetableProps, 'timeSlots' | 'slotUnit'>;

function SlotTitle({ timeSlots, slotUnit }: SlotTitleProps) {
  const parsedTimeSlots = timeSlots
    .filter((slot) => !slot.endsWith('30'))
    .map((slot) => parseInt(slot.split(':')[0]));
  parsedTimeSlots.push(24);

  return (
    <SlotTitleWrapper $slotUnit={slotUnit}>
      {parsedTimeSlots.map((slot) => (
        <Fragment key={slot}>
          <Text font="body4" color={theme.colors.grey7} key={`${slot}-fill`}>
            {slot}
          </Text>
          <Text font="body4" color={theme.colors.grey7} key={`${slot}-empty`}>
            {''}
          </Text>
        </Fragment>
      ))}
    </SlotTitleWrapper>
  );
}

export default SlotTitle;

const SlotTitleWrapper = styled.div<{ $slotUnit: 'HALF' | 'HOUR' }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $slotUnit }) => ($slotUnit === 'HALF' ? '1.4rem' : '0.4rem')};
  margin-top: 3.5rem;
`;
