import styled from 'styled-components';

import { ColumnProps } from '../types/AvailableScheduleType';

const Column = (props: ColumnProps) => {
  const {
    timeSlot,
    $isHalf,
    $isEmpty,
    $isFirstRow,
    $isFirstColumn,
    $isLastColumn,
    EmptyRange,
    $isLastofValidDate,
    $isSelected,
    $priorityColorInfo,
    $isStartTimeofPrioritySlot,
  } = props;
  console.log($priorityColorInfo);
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
    />
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
  $isSelected: boolean;
  $priorityColorInfo: string;
  $isStartTimeofPrioritySlot: boolean;
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

  border-left: ${({ theme, $isFirstRow }) =>
    $isFirstRow ? `0.1rem solid ${theme.colors.grey7}` : 'none'};

  background-color: ${({ $priorityColorInfo }) => $priorityColorInfo};
  background-color: ${({ $isStartTimeofPrioritySlot, $priorityColorInfo, theme }) =>
    $isStartTimeofPrioritySlot && $priorityColorInfo !== theme.colors.grey6
      ? '#ff0000'
      : undefined};

  width: 4.4rem;
  height: 1.2rem;
`;
