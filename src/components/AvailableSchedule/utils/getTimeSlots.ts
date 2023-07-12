import PreferTime from '../types/PreferTime';

const getTimeSlots = (preferTimes: PreferTime[]) => {
  const timeSlots = preferTimes.flatMap((obj) => {
    const { startTime, endTime } = obj;
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
    }

    return slots;
  });

  return timeSlots;
};

export default getTimeSlots;
