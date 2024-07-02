import { ColumnStructure } from 'components/timetableComponents/types';
import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import { theme } from 'styles/theme';

import useSlotSeletion from './hooks/useSlotSelection';
import Slot from '../../../../components/timetableComponents/parts/Slot';

function SelectionColumn({ date, timeSlots }: ColumnStructure) {
  const { selectedSlots } = useSelectContext();
  const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
    ([, slot]) => slot.date === date,
  );

  const { startSlot, onClickSlot } = useSlotSeletion();

  const getTimeSlotStyle = (slotId: string, selectedEntryId?: number) => {
    const isStartSlot = slotId === startSlot;
    const isSelectedSlot = selectedEntryId !== undefined;

    return `
      cursor:pointer;
      ${isStartSlot && `border: 1px dashed ${theme.colors.main5}`};
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

        return (
          <Slot
            key={slotId}
            slotId={slotId}
            slotStyle={getTimeSlotStyle(slotId, selectedEntryId)}
            onClick={() => onClickSlot(slotId, selectedEntryId)}
          />
        );
      })}
    </>
  );
}

export default SelectionColumn;
