import Error404 from 'assets/images/Error404.png';
import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

function ErrorPage404() {
  return (
    <ErrorPage404Wrapper>
      <ErrorSection>
        <Text font={'head1'} color={`${theme.colors.white}`}>
          404 ERROR
        </Text>
        <ImgContainer src={Error404} alt="error404" />
        <ErrorMentContainer>
          <Text font={'body3'} color={`${theme.colors.grey4}`}>
            죄송합니다. 페이지를 찾을 수 없습니다.
          </Text>
          <Text font={'body3'} color={`${theme.colors.grey4}`}>
            입력하신 페이지의 주소가 정확한지 확인해주세요
          </Text>
        </ErrorMentContainer>
      </ErrorSection>
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
