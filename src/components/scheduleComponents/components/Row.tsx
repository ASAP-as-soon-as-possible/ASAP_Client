import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import Column from './Column';
import { RowProps } from '../types/AvailableScheduleType';
import getTimeSlots from '../utils/getTimeSlots';
import priorityToColor from '../utils/priorityToColor';


const Row = (props: RowProps) => {
  const {
    rowIdx,
    timeSlots,
    monthDay,
    dayOfWeek,
    isMorningDinner,
    isLastofValidDate,
    selectedSchedulePerDate,
    scheduleType,
  } = props;

  const selectedTimeSlots = getTimeSlots(
    selectedSchedulePerDate.map(({ startTime, endTime }) => ({
      startTime,
      endTime,
    })),
  );

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
      {timeSlots.map((slot, columnIdx, arr) => (
        <Column
          key={slot}
          timeSlot={slot}
          $isHalf={slot.endsWith(':30')}
          $isEmpty={!monthDay}
          $isFirstRow={!rowIdx}
          $isFirstColumn={!columnIdx}
          $isLastColumn={columnIdx === arr.length - 1}
          $isLastofValidDate={isLastofValidDate}
          EmptyRange={
            isMorningDinner ? getTimeSlots([{ startTime: '12:00', endTime: '18:00' }]) : undefined
          }
          $isSelected={selectedTimeSlots.includes(slot)}
          $priorityColor={
            priorityToColor(
              scheduleType,
              selectedSchedulePerDate.find((schedule) => {
                return parseInt(schedule.startTime) < parseInt(slot) && parseInt(slot) < parseInt(schedule.endTime);
              })?.priority
            )
          }
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
  height: 3.4rem;
`;
