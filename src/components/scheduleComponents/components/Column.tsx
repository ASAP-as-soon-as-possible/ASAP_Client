import styled from 'styled-components';
import { theme } from 'styles/theme';

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
    priority,
    $priorityColorInfo,
    $isStartTimeofPrioritySlot,
    scheduleType,
  } = props;

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
    >
      {$isStartTimeofPrioritySlot &&
      $priorityColorInfo !== theme.colors.grey6 &&
      scheduleType === 'priority' ? (
        <PriorityNumber>{priority === 1 ? 3 : priority === 2 ? 2 : 1}</PriorityNumber>
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
  $isSelected: boolean;
  $priorityColorInfo?: string;
  $isStartTimeofPrioritySlot?: boolean;
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

  width: 4.4rem;
  height: 1.2rem;
`;

const PriorityNumber = styled.span`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.body1};
  position: relative;
`;
