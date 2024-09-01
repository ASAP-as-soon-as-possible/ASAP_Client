import Text from 'components/common/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function BlankMeetCard() {
  return (
    <BlankMeetCardWrapper>
      <Text font={'body4'} color={`${theme.colors.grey5}`}>
        산출된 회의 시간이 없어요!
      </Text>
    </BlankMeetCardWrapper>
  );
}

export default BlankMeetCard;

const BlankMeetCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey7};
  border-radius: 1rem;
  padding: 3.4rem 0;
`;
