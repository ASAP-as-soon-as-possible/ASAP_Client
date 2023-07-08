import Text from 'components/atomComponents/Text';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

interface TextProps {
  main: string;
  sub: string;
}

function TitleComponents({ main, sub }: TextProps) {
  return (
    <TitleWrapper>
      <Text font={'head2'} color={`${theme.colors.white}`}>
        {main}
      </Text>
      <Text font={'title2'} color={`${theme.colors.grey4}`}>
        {sub}
      </Text>
    </TitleWrapper>
  );
}

export default TitleComponents;

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1.2rem;

  padding: 4.4rem 2rem 4.2rem 2rem;
  width: 100%;
`;
