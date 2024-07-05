import { ScheduleStates } from 'pages/legacy/selectSchedule/types/Schedule';
import {
  HostAvailableSchduleRequestType,
  UserAvailableScheduleRequestType,
} from 'src/types/createAvailableSchduleType';

export const transformHostScheduleType = (
  scheduleList: ScheduleStates[],
): (HostAvailableSchduleRequestType | null)[] => {
  return scheduleList.map((item) => {
    const matchedResult = item.date.match(/(\d+)월 (\d+)일 \((\S+)\)/);
    if (!matchedResult) {
      return null; // Handle the case when there is no match for the date pattern
    }
    const [, month, day, ,] = matchedResult;

    return {
      month: month,
      day: day,
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
    const [, month, day, ,] = matchedResult;
    return {
      month: month,
      day: day,
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
