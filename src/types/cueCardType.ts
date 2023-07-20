export interface cueCardDataType {
  title: string;
  place: 'ONLINE' | 'OFFLINE' | 'UNDEFINED';
  placeDetail: string | null;
  month: string;
  day: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  hostName: string;
  userNames: string[];
  additionalInfo: string | null;
}

export interface cueCardResponse {
  status: number;
  message: string;
  data: cueCardDataType;
}
