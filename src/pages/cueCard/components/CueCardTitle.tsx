import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface TextProps {
  main: string;
  sub: string;
}

function CueCardTitle({ main, sub }: TextProps) {
  return (
    <TitleWrapper>
      <Text font={'head1'} color={`${theme.colors.white}`}>
        {main}
      </Text>
      <Text font={'title2'} color={`${theme.colors.grey4}`}>
        {sub}
      </Text>
    </TitleWrapper>
  );
}

export default CueCardTitle;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  padding: 4.4rem 0 1.8rem 0;
  width: 100%;
`;
