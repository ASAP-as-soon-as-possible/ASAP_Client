import Slot from 'components/timetableComponents/parts/Slot';
import { ColumnStructure } from 'components/timetableComponents/types';
import { theme } from 'styles/theme';
import { TimeSlot } from 'utils/apis/useGetOverallSchedule';

interface OverallScheduleSlotsProps extends ColumnStructure {
  availableSlotInfo: TimeSlot[];
}

function OverallScheduleSlots({ date, timeSlots, availableSlotInfo }: OverallScheduleSlotsProps) {
  const getTimeSlotStyle = (colorLevel: number) => {
    const COLOR :{ [key : number]: string } = {
      0: 'transparent',
      1: theme.colors.level1,
      2: theme.colors.level2,
      3: theme.colors.level3,
      4: theme.colors.level4,
      5: theme.colors.level5,
    };
    return `
      background-color: ${COLOR[colorLevel]};
    `
  }


  return (
    <>
      {timeSlots.map((timeSlot) => {
        const colorLevel = (availableSlotInfo.find((info) => info.time === timeSlot))?.colorLevel ?? 0;
        const slotId = `${date}/${timeSlot}`;

        return <Slot key={slotId} slotId={slotId} slotStyle={getTimeSlotStyle(colorLevel)}/>;
      })}
    </>
  );
}

export default OverallScheduleSlots;
