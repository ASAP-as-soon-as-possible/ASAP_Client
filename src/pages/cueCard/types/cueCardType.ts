export interface CueCardDataType {
  title: string;
  place: 'ONLINE' | 'OFFLINE' | 'UNDEFINED';
  placeDetail: string;
  month: string;
  day: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  hostName: string;
  userNames: string[];
  additionalInfo: string;
}

export interface CueCardResponse {
  status: number;
  message: string;
  data: CueCardDataType;
}
