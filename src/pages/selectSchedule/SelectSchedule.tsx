import { useState } from 'react';

import useModalState from 'components/common/Modal/hooks/useModalState';
import Header from 'components/common/moleculesComponents/Header';
import TitleComponents from 'components/common/moleculesComponents/TitleComponents';
import { getAvailableTimes } from 'components/common/timetableComponents/utils';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetTimetable } from 'utils/apis/useGetTimetable';

import Description from './components/Description';
import SelectScheduleTable from './components/SelectScheduleTable';
import OnboardingLottie from './components/selectTimeSlot/OnboardingLottie';
import { ScheduleStepContext } from './contexts/useScheduleStepContext';
import { ScheduleStepType } from './types';
import { TITLES } from './utils';

function SelectSchedule() {
  const [scheduleStep, setScheduleStep] = useState<ScheduleStepType>('selectTimeSlot');
  const { meetingId } = useParams();
  const { data, isLoading } = useGetTimetable(meetingId);
  const { isOpen: isLottieOpen, onClose: onLottieClose } = useModalState(true);

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
              {isLottieOpen && <OnboardingLottie onClose={onLottieClose} />}
              <SelectScheduleTable
                timeSlots={getAvailableTimes({ startTime: '06:00', endTime: '24:00' })}
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
  width: 100%;
  margin-bottom: 16.4rem;
`;
