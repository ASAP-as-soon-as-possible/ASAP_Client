import { PreferTime, SelectedSchedule } from '../types/AvailableScheduleType';

import { DateStates } from 'pages/legacy/selectSchedule/types/Schedule';
import Row from './Row';
import Text from 'components/common/atomComponents/Text';
import getTimeSlots from '../utils/getTimeSlots';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

interface TimeTableProps {
  selectedSchedule: SelectedSchedule[];
  availableDates: DateStates[];
  preferTimes: PreferTime[];
  scheduleType: 'priority' | 'available';
}

function TimeTable({
  selectedSchedule,
  availableDates,
  preferTimes,
  scheduleType,
}: TimeTableProps) {

  const isMorningDinner =
    preferTimes.length === 2 && preferTimes.every((time) => time.startTime !== '12:00');

  const formattedPreferTimes = [...preferTimes];
  isMorningDinner && formattedPreferTimes.splice(1, 0, { startTime: '12:00', endTime: '18:00' }); // 오전, 저녁 선택시 오후 시간을 추가로 채움

  const timeSlots = getTimeSlots(formattedPreferTimes);

  let formattedDates = availableDates.map((date) => `${date.month}/${date.day} ${date.dayOfWeek}`);

  const formattedDatesForSelectBox = availableDates.map(
    (date) => `${date.month}월 ${date.day}일 (${date.dayOfWeek})`,
  );

  formattedDates = formattedDates.concat(Array(7 - formattedDates.length).fill('')); // 7일 미만이라면 나머지를 빈 문자열로 채움

  const lastElementBeforeEmpty = [...formattedDates].reverse().find((element) => element !== '');

  return (
    <TimeTableWrapper>
      <TimeSlotWrapper>
        {timeSlots && timeSlots.map(
          (slot) =>
            slot?.endsWith(':00') ? (
              <Text key={slot} font={'body4'} color={`${theme.colors.grey6}`}>
                {String(parseInt(slot?.split(':')[0]))}
              </Text>
            ) : (
              undefined
            ),
        )}
      </TimeSlotWrapper>
      {formattedDates.map((date, idx) => (
        <Row
          rowIdx={idx}
          key={date + idx}
          selectedSchedulePerDate={Array.from(selectedSchedule).filter(
            (obj: SelectedSchedule) => obj.date === formattedDatesForSelectBox[idx],
          )}
          timeSlots={timeSlots}
          monthDay={date.split(' ')[0]}
          dayOfWeek={date.split(' ')[1]}
          isMorningDinner={isMorningDinner}
          isLastofValidDate={lastElementBeforeEmpty === date}
          scheduleType={scheduleType}
        />
      ))}
    </TimeTableWrapper>
  );
}

export default TimeTable;

const TimeTableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TimeSlotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 3.6rem;
  margin-right: 1rem;
`;
