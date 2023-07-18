export const durationType = ['30분', '1시간', '1시간 30분', '2시간', '2시간 30분', '3시간'];

export const placeType = ['ONLINE', 'OFFLINE', 'UNDEFIND'];

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
export const funnelStep = [
  'title',
  'availableDates',
  'preferTimes',
  'place',
  'duration',
  'hostInfo',
  'additionalInfo',
];
