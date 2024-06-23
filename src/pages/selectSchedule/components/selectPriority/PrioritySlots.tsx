import Text from 'components/atomComponents/Text';
import { ColumnStructure } from 'components/timetableComponents/types';
import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import { theme } from 'styles/theme';

import Slot from '../../../../components/timetableComponents/parts/Slot';

function PrioritySlots({ date, timeSlots }: ColumnStructure) {
  const { selectedSlots } = useSelectContext();
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

        let isFirstSlot = false;
        if (belongingEntry !== undefined) {
          if (selectedSlots[parseInt(belongingEntry[0])].startSlot === timeSlot) {
            isFirstSlot = true;
          }
        }

        const selectedEntryId = belongingEntry ? parseInt(belongingEntry[0]) : undefined;
        const slotId = `${date}/${timeSlot}`;
        const priority =
          selectedEntryId !== undefined ? selectedSlots[selectedEntryId].priority : 0;

        return (
          <Slot
            key={slotId}
            slotId={slotId}
            slotStyle={getPrioritySlotStyle(selectedEntryId, priority)}
          >
            <Text font="body1" color={theme.colors.white}>
              {isFirstSlot && priority !== 0 ? priority : ''}
            </Text>
          </Slot>
        );
      })}
    </>
  );
}

export default PrioritySlots;
