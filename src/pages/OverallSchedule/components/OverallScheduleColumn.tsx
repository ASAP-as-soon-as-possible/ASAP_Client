import Slot from 'components/timetableComponents/parts/Slot';
import { ColumnStructure } from 'components/timetableComponents/types';
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

    const isClickedSlot = clickedSlot === slotId;
    return `
      background-color: ${isClickedSlot && colorLevel!==0 ? theme.colors.sub1 : COLOR[colorLevel]};
      cursor: ${colorLevel !== 0 ? 'pointer' : 'default'};
    `
  }

  return (
    <>
      {timeSlots.map((timeSlot) => {
        const { colorLevel = 0, userNames = [] } = availableSlotInfo.find((info) => info.time === timeSlot) ?? {};
        const slotId = `${date}/${timeSlot}`;

        return <Slot key={slotId} slotId={slotId} slotStyle={getTimeSlotStyle(colorLevel, slotId)} onClick={()=>onClickSlot(slotId, userNames)}/>;
      })}
    </>
  );
}

export default OverallScheduleColumn;
