import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import { useScheduleStepContext } from 'pages/selectSchedule/contexts/useScheduleStepContext';
import { SelectedSlotType, useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function TimeSlotCta() {
  const { selectedSlots, setSelectedSlots } = useSelectContext();
  const { setScheduleStep } = useScheduleStepContext();
  const isValidSelection = Object.keys(selectedSlots).length !== 0;

  const navigate = useNavigate();

  const resetPriorities = (selectedSlots: SelectedSlotType) => {
    const updatedSelectedSlots: SelectedSlotType = {};
    for (const key in selectedSlots) {
      updatedSelectedSlots[key] = {
        ...selectedSlots[key],
        priority: 0,
      };
    }
    setSelectedSlots(updatedSelectedSlots);
  };

  return (
    <BtnDim>
      <Button
        typeState={isValidSelection ? 'primaryActive' : 'secondaryDisabled'}
        onClick={() => {
          navigate(`${location.pathname}?step=selectPriority`);
          setScheduleStep('selectPriority');
          resetPriorities(selectedSlots);
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
  z-index: 1;
  bottom: 0;
  align-items: end;
  justify-content: center;

  margin-top: 3rem;
  background: ${({ theme }) => theme.colors.dim_gradient};
  padding: 0 2rem 2.9rem 2rem;
  width: 100%;
  height: 16.4rem;

  pointer-events: none;
`;
