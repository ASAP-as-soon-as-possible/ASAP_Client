import { ScheduleStates } from '../types/Schedule';

export const transformHostScheduleType = (scheduleList: ScheduleStates[]) => {
  return scheduleList.map((item) => {
    const [, month, day, dateOfWeek]: string[] = item.date.match(/(\d+)월 (\d+)일 \((\S+)\)/);

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

export const transformUserScheduleType = (scheduleList: ScheduleStates[], meetInfo: string) => {
  const availableTimes = scheduleList.map((item) => {
    const [, month, day, dateOfWeek]: string[] = item.date.match(/(\d+)월 (\d+)일 \((\S+)\)/);

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

  const final = {
    name: meetInfo,
    availableTimes,
  };
  console.log(final);
  return final;
};
