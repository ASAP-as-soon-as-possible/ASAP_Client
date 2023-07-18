interface PreferTimes {
  startTime: string;
  endTime: string;
}

export interface CreateMeetingRequest {
  title: string;
  availableDates: string[];
  preferTimes: PreferTimes[];
  place: string;
  placeDetail: string;
  duration: string;
  name: string;
  password: string;
  additionalInfo: string;
}

export interface CreateMeetingResponse {
  data: {
    url: string;
    accessToken: string;
  };
}
