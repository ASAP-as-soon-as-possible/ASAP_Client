import { OverallScheduleData } from "src/types/overallScheduleType";

export const getFormattedAvailableDateTimes = (data:OverallScheduleData | undefined) => {
  if (data === undefined) return;
  const transformedData = {
    availableDateTimes: data.availableDateTimes.map((dateTime) => {
      const date = `${Number(dateTime.month)}월 ${Number(dateTime.day)}일 (${dateTime.dayOfWeek})`;

      return {
        date,
        timeSlots: dateTime.timeSlots,
      };
    }),
  };

  return transformedData;
};
