import stepingCheck from 'assets/images/steppingCheck.png';
import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

function SteppingLayout() {
  return (
    <>
      <SteppingWrapper>
        <Header position={'stepping'} />
        <ImageSection>
          <img src={stepingCheck} alt="png" />
        </ImageSection>
        <SteppingMentSection>
          <Text font={'head1'} color={`${theme.colors.white}`}>
            회의 생성 완료!
          </Text>
          <Text font={'body4'} color={`${theme.colors.grey4}`}>
            이제 가능한 시간을 입력하러 가볼까요?
          </Text>
        </SteppingMentSection>
        <StyledBtnSection>
          <Button typeState={'primaryActive'}>
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnSection>
      </SteppingWrapper>
    </>
  );
}

export default SteppingLayout;

const SteppingWrapper = styled.div`
  width: 100%;
`;

const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
  img {
    display: flex;
    flex-direction: center;
    align-items: center;
    width: 21.3rem;
    height: 19.9rem;
  }
`;

const StyledBtnSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;

const SteppingMentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`;
