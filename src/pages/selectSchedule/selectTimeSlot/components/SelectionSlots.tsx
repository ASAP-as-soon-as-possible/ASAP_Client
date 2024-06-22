import { useTimetableContext } from '../../../../components/timetableComponents/context';
import Slot from '../../../../components/timetableComponents/parts/Slot';

interface SelectionSlotsProps {
  date: string;
  timeSlots: string[];
}

function SelectionSlots({ date, timeSlots }: SelectionSlotsProps) {
  const { selectedSlots } = useTimetableContext();
  const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
    ([, slot]) => slot.date === date,
  );

  return (
    <>
      {timeSlots.map((timeSlot) => {
        const belongingEntry = selectedSlotsPerDate.find(
          ([, { startSlot, endSlot }]) => timeSlot >= startSlot && timeSlot <= endSlot,
        );

        const selectedEntryId = belongingEntry ? parseInt(belongingEntry[0]) : undefined;

        return (
          <Slot
            key={`${date}/${timeSlot}`}
            slot={`${date}/${timeSlot}`}
            selectedEntryId={selectedEntryId}
          />
        );
      })}
    </>
  );
}

export default SelectionSlots;
