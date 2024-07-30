import { Dispatch, SetStateAction } from 'react';

export interface MeetingInfo {
  title: string;
  availableDates: string[];
  place: string;
  placeDetail: string;
  duration: string;
  name: string;
  password: string;
  additionalInfo: string;
}
export interface PreferTimeInfo {
  title: string;
  startTime: string;
  endTime: string;
  btnState: boolean;
}

export interface FunnelProps {
  meetingInfo: MeetingInfo;
  setMeetingInfo: Dispatch<SetStateAction<MeetingInfo>>;
  setStep: Dispatch<SetStateAction<number>>;
}
