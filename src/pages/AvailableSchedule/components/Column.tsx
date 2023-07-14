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
  border-left: ${({ theme, $isFirstRow }) =>
    $isFirstRow ? `0.1rem solid ${theme.colors.grey7}` : 'none'};

  background-color: ${({ theme, $isDateEmpty }) => ($isDateEmpty ? theme.colors.grey9 : 'none')};
  width: 4.4rem;
  height: 1.2rem;
`;
