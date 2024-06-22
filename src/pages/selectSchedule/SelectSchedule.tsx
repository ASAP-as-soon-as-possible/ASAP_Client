import { ReactNode, useState } from 'react';

import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import Timetable from 'components/timetableComponents/Timetable';
import { DateType, TimetableStructure } from 'components/timetableComponents/types';
import { getAvailableTimes } from 'components/timetableComponents/utils';

import PrioritySlots from './selectPriority/PrioritySlots';
import SelectionSlots from './selectTimeSlot/SelectionSlots';

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

type Step = 'selectTimeSlot' | 'selectPriority';

type StepSlotsType = { [key in Step]: (props: TimetableStructure) => ReactNode };

function SelectSchedule() {
  const [step, setStep] = useState<Step>('selectPriority');
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({
    0: {
      date: '6/20/목',
      startSlot: '15:00',
      endSlot: '20:00',
      priority: 1,
    },
  });

  const stepSlots: StepSlotsType = {
    selectTimeSlot: ({ date, timeSlots }: TimetableStructure) => (
      <SelectionSlots date={date} timeSlots={timeSlots} />
    ),
    selectPriority: ({ date, timeSlots }: TimetableStructure) => (
      <PrioritySlots date={date} timeSlots={timeSlots} />
    ),
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
      <button style={{ color: 'white' }} onClick={() => setStep('selectPriority')}>
        다음으로
      </button>
      <button style={{ color: 'white' }} onClick={() => setStep('selectTimeSlot')}>
        이전으로
      </button>
    </TimetableContext.Provider>
  );
}

export default SelectSchedule;
