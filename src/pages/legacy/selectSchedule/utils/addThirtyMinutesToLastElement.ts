const addThirtyMinutes = (time: string): string => {
  const [hour, minute] = time.split(':'); // 시(hour)와 분(minute)으로 분리
  const totalMinutes = parseInt(hour) * 60 + parseInt(minute); // 시간과 분을 분 단위로 변환하여 합산
  const newTotalMinutes = totalMinutes + 30; // 30분을 더한 값

  const newHour = Math.floor(newTotalMinutes / 60) % 24; // 새로운 시간 계산 (24시간 제한)
  const newMinute = newTotalMinutes % 60; // 새로운 분 계산

  const newTime = `${newHour.toString().padStart(2, '0')}:${newMinute.toString().padStart(2, '0')}`; // 새로운 시간 문자열 생성

  return newTime;
};

export const addThirtyMinutesToLastElement = (list: string[]): string[] => {
  const lastElement = list[list.length - 1]; // 리스트의 마지막 요소 가져오기
  const newTime = addThirtyMinutes(lastElement); // 마지막 요소에 30분을 더한 시간 계산
  const normalizedTime = newTime === '00:00' ? '24:00' : newTime; // 00:00을 24:00으로 정규화
  const newList = [...list, normalizedTime]; // 새로운 시간을 리스트에 추가

  return newList;
};
