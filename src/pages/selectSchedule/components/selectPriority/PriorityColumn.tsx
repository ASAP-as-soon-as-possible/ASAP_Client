import Text from 'components/common/atomComponents/Text';
import { ColumnStructure } from 'components/common/timetableComponents/types';
import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import { theme } from 'styles/theme';

import Slot from '../../../../components/common/timetableComponents/parts/Slot';

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
  const getPriorityColumnStyle = (
    slotId: string,
    priority: number,
    selectedEntryId: number | null,
  ) => {
    const isSelectedSlot = selectedEntryId !== null;

    const slotColor =
      priority === 3
        ? theme.colors.main1
        : priority === 2
          ? theme.colors.main2
          : priority === 1
            ? theme.colors.main3
            : theme.colors.grey6;

    /**
     * 우선순위 입력 스타일링
     * 1. border-top: 선택된 시간이라면 none, 선택되지 않은 시간이라면 30분 단위는 none, 1시간 단위는 실선
     * 2. background-color: 선택된 시간이라면 우선순위에 따른 slotColor
     */
    const borderTopStyle = slotId.endsWith(':30') ? 'none' : 'solid';
    const borderTop = isSelectedSlot ? 'none' : `1px ${borderTopStyle} ${theme.colors.grey7}`;
    const backgroundColor = isSelectedSlot ? slotColor : 'transparent';
    const height = '1.2rem';

    return `
        border-top: ${borderTop};
        background-color: ${backgroundColor};
        height: ${height};
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
        const priority = selectedEntryId !== null ? selectedSlots[selectedEntryId].priority : 0;

        return (
          <Slot
            key={slotId}
            customSlotStyle={getPriorityColumnStyle(slotId, priority, selectedEntryId)}
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
