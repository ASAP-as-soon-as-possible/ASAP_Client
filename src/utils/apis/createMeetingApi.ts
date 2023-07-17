import { CreateMeetingRequest, CreateMeetingResponse } from 'src/types/createMeetingType';

import { unAuthorizedAxios } from './axios';

export const createMeetingApi = (CreateMeetingRequest: CreateMeetingRequest) => {
  return unAuthorizedAxios.post<CreateMeetingResponse>(`/meeting`, CreateMeetingRequest);
};
