import { Dispatch, SetStateAction } from 'react';

export interface MeetingInfo {
    title: string;
    availableDates: string[];
    preferTimes: {
      startTime: string;
      endTime: string;
    }[];
    //undefined 왜 들어간거임?
    place: string | undefined;
    placeDetail: string;
    duration: string;
    name: string;
    password: string;
    additionalInfo: string;
}

export interface funnelProps {
  meetingInfo: MeetingInfo;
  setMeetingInfo: Dispatch<SetStateAction<MeetingInfo>>;
  setStep: Dispatch<SetStateAction<number>>;
}