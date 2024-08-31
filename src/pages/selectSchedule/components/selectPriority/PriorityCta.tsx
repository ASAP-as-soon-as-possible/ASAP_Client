import { useState } from 'react';

import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import SelectModal from 'pages/legacy/selectSchedule/SelectModal';
import styled from 'styled-components';

function PriorityCta() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BtnDim>
        <Button
          typeState={'halfTertiaryActive'}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <Text font={'button2'}>상관없음</Text>
        </Button>
        <Button
          typeState={'halfPrimaryActive'}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <Text font={'button2'}>확인</Text>
        </Button>
      </BtnDim>
      {isModalOpen && <SelectModal setShowModal={setIsModalOpen} />}
    </>
  );
}

export default PriorityCta;

const BtnDim = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  gap: 1rem;
  align-items: end;
  justify-content: center;
  z-index: 1;

  margin-top: 3rem;
  background: ${({ theme }) => theme.colors.dim_gradient};
  padding-bottom: 2.9rem;

  width: 100%;

  pointer-events: none;
`;
