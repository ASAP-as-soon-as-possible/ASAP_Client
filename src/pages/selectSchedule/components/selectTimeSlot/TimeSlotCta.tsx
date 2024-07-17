import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { useScheduleStepContext } from 'pages/selectSchedule/contexts/useScheduleStepContext';
import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import styled from 'styled-components';

function TimeSlotCta() {
  const { setScheduleStep } = useScheduleStepContext();
  const { selectedSlots } = useSelectContext();
  const isValidSelection = Object.keys(selectedSlots).length !== 0;
  return (
    <BtnDim>
      <Button
        typeState={isValidSelection ? 'primaryActive' : 'secondaryDisabled'}
        onClick={() => {
          setScheduleStep('selectPriority');
        }}
      >
        <Text font={'button2'}>다음</Text>
      </Button>
    </BtnDim>
  );
}

export default TimeSlotCta;

const BtnDim = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: end;
  justify-content: center;

  margin-top: 3rem;
  background: ${({ theme }) => theme.colors.dim_gradient};
  padding-bottom: 2.9rem;

  width: 100%;
  height: 16.4rem;

  pointer-events: none;
`;
