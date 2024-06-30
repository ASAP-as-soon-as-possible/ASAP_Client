import { addMinutes } from 'components/timetableComponents/utils';

import { SelectedSlotType } from './contexts/useSelectContext';

/**
 *
 * @desc 선택된 슬롯들의 우선순위를 0으로 초기화하는 함수
 */
export const resetPriorities = (selectedSlots: SelectedSlotType): SelectedSlotType => {
  const updatedSlots: SelectedSlotType = {};

  for (const key in selectedSlots) {
    if (typeof selectedSlots[key] === 'object') {
      updatedSlots[key] = {
        ...selectedSlots[key],
        priority: 0,
      };
    }
  }

  return updatedSlots;
};

/**
 *
 * @desc 방장 시간표 입력 POST를 위한 형식을 맞추는 함수
 */
export const formatHostScheduleScheme = (selectedSlots: SelectedSlotType) => {
  const availableTimes = Object.keys(selectedSlots).map((key) => {
    const slot = selectedSlots[parseInt(key)];
    const [month, day, dayOfWeek] = slot.date.split('/');

    return {
      id: key,
      month: month.padStart(2, '0'),
      day: day.padStart(2, '0'),
      dayOfWeek: dayOfWeek,
      startTime: slot.startSlot,
      endTime: addMinutes(slot.endSlot, 30),
      priority: slot.priority,
    };
  });
  return availableTimes;
};

/**
 *
 * @desc 멤버 시간표 입력 POST를 위한 형식을 맞추는 함수
 */
export const formatMemberScheduleScheme = (selectedSlots: SelectedSlotType, userName: string) => {
  const availableTimes = Object.keys(selectedSlots).map((key) => {
    const slot = selectedSlots[parseInt(key)];
    const [month, day, dayOfWeek] = slot.date.split('/');

    return {
      id: key,
      month: month.padStart(2, '0'),
      day: day.padStart(2, '0'),
      dayOfWeek: dayOfWeek,
      startTime: slot.startSlot,
      endTime: addMinutes(slot.endSlot, 30),
      priority: slot.priority,
    };
  });
  return {
    name: userName,
    availableTimes: availableTimes,
  };
};
