import { PreferTime } from '../types/AvailableScheduleType';

const getTimeSlots = (preferTimes: PreferTime[]) => {
  const timeSlots = preferTimes.flatMap((obj) => {
    const { startTime, endTime } = obj;
    if (startTime === '' || endTime === '') return;
    const slots = [];
    let currentTime = startTime;

    while (currentTime !== endTime) {
      slots.push(currentTime);
      const [hour, minute] = currentTime.split(':');
      const date = new Date();
      date.setHours(Number(hour));
      date.setMinutes(Number(minute));
      date.setMinutes(date.getMinutes() + 30);
      currentTime = `${String(date.getHours()).padStart(2, '0')}:${String(
        date.getMinutes(),
      ).padStart(2, '0')}`;

      currentTime = currentTime === '00:00' ? '24:00' : currentTime;
    }
    return slots;
  });

  return timeSlots;
};

export default getTimeSlots;
