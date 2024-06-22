/**
 *
 * @desc 영어로 표현된 회의 진행 시간을 한글로 변환하는 함수
 */
export const formatDuration = (duration: string): string => {
  switch (duration) {
    case 'HALF':
      return '30분';
    case 'HOUR':
      return '1시간';
    case 'HOUR_HALF':
      return '1시간 30분';
    case 'TWO_HOUR':
      return '2시간';
    case 'TWO_HOUR_HALF':
      return '2시간 30분';
    case 'THREE_HOUR':
      return '3시간';
    default:
      return 'UNDEFINED';
  }
};

/**
 *
 * @desc 영어로 표현된 회의 장소를 한글로 변환하는 함수
 */
export const formatPlace = (place: string) => {
  switch (place) {
    case 'ONLINE':
      return '온라인';
    case 'OFFLINE':
      return '오프라인';
    case 'UNDEFINED':
      return undefined;
  }
};
