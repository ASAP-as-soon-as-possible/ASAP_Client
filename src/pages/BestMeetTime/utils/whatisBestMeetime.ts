import { DateTimeData } from '../types/meetCardData';

export const whatisBestMeetime = (bestTimeData: DateTimeData, rank: number) => {
  let dataobj;
  if (rank === 0) {
    dataobj = bestTimeData.data.bestDateTime;
  } else if (rank === 1) {
    dataobj = bestTimeData.data.otherDateTimes[0];
  } else if (rank === 2) {
    dataobj = bestTimeData.data.otherDateTimes[1];
  }

  return dataobj;
};
