import { AvailableScheduleOptionResponse } from 'src/types/availbleScheduleType';
import { OverallScheduleResponse } from 'src/types/overallScheduleType';

import { authClient, client } from './axios';

/** 가능 시간 입력 선택지 조회 api */
export const availbleScheduleOptionApi = (meetingId?: string) => {
  const data = client.get<AvailableScheduleOptionResponse>(`/meeting/${meetingId}/schedule`);
  return client.get<AvailableScheduleOptionResponse>(`/meeting/${meetingId}/schedule`);
};

/** 종합 일정 시간표 조회 api */
export const overallScheduleApi = (meetingId?: string) => {
  return authClient.get<OverallScheduleResponse>(`/meeting/${meetingId}/timetable`);
};
