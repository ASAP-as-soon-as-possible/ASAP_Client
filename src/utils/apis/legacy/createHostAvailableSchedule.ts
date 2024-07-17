import {
  HostAvailableSchduleRequestType,
  HostAvailableScheduleResponseType,
  UserAvailableScheduleRequestType,
  UserAvailableScheduleResponseType,
} from 'src/types/createAvailableSchduleType';

import { authClient, client } from '../axios';

export const hostAvailableApi = (
  meetingId: string,
  reqBody: (HostAvailableSchduleRequestType | null)[],
) => {
  return authClient.post<HostAvailableScheduleResponseType>(
    `/user/host/${meetingId}/time`,
    reqBody,
  );
};

export const userAvailableApi = (meetingId: string, reqBody: UserAvailableScheduleRequestType) => {
  return client.post<UserAvailableScheduleResponseType>(`/user/${meetingId}/time`, reqBody);
};
