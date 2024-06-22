import { ReactNode, useState } from 'react';

import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import Timetable from 'components/timetableComponents/Timetable';
import { DateType, TimetableStructure } from 'components/timetableComponents/types';
import { getAvailableTimes } from 'components/timetableComponents/utils';

import SelectionSlots from './selectTimeSlot/components/SelectionSlots';

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
/***** api 연결 후 지울 것*****/

interface SelectScheduleProps {
  step: 'selectTimeSlot' | 'selectPriority';
}

type StepSlotsType = {
  [key in SelectScheduleProps['step']]: (props: TimetableStructure) => ReactNode
};

function SelectSchedule({ step }: SelectScheduleProps) {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({});

  const stepSlots: StepSlotsType = {
    selectTimeSlot: ({ date, timeSlots }: TimetableStructure) => (
      <SelectionSlots date={date} timeSlots={timeSlots} />
    ),
    selectPriority: ({ date, timeSlots }: TimetableStructure) => <div>priority</div>,
  };

  return (
    <TimetableContext.Provider
      value={{
        startSlot,
        setStartSlot,
        selectedSlots,
        setSelectedSlots,
      }}
    >
      <Timetable timeSlots={timeSlots} availableDates={availableDates}>
        {stepSlots[step]}
      </Timetable>
    </TimetableContext.Provider>
  );
}

export default SelectSchedule;
