import Text from 'components/atomComponents/Text';
import getTimeSlots from 'components/legacy/scheduleComponents/utils/getTimeSlots';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import Column from './Column';
import { filterUserNames } from '../utils/setUserNames';

interface TimeSlot{
  time:string;
  userNames:string[];
  colorLevel:number;
}

interface SelectedSchedule {
  date: string;
  timeSlots:TimeSlot[];
}

interface RowProps {
  rowIdx: number;
  timeSlots?: string[];
  monthDay: string;
  dayOfWeek: string;
  isMorningDinner: boolean;
  isLastofValidDate: boolean;
  selectedSchedulePerDate?: SelectedSchedule[];
  scheduleType: 'priority' | 'available';
}


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

  const timeSlotsPerDate = selectedSchedulePerDate && selectedSchedulePerDate.map((obj) => obj.timeSlots);
  const targetTimeSlots = timeSlotsPerDate && timeSlotsPerDate[0] && timeSlotsPerDate[0].map((obj) => obj.time);

  const getColorLevelByTime = (objArray:TimeSlot[], targetTime:string) => {
    if (objArray === undefined) return;
    const targetObj = objArray.find((obj) => obj.time === targetTime);
    return targetObj && targetObj.colorLevel
  }

  const getUserNamesByTime = (objArray:TimeSlot[], targetTime:string) => {
    if (objArray === undefined) return;
    const targetObj = objArray.find((obj)=> obj.time === targetTime);
    if(targetObj){
      const temp=filterUserNames(targetObj.userNames);
      return temp;
    }
  }

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
          rowIdx={rowIdx}
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
          $slotColorLevel={timeSlotsPerDate && getColorLevelByTime(timeSlotsPerDate[0],slot)}
          userNames={timeSlotsPerDate && getUserNamesByTime(timeSlotsPerDate[0],slot)}
          scheduleType={scheduleType}
          $priorityColorInfo={undefined}
          $isStartTimeofPrioritySlot={undefined}
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
