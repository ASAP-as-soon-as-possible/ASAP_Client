import { ColumnStructure } from 'components/common/timetableComponents/types';
import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import { theme } from 'styles/theme';

import useSlotSeletion from './hooks/useSlotSelection';

import Slot from '../../../../components/common/timetableComponents/parts/Slot';

function SelectionColumn({ date, timeSlots }: ColumnStructure) {
  const { selectedSlots } = useSelectContext();

  const selectedSlotsPerDate = Object.entries(selectedSlots).filter(
    ([, slot]) => slot.date === date,
  );
  //test
  const { startSlot, onClickSlot } = useSlotSeletion();

  const getTimeSlotStyle = (slotId: string, selectedEntryId?: number) => {
    const isStartSlot = slotId === startSlot;
    const isSelectedSlot = selectedEntryId !== undefined;
    const isFirstSlot =
      selectedEntryId !== undefined &&
      selectedSlots[selectedEntryId].startSlot === slotId.split('/')[3];

    /**
     * 가능시간 입력 시간표 스타일링
     * 1. border-top: 30분 단위는 dashed, 1시간 단위는 solid
     * 2. border: 탭투탭 시 startSlot에 dashed
     * 3. background-color: 선택된 시간이라면 main1, 선택된 시간이 아니면 transparent;
     */
    const borderStyle = slotId.endsWith(':30') ? 'dashed' : 'solid';
    const border = isStartSlot && `1px dashed ${theme.colors.main5}`;
    const borderTop = `1px ${borderStyle} ${theme.colors.grey7}`;
    const background = isSelectedSlot ? theme.colors.main1 : 'transparent';

    return `
      cursor:pointer;
      border-top: ${borderTop};
      ${isStartSlot && `border: ${border}`};
      background: ${background};
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
            customSlotStyle={getTimeSlotStyle(slotId, selectedEntryId)}
            onClick={() => onClickSlot(slotId, selectedEntryId)}
          />
        );
      })}
    </>
  );
}

export default SelectionColumn;
