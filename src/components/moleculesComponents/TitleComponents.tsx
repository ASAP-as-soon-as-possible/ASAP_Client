import Text from 'components/atomComponents/Text';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

function TitleComponents() {
  return (
    <TitleWrapper>
      <Text font={'head2'} color={`${theme.colors.white}`}>
        어떤 회의를 계획중인가요?
      </Text>
      <Text font={'title2'} color={`${theme.colors.grey4}`}>
        회의 이름을 지어주세요 (최대 15자)
      </Text>
    </TitleWrapper>
  );
}

export default TitleComponents;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;