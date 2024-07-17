import { Dispatch, SetStateAction } from 'react';

export interface BestDataProps {
  carddata:
    | {
        month: string;
        day: string;
        dayOfWeek: string;
        startTime: string;
        endTime: string;
        users: UserType[];
      }
    | undefined;
  rank: number;
  chooseMeetime: Dispatch<SetStateAction<number>>;
  selected: number;
}
interface UserType {
  id: number;
  name: string;
}
export interface BestMeetFinished {
  month: string;
  day: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  users: UserType[];
}

export interface DateTimeData {
  status: number;
  message: string;
  data: {
    memberCount: number;
    bestDateTime: {
      month: string;
      day: string;
      dayOfWeek: string;
      startTime: string;
      endTime: string;
      users: UserType[];
    };
    otherDateTimes: {
      month: string;
      day: string;
      dayOfWeek: string;
      startTime: string;
      endTime: string;
      users: UserType[];
    }[];
  };
}
