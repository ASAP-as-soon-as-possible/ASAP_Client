import { DateType, SlotType } from './Timetable';

/**
 *
 * @description 시작 시간(startTime)과 종료 시간(endTime) 사이에서 30분 간격으로 시간 슬롯을 생성하여 반환하는 함수입니다.
 */

export function getAvailableTimes(times: SlotType) {
  function addMinutes(time: string, minutes: number) {
    const [hour, minute] = time.split(':').map(Number);
    const totalMinutes = hour * 60 + minute + minutes;
    const newHour = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
    const newMinute = String(totalMinutes % 60).padStart(2, '0');
    return `${newHour}:${newMinute}`;
  }

  function getTimeSlots(startTime: string, endTime: string): string[] {
    const slots = [];
    let curTime = startTime;
    while (curTime < endTime) {
      slots.push(curTime);
      curTime = addMinutes(curTime, 30);
    }
    return slots;
  }
  return getTimeSlots(times.startTime, times.endTime);
}

/**
 *
 * @description 날짜 리스트의 길이가 7이 될 때까지 비어있는 날짜에 대해 undefined를 채우는 함수입니다.
 */
export function fillWeekDates(dates: DateType[]): DateType[] {
  const filledDates = [...dates];
  while (filledDates.length < 7) {
    filledDates.push({
      month: undefined,
      day: undefined,
      dayOfWeek: undefined,
    });
  }
  return filledDates;
}
