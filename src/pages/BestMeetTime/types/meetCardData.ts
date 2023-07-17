import React, { Dispatch, SetStateAction, useState } from 'react';

export interface BestDataProps {
  carddata: {
    month: string;
    day: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    userNames: string[];
  };
  rank: number;
  chooseMeetime: Dispatch<SetStateAction<number>>;
  selected: number;
}

export interface BestMeetFinished {
  month: string;
  day: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  userNames: string[];
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
      userNames: string[];
    };
    otherDateTimes: {
      month: string;
      day: string;
      dayOfWeek: string;
      startTime: string;
      endTime: string;
      userNames: string[];
    }[];
  };
}
