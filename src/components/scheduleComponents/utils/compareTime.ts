export const compareTime = (startTime: string, endTime: string) => {
  const [startHour, startMinute] = startTime.split(':');
  const [endHour, endMinute] = endTime.split(':');

  const start = parseInt(startHour + startMinute);
  const end = parseInt(endHour + endMinute);

  return start < end;
};

export const compareTimeForPriorityStartTime = (startTime: string, endTime: string) => {
  const [startHour, startMinute] = startTime.split(':');
  const [endHour, endMinute] = endTime.split(':');

  const start = parseInt(startHour + startMinute);
  const end = parseInt(endHour + endMinute);

  return start <= end;
};

export const compareTimeForPriorityEndTime = (startTime: string, endTime: string) => {
  const [startHour, startMinute] = startTime.split(':');
  const [endHour, endMinute] = endTime.split(':');

  const start = parseInt(startHour + startMinute);
  const end = parseInt(endHour + endMinute);

  return start < end;
};
