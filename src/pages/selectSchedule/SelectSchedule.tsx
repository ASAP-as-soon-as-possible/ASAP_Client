import { useState } from 'react';

import { SelectedSlotType, TimetableContext } from 'components/timetableComponents/context';
import { getAvailableTimes } from 'components/timetableComponents/utils';

import SelectionSlots from './components/SelectionSlots';
import Timetable from '../../components/timetableComponents/Timetable';

// api 연결 후 지울 것
export type DateType = {
  month: string | undefined;
  day: string | undefined;
  dayOfWeek: string | undefined;
};

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

function SelectSchedule() {
  const [startSlot, setStartSlot] = useState<string | undefined>(undefined);
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlotType>({});
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
        {({ date, timeSlots }) => <SelectionSlots date={date} timeSlots={timeSlots} />}
      </Timetable>
    </TimetableContext.Provider>
  );
}

export default SelectSchedule;
