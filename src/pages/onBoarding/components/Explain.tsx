import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface ExplainProps {
  main: string;
  sub1: string;
  sub2: string;
}

function Explain({ main, sub1, sub2 }: ExplainProps) {
  return (
    <ExplainWrapper>
      <Text font={'head2'} color={`${theme.colors.white}`}>
        {main}
      </Text>
      <SubTextSection>
        <Text font={'body3'} color={`${theme.colors.grey3}`}>
          {sub1}
        </Text>
        <Text font={'body3'} color={`${theme.colors.grey3}`}>
          {sub2}
        </Text>
      </SubTextSection>
    </ExplainWrapper>
  );
}

export default Explain;

const ExplainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubTextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem; 
`;
