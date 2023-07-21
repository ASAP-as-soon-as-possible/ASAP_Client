import {
  HostAvailableSchduleRequestType,
  UserAvailableScheduleRequestType,
} from 'src/types/createAvailableSchduleType';

import { ScheduleStates } from '../types/Schedule';

export const transformHostScheduleType = (
  scheduleList: ScheduleStates[],
): (HostAvailableSchduleRequestType | null)[] => {
  return scheduleList.map((item) => {
    // const regexResult = item.date.match(/(\d+)월 (\d+)일 \((\S+)\)/);
    // console.log(regexResult);

    const matchedResult = item.date.match(/(\d+)월 (\d+)일 \((\S+)\)/);
    if (!matchedResult) {
      return null; // Handle the case when there is no match for the date pattern
    }
    const [, month, day, dateOfWeek] = matchedResult;

    return {
      id: item.id.toString(),
      month: month.padStart(2, '0'),
      day: day.padStart(2, '0'),
      dayOfWeek: dateOfWeek,
      startTime: item.startTime,
      endTime: item.endTime,
      priority: item.priority,
    };
  });
};

export const transformUserScheduleType = (
  scheduleList: ScheduleStates[],
  meetInfo: string,
): UserAvailableScheduleRequestType => {
  const availableTimes = scheduleList.map((item) => {
    const matchedResult = item.date.match(/(\d+)월 (\d+)일 \((\S+)\)/);
    if (!matchedResult) {
      // Handle the case when there is no match for the date pattern
      // For example, you can return an empty object or any default value you prefer.
      return {
        id: '',
        month: '',
        day: '',
        dayOfWeek: '',
        startTime: '',
        endTime: '',
        priority: 0,
      };
    }
    // const [, month, day, dateOfWeek]: string[] | null = item.date.match(
    //   /(\d+)월 (\d+)일 \((\S+)\)/,
    // );
    const [, month, day, dateOfWeek] = matchedResult;
    return {
      id: item.id.toString(),
      month: month.padStart(2, '0'),
      day: day.padStart(2, '0'),
      dayOfWeek: dateOfWeek,
      startTime: item.startTime,
      endTime: item.endTime,
      priority: item.priority,
    };
  });

  const final: UserAvailableScheduleRequestType = {
    name: meetInfo,
    availableTimes,
  };

  return final;
};
