import Slot from 'components/common/timetableComponents/parts/Slot';
import { ColumnStructure } from 'components/common/timetableComponents/types';
import { theme } from 'styles/theme';
import { TimeSlot } from 'utils/apis/useGetOverallSchedule';

import { useSlotClick } from '../hooks/useSlotClick';

interface OverallScheduleColumnProps extends ColumnStructure {
  availableSlotInfo: TimeSlot[];
}

function OverallScheduleColumn({ date, timeSlots, availableSlotInfo }: OverallScheduleColumnProps) {

  const { clickedSlot, onClickSlot } = useSlotClick();

  const getTimeSlotStyle = (colorLevel: number, slotId:string) => {
    const COLOR :{ [key : number]: string } = {
      0: 'transparent',
      1: theme.colors.level1,
      2: theme.colors.level2,
      3: theme.colors.level3,
      4: theme.colors.level4,
      5: theme.colors.level5,
    };

    /**
     * 종합일정 시간표 스타일링
     * 1. border-top: 선택된 시간이라면 none, 선택되지 않은 시간이라면 30분 단위는 점선, 1시간 단위는 실선
     * 2. background-color: 선택된 시간이라면 colorLevel에 따른 색상
     */
    const borderTopStyle = slotId.endsWith(':30') ? 'dashed' : 'solid';
    const borderTop = `1px ${borderTopStyle} ${theme.colors.grey7} `;
    const isClickedSlot = clickedSlot === slotId;
    const backgroundColor = isClickedSlot && colorLevel !== 0 ? theme.colors.sub1 : COLOR[colorLevel];

    return `
      border-top: ${borderTop};
      background-color: ${backgroundColor};
      cursor: ${colorLevel !== 0 ? 'pointer' : 'default'};
    `
  }

  return (
    <>
      {timeSlots.map((timeSlot) => {
        const { colorLevel = 0, userNames = [] } = availableSlotInfo.find((info) => info.time === timeSlot) ?? {};
        const slotId = `${date}/${timeSlot}`;

        return <Slot key={slotId} customSlotStyle={getTimeSlotStyle(colorLevel, slotId)} onClick={()=>onClickSlot(slotId, userNames)}/>;
      })}
    </>
  );
}

export default OverallScheduleColumn;
