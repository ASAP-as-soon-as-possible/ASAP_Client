import { clickedTimeSlotAtom, timeSlotUserNameAtom } from 'atoms/atom';
import { ColumnProps } from 'components/legacy/scheduleComponents/types/AvailableScheduleType';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import { filterUserNames } from '../utils/setUserNames';

const Column = (props: ColumnProps) => {
  const setTimeSlotUserName = useSetRecoilState(timeSlotUserNameAtom);
  const [clickedTimeSlot, setClickedTimeSlot] = useRecoilState(clickedTimeSlotAtom);

  const {
    timeSlot,
    rowIdx,
    $isHalf,
    $isEmpty,
    $isFirstRow,
    $isFirstColumn,
    $isLastColumn,
    EmptyRange,
    $isLastofValidDate,
    $isSelected,
    priority,
    $priorityColorInfo,
    $isStartTimeofPrioritySlot,
    scheduleType,
    userNames,
    $slotColorLevel,
  } = props;

  const handleSlotClick = () => {
    setTimeSlotUserName(userNames);
    setClickedTimeSlot(rowIdx + timeSlot);
  };

  return (
    <ColumnWrapper
      $isDateEmpty={$isEmpty}
      $isTimeSlotEmpty={EmptyRange ? EmptyRange.includes(timeSlot) : undefined}
      $isFirstRow={$isFirstRow}
      $isHalf={$isHalf}
      $isFirstColumn={$isFirstColumn}
      $isLastColumn={$isLastColumn}
      $isLastOfValidDate={$isLastofValidDate}
      $is18ofEmptyTimeSlot={EmptyRange && timeSlot === '18:00'}
      $isSelected={$isSelected}
      $priorityColorInfo={$priorityColorInfo}
      $isStartTimeofPrioritySlot={$isStartTimeofPrioritySlot}
      $slotColorLevel={$slotColorLevel}
      onClick={handleSlotClick}
      $isClicked={clickedTimeSlot === rowIdx + timeSlot}
    >
      {$isStartTimeofPrioritySlot &&
      $priorityColorInfo !== theme.colors.grey6 &&
      scheduleType === 'priority' ? (
        <PriorityNumber>{priority}</PriorityNumber>
      ) : (
        undefined
      )}
    </ColumnWrapper>
  );
};

export default Column;

interface ColumnWrapperProps {
  $isDateEmpty: boolean;
  $isTimeSlotEmpty: boolean | undefined;
  $isHalf: boolean;
  $isFirstRow: boolean;
  $isFirstColumn: boolean;
  $isLastColumn: boolean;
  $isLastOfValidDate: boolean;
  $is18ofEmptyTimeSlot: boolean | undefined;
  $isSelected?: boolean;
  $priorityColorInfo?: string;
  $isStartTimeofPrioritySlot?: boolean;
  $slotColorLevel?: number;
  $isClicked: boolean;
}

const ColumnWrapper = styled.div<ColumnWrapperProps>`
  border-top: ${({ theme, $isFirstColumn, $is18ofEmptyTimeSlot, $isDateEmpty }) =>
    $isFirstColumn || ($is18ofEmptyTimeSlot && !$isDateEmpty)
      ? `0.1rem solid ${theme.colors.grey7}`
      : 'none'};
  border-right: ${({ theme, $isDateEmpty, $isTimeSlotEmpty, $isLastOfValidDate }) =>
    $isTimeSlotEmpty && !$isDateEmpty && !$isLastOfValidDate
      ? 'none'
      : `0.1rem solid ${theme.colors.grey7}`};
  border-bottom: ${({ $isHalf, $isDateEmpty, $isTimeSlotEmpty, $isLastColumn, theme }) =>
    (($isDateEmpty || $isTimeSlotEmpty) && !$isLastColumn) || !$isHalf
      ? 'none'
      : `0.1rem solid ${theme.colors.grey7}`};

  border-bottom: ${({ $isSelected }) => $isSelected && 'none'};

  border-left: ${({ $isFirstRow }) =>
    $isFirstRow ? `0.1rem solid ${theme.colors.grey7}` : 'none'};

  background-color: ${({ theme, $isDateEmpty, $isSelected, $priorityColorInfo }) =>
    $isSelected ? $priorityColorInfo : $isDateEmpty ? theme.colors.grey9 : 'none'};
  background-color: ${({ theme, $slotColorLevel }) =>
    $slotColorLevel === 1
      ? theme.colors.level1
      : $slotColorLevel === 2
        ? theme.colors.level2
        : $slotColorLevel === 3
          ? theme.colors.level3
          : $slotColorLevel === 4
            ? theme.colors.level4
            : $slotColorLevel === 5
              ? theme.colors.level5
              : 'none'};

  background-color: ${({ theme, $isSelected, $isClicked }) =>
    $isSelected && $isClicked && theme.colors.sub1};

  width: 4.4rem;
  height: 1.5rem;
`;

const PriorityNumber = styled.span`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.body1};
  position: relative;
`;
