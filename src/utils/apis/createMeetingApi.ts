import { CreateMeetingRequest, CreateMeetingResponse } from 'src/types/createMeetingType';

import { client } from './axios';

export const createMeetingApi = (CreateMeetingRequest: CreateMeetingRequest) => {
  return client.post<CreateMeetingResponse>(`/meeting`, CreateMeetingRequest);
};
