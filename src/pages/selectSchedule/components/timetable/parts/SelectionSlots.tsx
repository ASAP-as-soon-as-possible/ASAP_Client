import Slot from './Slot';
import { SelectedSlotType } from '../context';

interface SelectionSlotsProps {
  date: string;
  timeSlots: string[];
  selectedSlots: SelectedSlotType;
}

function SelectionSlots({ date, timeSlots, selectedSlots }: SelectionSlotsProps) {
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
