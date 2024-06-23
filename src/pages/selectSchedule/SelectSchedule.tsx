import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import TitleComponents from 'components/moleculesComponents/TitleComponents';
import { getAvailableTimes } from 'components/timetableComponents/utils';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

import Description from './components/Description';
import SelectScheduleTable from './components/SelectScheduleTable';
import { ScheduleStepContext } from './context';
import { ScheduleStepType } from './types';

function SelectSchedule() {
  const [scheduleStep, setScheduleStep] = useState<ScheduleStepType>('selectTimeSlot');
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
    <ScheduleStepContext.Provider value={{ scheduleStep, setScheduleStep }}>
      {!isLoading &&
        data && (
          <SelectScheduleWrapper>
            <Header position="schedule" />
            {scheduleStep === 'selectTimeSlot' && (
              <Description
                duration={data.duration}
                place={data.place}
                placeDetail={data.placeDetail}
              />
            )}
            <TitleComponents
              main={titles[scheduleStep].main}
              sub={titles[scheduleStep].sub}
              padding={scheduleStep === 'selectTimeSlot' ? `0 0 2.6rem` : `4.4rem 0 3.2rem 0`}
            />
            <SelectScheduleTable
              timeSlots={getAvailableTimes(data.preferTimes[0])}
              availableDates={data.availableDates}
            />
          </SelectScheduleWrapper>
        )}
    </ScheduleStepContext.Provider>
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
