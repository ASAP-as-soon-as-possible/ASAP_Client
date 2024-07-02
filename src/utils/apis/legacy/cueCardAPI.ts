import { client } from '../axios';

export const cueCardApi = (meetingId: string) => {
  return client.get(`/meeting/${meetingId}/card`);
};
