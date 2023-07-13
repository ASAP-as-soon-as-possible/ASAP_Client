/*
"data": {
    "duration" : "HOUR_HALF",
    "place" : "ONLINE",
    "placeDetail" : "구글미트",
    "availableDates" : [
        {
            "month" : "7",
            "day" : "6",
            "dayOfWeek" : "월"
        },
        {
            "month" : "7",
            "day" : "7",
            "dayOfWeek" : "월"
        }
    ],
    "preferTimes" : [
        {
                "startTime": "06:00",
                "endTime": "12:00"
        }
    ]
}
*/
import Text from 'components/atomComponents/Text';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

import Row from './Row';
import getTimeSlots from '../utils/getTimeSlots';

const AVAILABLE_DATES = [
  {
    month: '7',
    day: '6',
    dayOfWeek: '월',
  },
  {
    month: '7',
    day: '7',
    dayOfWeek: '화',
  },
  {
    month: '7',
    day: '8',
    dayOfWeek: '수',
  },
  {
    month: '7',
    day: '9',
    dayOfWeek: '목',
  },
  {
    month: '7',
    day: '10',
    dayOfWeek: '금',
  },
  //   {
  //     month: '7',
  //     day: '11',
  //     dayOfWeek: '토',
  //   },
  //   {
  //     month: '7',
  //     day: '12',
  //     dayOfWeek: '일',
  //   },
];

const PREFER_TIMES = [
  {
    startTime: '06:00',
    endTime: '12:00',
  },
  {
    startTime: '18:00',
    endTime: '24:00',
  },
];

function TimeTable() {
  const isMorningDinner =
    PREFER_TIMES.length === 2 && PREFER_TIMES.every((time) => time.startTime !== '12:00');

  const PreferTimes = [...PREFER_TIMES];
  isMorningDinner && PreferTimes.splice(1, 0, { startTime: '12:00', endTime: '18:00' }); // 오전, 저녁 선택시 오후 시간을 추가로 채움

  const timeSlots = getTimeSlots(PreferTimes);

  let formattedDates = AVAILABLE_DATES.map((date) => `${date.month}/${date.day} ${date.dayOfWeek}`);
  formattedDates = formattedDates.concat(Array(7 - formattedDates.length).fill('')); // 7일 미만이라면 나머지를 빈 문자열로 채움

  const lastElementBeforeEmpty = [...formattedDates].reverse().find((element) => element !== '');
  console.log(timeSlots);
  return (
    <TimeTableWrapper>
      <TimeSlotWrapper>
        {timeSlots.map(
          (slot) =>
            slot.endsWith(':00') ? (
              <Text key={slot} font={'body4'} color={`${theme.colors.grey6}`}>
                {String(parseInt(slot.split(':')[0]))}
              </Text>
            ) : (
              undefined
            ),
        )}
      </TimeSlotWrapper>
      {formattedDates.map((date, idx) => (
        <Row
          rowIdx={idx}
          key={date}
          timeSlots={timeSlots}
          monthDay={date.split(' ')[0]}
          dayOfWeek={date.split(' ')[1]}
          isMorningDinner={isMorningDinner}
          isLastofValidDate={lastElementBeforeEmpty === date}
        />
      ))}
    </TimeTableWrapper>
  );
}

export default TimeTable;

const TimeTableWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

const TimeSlotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 3.6rem;
  margin-right: 1rem;
`;
