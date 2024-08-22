import Error404 from 'assets/images/Error404.png';
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function ErrorPage404() {
  const navigate = useNavigate();
  return (
    <ErrorPage404Wrapper>
      <ErrorSection>
        <HeaderContainer>
          <Text font={'head2'} color={`${theme.colors.white}`}>
            요청하신 페이지를
          </Text>
          <Text font={'head2'} color={`${theme.colors.white}`}>
            찾을 수 없습니다
          </Text>
        </HeaderContainer>
        <ImgContainer src={Error404} alt="error404" />
        <ErrorMentContainer>
          <Text font={'body3'} color={`${theme.colors.grey4}`}>
            입력하신 페이지의 주소가 정확한지
          </Text>
          <Text font={'body3'} color={`${theme.colors.grey4}`}>
            다시 한번 확인해주세요
          </Text>
        </ErrorMentContainer>
      </ErrorSection>
      <BottomBtnSection>
        <Button
          typeState={'primaryActive'}
          onClick={() => {
            navigate('/');
          }}
        >
          <Text font={'button2'}>홈으로 돌아가기</Text>
        </Button>
      </BottomBtnSection>
    </ErrorPage404Wrapper>
  );
}

export default ErrorPage404;

const ErrorPage404Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
`;

const ImgContainer = styled.img`
  margin-top: 4.3rem;
  width: 19.8rem;
  height: 18.3rem;
`;

const ErrorMentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.3rem;
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
