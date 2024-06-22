import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import { DateType } from 'components/timetableComponents/types';
import { getAvailableTimes } from 'components/timetableComponents/utils';
import styled from 'styled-components';

import Description from './components/Description';
import SelectScheduleTable from './components/SelectScheduleTable';
import { Step } from './types';

/***** api 연결 후 지울 것*****/

const availableDates: DateType[] = [
  {
    month: '6',
    day: '20',
    dayOfWeek: '목',
  },
  {
    month: '6',
    day: '21',
    dayOfWeek: '금',
  },
  {
    month: '6',
    day: '22',
    dayOfWeek: '토',
  },
  {
    month: '6',
    day: '23',
    dayOfWeek: '일',
  },
];

export type SlotType = {
  startTime: string;
  endTime: string;
};

const preferTimes: SlotType = {
  startTime: '06:00',
  endTime: '24:00',
};

const timeSlots = getAvailableTimes(preferTimes);
const duration = 'HALF';
const place = 'ONLINE';
const placeDetail = '구글미트';
/***** api 연결 후 지울 것*****/

function SelectSchedule() {
  const [step, setStep] = useState<Step>('selectTimeSlot');

  return (
    <SelectScheduleWrapper>
      <Header position="schedule" setSelectScheduleStep={setStep} />
      <Description duration={duration} place={place} placeDetail={placeDetail} />
      <SelectScheduleTable step={step} timeSlots={timeSlots} availableDates={availableDates} />
    </SelectScheduleWrapper>
  );
}

export default SelectSchedule;

const SelectScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
