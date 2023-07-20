import { AvailableScheduleOptionResponse } from 'src/types/availbleScheduleType';

import { client } from './axios';

/** 가능 시간 입력 선택지 조회 api */
export const availableScheduleOptionApi = (meetingId?: string) => {
  return client.get<AvailableScheduleOptionResponse>(`/meeting/${meetingId}/schedule`);
};
