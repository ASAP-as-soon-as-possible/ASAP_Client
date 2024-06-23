import { SlotType } from './types';
/**
 *
 * @desc 문자열로 된 time('HH:MM')에 minutes을 더하는 함수
 */
export const addMinutes = (time: string, minutes: number) => {
  const [hour, minute] = time.split(':').map(Number);
  const totalMinutes = hour * 60 + minute + minutes;
  const newHour = String(Math.floor(totalMinutes / 60)).padStart(2, '0');
  const newMinute = String(totalMinutes % 60).padStart(2, '0');
  return `${newHour}:${newMinute}`;
};

/**
 *
 * @desc 시작 시간(startTime)과 종료 시간(endTime) 사이에서 30분 간격으로 시간 슬롯을 생성하여 반환하는 함수
 */

export const getAvailableTimes = ({ startTime, endTime }: SlotType) => {
  const slots = [];
  let curTime = startTime;
  while (curTime < endTime) {
    slots.push(curTime);
    curTime = addMinutes(curTime, 30);
  }
  return slots;
};
