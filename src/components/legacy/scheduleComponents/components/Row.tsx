import Text from 'components/common/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import Column from './Column';
import { PriorityInfo, RowProps } from '../types/AvailableScheduleType';
import { compareTimeForPriorityEndTime, compareTimeForPriorityStartTime } from '../utils/compareTime';
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

  /** 인자로 받은 slot의 priority 값과 시작시간에 해당하는 slot인지 여부를 반환하는 함수 */
  const getSlotPriorityInfo = (slot: string): PriorityInfo => {
    const priorityInfo: PriorityInfo = { priority: undefined, isStartTime: false };
    const containedSlot = selectedSchedulePerDate.find((candidateSlot) => {
      if (candidateSlot.startTime === slot) {
        priorityInfo.isStartTime = true;
      }
      return (
        compareTimeForPriorityStartTime(candidateSlot.startTime, slot) && compareTimeForPriorityEndTime(slot, candidateSlot.endTime)
      );
    });

    priorityInfo.priority = containedSlot?.priority;

    return priorityInfo;
  };

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
      {timeSlots && timeSlots.map((slot, columnIdx, arr) => (
        <Column
          key={slot}
          rowIdx={undefined}
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
          $isSelected={selectedTimeSlots?.includes(slot)}
          priority={getSlotPriorityInfo(slot).priority}
          $priorityColorInfo={
            priorityToColor(
              scheduleType,
              getSlotPriorityInfo(slot).priority
            )
          }
          $isStartTimeofPrioritySlot={
            getSlotPriorityInfo(slot).isStartTime
          }
          scheduleType={scheduleType}
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
