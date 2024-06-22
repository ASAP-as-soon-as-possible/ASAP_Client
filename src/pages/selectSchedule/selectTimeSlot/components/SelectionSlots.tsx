import { theme } from 'styles/theme';

import { useTimetableContext } from '../../../../components/timetableComponents/context';
import Slot from '../../../../components/timetableComponents/parts/Slot';
import useSlotSeletion from '../hooks/useSlotSelection';

interface SelectionSlotsProps {
  date: string;
  timeSlots: string[];
}

function SelectionSlots({ date, timeSlots }: SelectionSlotsProps) {
  const { selectedSlots } = useTimetableContext();
  const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
    ([, slot]) => slot.date === date,
  );

  const { startSlot, onClickSlot } = useSlotSeletion();

  const getTimeSlotStyle = (slotId: string, selectedEntryId?: number) => {
    const isStartSlot = slotId === startSlot;
    const isSelectedSlot = selectedEntryId !== undefined;

    return `
      ${
        isStartSlot
          ? `border: 1px dashed ${theme.colors.main5}`
          : `border-top: 1px solid ${theme.colors.grey7}`
      };
      ${
        isSelectedSlot ? `background-color: ${theme.colors.main1}` : `background-color: transparent`
      };
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

        const slotStyle = getTimeSlotStyle(slotId, selectedEntryId);
        return (
          <Slot
            key={slotId}
            slotId={slotId}
            slotStyle={slotStyle}
            onClick={() => onClickSlot(slotId, selectedEntryId)}
          />
        );
      })}
    </>
  );
}

export default SelectionSlots;
