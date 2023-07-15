import Header from 'components/moleculesComponents/Header';
import styled from 'styled-components/macro';

import SteppingBody from './components/SteppingBody';
import SteppingBtnSection from './components/SteppingBtnSection';

interface SteppingProps {
  steppingType: string;
}

function SteppingLayout({ steppingType }: SteppingProps) {
  return (
    <>
      <SteppingWrapper>
        <Header position={'stepping'} />
        <SteppingBody steppingType={steppingType} />
        <SteppingBtnSection steppingType={steppingType} />
      </SteppingWrapper>
    </>
  );
}

export default SteppingLayout;

const SteppingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;