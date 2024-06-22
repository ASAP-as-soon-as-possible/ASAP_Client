import Button from 'components/atomComponents/Button';
import { Step } from 'pages/selectSchedule/types';
import Text from 'components/atomComponents/Text';
import styled from 'styled-components';

interface TimeSlotCtaProps {
  isValidSelection: boolean;
  setStep: (step: Step) => void;
}

function TimeSlotCta({ isValidSelection, setStep }: TimeSlotCtaProps) {
  return (
    <BtnDim>
      <Button
        typeState={isValidSelection ? 'primaryActive' : 'secondaryDisabled'}
        onClick={() => {
          setStep('selectPriority');
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
