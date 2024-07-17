import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface TitleProps {
  memberCount?: number;
  totalUserNames?: string[];
}

function Title({ memberCount, totalUserNames }: TitleProps) {
  return (
    <>
      <TextOneLine>
        <Text font={'title1'} color={`${theme.colors.white}`}>
          현재까지&nbsp;
        </Text>
        <Text font={'title1'} color={`${theme.colors.sub1}`}>
          {memberCount !== undefined ? memberCount.toString() : ''}명
        </Text>
        <Text font={'title1'} color={`${theme.colors.white}`}>
          이 입력했어요
        </Text>
      </TextOneLine>
      <TotalUserNames>
        {totalUserNames && (
          <Text font={'body4'} color={`${theme.colors.grey5}`}>
            {totalUserNames.join(',')}
          </Text>
        )}
      </TotalUserNames>
    </>
  );
}

export default Title;

const TextOneLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.7rem;
  width: 100%;
`;

const TotalUserNames = styled.div`
  display: flex;
  margin-top: 1.2rem;
  margin-bottom: 2.4rem;
  width: 100%;
`;
