import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface SlotTitleProps {
  timeSlots: string[];
}

function SlotTitle({ timeSlots }: SlotTitleProps) {
  const parsedTimeSlots = timeSlots
    .filter((slot) => !slot.endsWith('30'))
    .map((slot) => parseInt(slot.split(':')[0]));
  parsedTimeSlots.push(24);

  return (
    <SlotTitleWrapper>
      {parsedTimeSlots.map((slot) => (
        <>
          <Text font="body4" color={theme.colors.grey5} key={slot}>
            {slot}
          </Text>
          <Text font="body4" color={theme.colors.grey5} key={slot}>
            {''}
          </Text>
        </>
      ))}
    </SlotTitleWrapper>
  );
}

export default SlotTitle;

const SlotTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 3.3rem;
`;
