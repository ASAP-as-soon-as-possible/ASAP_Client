import React, { SetStateAction, Dispatch } from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import { MeetingInfo } from '../types/useFunnelInterface';

interface PropTypes {
  time: string;
  type: string;

  setMeetingInfo: Dispatch<SetStateAction<MeetingInfo>>;
}

function StartDropDown({ time, type, setMeetingInfo }: PropTypes) {
  const getTime = (time: string) => {
    if (type == 'start') {
      setMeetingInfo((prev) => ({
        ...prev,
        preferTimes: [{ startTime: time, endTime: prev.preferTimes[0].endTime }],
      }));
    } else if (type == 'end') {
      setMeetingInfo((prev) => ({
        ...prev,
        preferTimes: [{ startTime: prev.preferTimes[0].startTime, endTime: time }],
      }));
    }
  };

  return (
    <TimeDropDownWrapper onClick={() => getTime(time)}>
      <Text font="button1" color={theme.colors.white}>
        {time}
      </Text>
    </TimeDropDownWrapper>
  );
}

const TimeDropDownWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey7};
  background: ${({ theme }) => theme.colors.grey6};
  cursor: pointer;
  padding: 1rem;
  height: 4.8rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey7};
  }
`;
export default StartDropDown;
