import { AxiosResponse } from 'axios';
import {
  HostAvailableSchduleRequestType,
  HostAvailableScheduleResponseType,
  UserAvailableScheduleResponseType,
  UserAvailableScheduleRequestType,
} from 'src/types/createAvailableSchduleType';

import { authClient, client } from './axios';

export const hostAvailableApi = (meetingId: string, reqBody: HostAvailableSchduleRequestType[]) => {
  return authClient.post<AxiosResponse<HostAvailableScheduleResponseType>>(
    `/user/host/${meetingId}/time`,
    reqBody,
  );
};

export const userAvailableApi = (
  meetingId: string,
  reqBody: UserAvailableScheduleRequestType[],
) => {
  return client.post<AxiosResponse<UserAvailableScheduleResponseType>>(`/user/${meetingId}/time`, {
    reqBody,
  });
};
