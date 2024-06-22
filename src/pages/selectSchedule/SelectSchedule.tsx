import Button from 'components/atomComponents/Button';
import { DateType } from 'components/timetableComponents/types';
import Description from './components/Description';
import Header from 'components/moleculesComponents/Header';
import SelectScheduleTable from './components/SelectScheduleTable';
import { Step } from './types';
import TitleComponents from 'components/moleculesComponents/TitleComponents';
import { getAvailableTimes } from 'components/timetableComponents/utils';
import styled from 'styled-components';
import { useState } from 'react';

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
const place = 'OFFLINE';
const placeDetail = undefined;
/***** api 연결 후 지울 것*****/

function SelectSchedule() {
  const [step, setStep] = useState<Step>('selectTimeSlot');

  interface TitlesType {
    [key: string]: {
      main: string;
      sub?: string;
    };
  }
  const titles: TitlesType = {
    selectTimeSlot: {
      main: '가능한 시간대를 등록해주세요',
      sub: '시작시간과 종료시간을 터치하여 블럭을 생성해주세요',
    },
    selectPriority: {
      main: '우선순위를 입력해주세요',
    },
  };

  return (
    <SelectScheduleWrapper>
      <Header position="schedule" setSelectScheduleStep={setStep} />
      {step === 'selectTimeSlot' && (
        <Description duration={duration} place={place} placeDetail={placeDetail} />
      )}
      <TitleComponents
        main={titles[step].main}
        sub={titles[step].sub}
        padding={step === 'selectTimeSlot' ? `0 0 2.6rem` : `4.4rem 0 3.2rem 0`}
      />
      <SelectScheduleTable
        step={step}
        setStep={setStep}
        timeSlots={timeSlots}
        availableDates={availableDates}
      />
    </SelectScheduleWrapper>
  );
}

export default SelectSchedule;

const SelectScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16.4rem;
`;
