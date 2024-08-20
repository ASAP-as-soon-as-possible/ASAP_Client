export const durationType = [
  { time: '30분', enum: 'HALF' },
  { time: '1시간', enum: 'HOUR' },
  { time: '1시간 30분', enum: 'HOUR_HALF' },
  { time: '2시간', enum: 'TWO_HOUR' },
  { time: '2시간 30분', enum: 'TWO_HOUR_HALF' },
  { time: '3시간', enum: 'THREE_HOUR' },
];

type PlaceType = {
  [key: string]: string;
};
export const placeType: PlaceType = {
  ONLINE: '온라인',
  OFFLINE: '오프라인',
  UNDEFINED: '미정',
};

type weekDayType = {
  [key: string]: string;
};
export const weekDayType: weekDayType = {
  MON: '월',
  TUE: '화',
  WED: '수',
  THU: '목',
  FRI: '금',
  SAT: '토',
  SUN: '일',
};

export const preferTimeType = [
  {
    title: '오전 ( 6:00 - 12:00 )',
    startTime: '06:00',
    endTime: '12:00',
    btnState: false,
  },
  {
    title: '오후 ( 12:00 - 18:00 )',
    startTime: '12:00',
    endTime: '18:00',
    btnState: false,
  },
  {
    title: '저녁 ( 18:00 - 24:00 )',
    startTime: '18:00',
    endTime: '24:00',
    btnState: false,
  },
];

export const directInputButton = {
  title: '직접 입력할게요',
  startTime: '',
  endTime: '',
  btnState: false,
};

export const timeList = [
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00',
];

export const funnelStep = [
  'title',
  'availableDates',
  'place',
  'duration',
  'hostInfo',
  'additionalInfo',
];
