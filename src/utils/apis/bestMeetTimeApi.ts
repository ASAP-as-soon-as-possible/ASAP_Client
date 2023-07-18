import { BestMeetTimeResponse, BestMeetTimeRequest } from 'src/types/bestMeetTimeType';

import { client } from './axios';

export const BestMeetTimeApi = (
  BestMeetTimeRequest: BestMeetTimeRequest,
  meetingId: string,
  token: string,
) => {
  return client.post<BestMeetTimeResponse>(`/meeting/${meetingId}/confirm`, BestMeetTimeRequest, {
    headers: {
      Authorization: `[Bearer]${token}`,
    },
  });
};
