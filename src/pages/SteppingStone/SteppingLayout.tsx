import stepingCheck from 'assets/images/steppingCheck.png';
import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import SteppingBody from './components/SteppingBody';

function SteppingLayout() {
  return (
    <>
      <SteppingWrapper>
        <Header position={'stepping'} />
        <SteppingBody />
        <StyledBtnSection>
          <Button typeState={'halfTertiaryActive'}>
            <Text font={'button2'}>링크 복사하기</Text>
          </Button>
          <Button typeState={'halfPrimaryActive'}>
            <Text font={'button2'}>나의 가능시간 입력</Text>
          </Button>
        </StyledBtnSection>
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

const StyledBtnSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 1.2rem;
  flex-direction: row;
  gap: 1.4rem;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
`;
