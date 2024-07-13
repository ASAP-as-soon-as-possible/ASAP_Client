import Text from 'components/atomComponents/Text';
import { ColumnStructure } from 'components/timetableComponents/types';
import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import { theme } from 'styles/theme';

import Slot from '../../../../components/timetableComponents/parts/Slot';

function PriorityColumn({ date, timeSlots }: ColumnStructure) {
  const { selectedSlots } = useSelectContext();

  const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
    ([, slot]) => slot.date === date,
  );

  const changePriorityValue = (priority: number) => {
    switch (priority) {
      case 3:
        return 1;
      case 2:
        return 2;
      case 1:
        return 3;
      default:
        throw Error(`올바르지않은 priority ${priority}`);
    }
  };

  const getPriorityColumnStyle = (priority: number, selectedEntryId?: number | null) => {
    const isSelectedSlot = selectedEntryId;
    const slotColor =
      priority === 3
        ? theme.colors.main1
        : priority === 2
          ? theme.colors.main2
          : priority === 1
            ? theme.colors.main3
            : theme.colors.grey6;

    return `
        ${
          isSelectedSlot !== null
            ? `background-color:${slotColor}`
            : `background-color: transparent`
        }
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

        const selectedEntryId = belongingEntry ? parseInt(belongingEntry[0]) : null;
        const slotId = `${date}/${timeSlot}`;
        const priority = selectedEntryId ? selectedSlots[selectedEntryId].priority : 0;

        return (
          <Slot
            key={slotId}
            slotId={slotId}
            slotStyle={getPriorityColumnStyle(priority, selectedEntryId)}
          >
            <Text font="body1" color={theme.colors.white}>
              {isFirstSlot && priority !== 0 ? changePriorityValue(priority) : ''}
            </Text>
          </Slot>
        );
      })}
    </>
  );
}

export default PriorityColumn;
