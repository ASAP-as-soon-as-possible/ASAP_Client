import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import { useClickContext } from '../contexts/useClickContext';

function TimeSlotUserNames() {
  const { timeSlotUserNames } = useClickContext();

  return (
    <TimeSlotUserNamesWrapper>
      {timeSlotUserNames.length === 0 ? (
        <TextWrapper>
          <Text font={'body4'} color={`${theme.colors.grey5}`}>
            블럭을 선택하면 해당 시간대에 참여가능한
          </Text>
          <Text font={'body4'} color={`${theme.colors.grey5}`}>
            인원을 확인할 수 있어요
          </Text>
        </TextWrapper>
      ) : (
        <Text font={'body2'} color={theme.colors.grey2}>
          {timeSlotUserNames.join(', ')}
        </Text>
      )}
    </TimeSlotUserNamesWrapper>
  );
}

export default TimeSlotUserNames;

const TimeSlotUserNamesWrapper = styled.section`
  display: flex;
  position: fixed;
  bottom: 4.4rem;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey9};
  width: 33.5rem;
  min-height: 8.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
