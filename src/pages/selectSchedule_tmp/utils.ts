import { addMinutes } from 'components/timetableComponents/utils';

import { SelectedSlotType } from './contexts/useSelectContext';
import { TitlesType } from './types';

export const DURATION = {
  HALF: '30분',
  HOUR: '1시간',
  HOUR_HALF: '1시간 30분',
  TWO_HOUR: '2시간',
  TWO_HOUR_HALF: '2시간 30분',
  THREE_HOUR: '3시간',
} as const;

export const PLACE = {
  ONLINE: '온라인',
  OFFLINE: '오프라인',
  UNDEFINED: undefined,
} as const;

export const TITLES: TitlesType = {
  selectTimeSlot: {
    main: '가능한 시간대를 등록해주세요',
    sub: '시작시간과 종료시간을 터치하여 블럭을 생성해주세요',
  },
  selectPriority: {
    main: '우선순위를 입력해주세요',
  },
} as const;

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
    const [month, day, ,] = slot.date.split('/');

    return {
      month: month,
      day: day,
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
    const [month, day, ,] = slot.date.split('/');

    return {
      month: month,
      day: day,
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
