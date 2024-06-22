import Description from './components/Description';
import Header from 'components/moleculesComponents/Header';
import SelectScheduleTable from './components/SelectScheduleTable';
import { Step } from './types';
import TitleComponents from 'components/moleculesComponents/TitleComponents';
import { getAvailableTimes } from 'components/timetableComponents/utils';
import styled from 'styled-components';
import { useGetTimetable } from 'utils/apis/useGetTimetable';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function SelectSchedule() {
  const [step, setStep] = useState<Step>('selectTimeSlot');
  const { meetingId } = useParams();
  const { data, isLoading } = useGetTimetable(meetingId);
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
    <>
      {!isLoading &&
        data && (
          <SelectScheduleWrapper>
            <Header position="schedule" setSelectScheduleStep={setStep} />
            {step === 'selectTimeSlot' && (
              <Description
                duration={data.duration}
                place={data.place}
                placeDetail={data.placeDetail}
              />
            )}
            <TitleComponents
              main={titles[step].main}
              sub={titles[step].sub}
              padding={step === 'selectTimeSlot' ? `0 0 2.6rem` : `4.4rem 0 3.2rem 0`}
            />
            <SelectScheduleTable
              step={step}
              setStep={setStep}
              timeSlots={getAvailableTimes(data.preferTimes[0])} // TODO: 시간대 선택이 없어지면서 preferTimes가 없어지면 이 부분을 수정해야함.
              availableDates={data.availableDates}
            />
          </SelectScheduleWrapper>
        )}
    </>
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
