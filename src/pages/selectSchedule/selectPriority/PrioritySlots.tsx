import Slot from '../../../components/timetableComponents/parts/Slot';
import { theme } from 'styles/theme';
import { useTimetableContext } from '../../../components/timetableComponents/context';

interface SelectionSlotsProps {
  date: string;
  timeSlots: string[];
}

function PrioritySlots({ date, timeSlots }: SelectionSlotsProps) {
  const { selectedSlots } = useTimetableContext();
  const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
    ([, slot]) => slot.date === date,
  );

  const getPrioritySlotStyle = (selectedEntryId?: number, priority?: number) => {
    const isSelectedSlot = selectedEntryId !== undefined;
    const slotColor =
      priority === 1
        ? theme.colors.main1
        : priority === 2
          ? theme.colors.main2
          : priority === 3
            ? theme.colors.main3
            : theme.colors.grey6;

    return `
        ${isSelectedSlot ? `background-color:${slotColor}` : `background-color: transparent`}
    `;
  };

  return (
    <>
      {timeSlots.map((timeSlot) => {
        const belongingEntry = selectedSlotsPerDate.find(
          ([, { startSlot, endSlot }]) => timeSlot >= startSlot && timeSlot <= endSlot,
        );
        const selectedEntryId = belongingEntry ? parseInt(belongingEntry[0]) : undefined;
        const slotId = `${date}/${timeSlot}`;
        const priority =
          selectedEntryId !== undefined ? selectedSlots[selectedEntryId].priority : 0;

        return (
          <Slot
            key={slotId}
            slotId={slotId}
            slotStyle={getPrioritySlotStyle(selectedEntryId, priority)}
          />
        );
      })}
    </>
  );
}

export default PrioritySlots;
