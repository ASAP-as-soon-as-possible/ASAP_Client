import Text from 'components/common/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface TextProps {
  main: string;
  sub?: string;
  padding?: string;
}

const defaultPadding = `4.4rem 0 4.2rem 0`;
function TitleComponents({ main, sub, padding = defaultPadding }: TextProps) {
  return (
    <TitleWrapper $padding={padding}>
      <Text font={'head2'} color={`${theme.colors.white}`}>
        {main}
      </Text>
      {sub && (
        <Text font={'body3'} color={`${theme.colors.grey4}`}>
          {sub}
        </Text>
      )}
    </TitleWrapper>
  );
}

export default TitleComponents;

const TitleWrapper = styled.div<{ $padding: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1.2rem;

  padding: ${({ $padding }) => $padding};

  width: 100%;
`;
