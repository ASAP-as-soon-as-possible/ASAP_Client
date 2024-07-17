import { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import TitleComponents from 'components/moleculesComponents/TitleComponents';
import { getAvailableTimes } from 'components/timetableComponents/utils';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

import Description from './components/Description';
import SelectScheduleTable from './components/SelectScheduleTable';
import { ScheduleStepContext } from './contexts/useScheduleStepContext';
import { ScheduleStepType } from './types';
import { TITLES } from './utils';

function SelectSchedule() {
  const [scheduleStep, setScheduleStep] = useState<ScheduleStepType>('selectTimeSlot');
  const { meetingId } = useParams();
  const { data, isLoading } = useGetTimetable(meetingId);
  // 시간대 선택 단계가 없어질 것을 고려하여 상수값을 설정해놓음
  const PREFER_TIMES = { startTime: '06:00', endTime: '24:00' };

  return (
    <ScheduleStepContext.Provider value={{ scheduleStep, setScheduleStep }}>
      <SelectScheduleWrapper>
        <Header position="schedule" />
        {!isLoading &&
          data && (
            <>
              {scheduleStep === 'selectTimeSlot' && (
                <Description
                  duration={data.duration}
                  place={data.place}
                  placeDetail={data.placeDetail}
                />
              )}
              <TitleComponents
                main={TITLES[scheduleStep].main}
                sub={TITLES[scheduleStep].sub}
                padding={scheduleStep === 'selectTimeSlot' ? `0 0 2.6rem` : `4.4rem 0 3.2rem 0`}
              />
              <SelectScheduleTable
                timeSlots={getAvailableTimes(PREFER_TIMES)}
                availableDates={data.availableDates}
              />
            </>
          )}
      </SelectScheduleWrapper>
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
