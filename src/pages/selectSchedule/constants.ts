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
