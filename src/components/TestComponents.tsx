import { useEffect, useState } from 'react';

import { HostAvailableSchduleRequestType } from 'src/types/createAvailableSchduleType';
import styled from 'styled-components';
import { hostAvailableApi } from 'utils/apis/createHostAvailableSchedule';

const TestComponents = () => {
  const [apiData, setApiData] = useState<HostAvailableSchduleRequestType[]>([
    {
      id: '1',
      month: '07',
      day: '06',
      dayOfWeek: '목',
      startTime: '09:00',
      endTime: '11:00',
      priority: 1,
    },
  ]);
  const meetingId = 'MTEy';

  console.log(apiData);
  const apiTest = async () => {
    try {
      const { data } = await hostAvailableApi(meetingId, apiData);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  apiTest();
  useEffect(() => {}, []);

  return <TestComponentsWrapper>test</TestComponentsWrapper>;
};

const TestComponentsWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  color: white;
`;

export default TestComponents;
