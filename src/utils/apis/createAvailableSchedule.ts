import {
  AvailableSchduleRequestType,
  AvailableScheduleResponseType,
} from 'src/types/createAvailableSchduleType';

import { authClient } from './axios';

export const createAvailableApi = (meetingId: string) => {
  return authClient.post<AvailableScheduleResponseType>(`/user/host/${meetingId}/time`);
};
