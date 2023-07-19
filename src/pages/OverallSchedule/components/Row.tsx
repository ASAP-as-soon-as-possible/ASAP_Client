
import Text from 'components/atomComponents/Text';
import { PriorityInfo, RowProps } from 'components/scheduleComponents/types/AvailableScheduleType';
import getTimeSlots from 'components/scheduleComponents/utils/getTimeSlots';
import priorityToColor from 'components/scheduleComponents/utils/priorityToColor';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import Column from './Column';

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
  // console.log(selectedSchedulePerDate);
  const timeSlotsPerDate = selectedSchedulePerDate.map((obj) => obj.timeSlots);
  const targetTimeSlots = timeSlotsPerDate[0] && timeSlotsPerDate[0].map((obj) => obj.time);
  // const targetTimeSlots = selectedSchedulePerDate.map((obj) => {
  //   console.log(obj.timeSlots);
  //   obj.timeSlots.map((objSub) => objSub.time);
  // });
  // console.log(targetTimeSlots);

  const getColorLevelByTime = (objArray, targetTime) => {
    const targetObj = objArray.find((obj) => obj[0].time === targetTime);
    return targetObj ? targetObj[0].colorLevel : null;
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
          $isSelected={targetTimeSlots?.includes(slot)}
          $slotColorLevel={getColorLevelByTime(timeSlotsPerDate,slot)}
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
