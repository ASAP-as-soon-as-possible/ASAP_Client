import Text from 'components/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Qcard() {
  return (
    <QcardWrapper>
      <TopCardSetcion>
        <Text font={'head2'}>아삽 전체회의</Text>
        <PlaceTimeSection>
            <PlaceContainer>
                <Text font={'title2'}>신촌 마카닷 스터카페</Text>
            </PlaceContainer>
            <TimeContainer>
                <Text font={'title2'}>6월 30 (금) 18:00-21:00</Text>
            </TimeContainer>
        </PlaceTimeSection>
      </TopCardSetcion>
    </QcardWrapper>
  );
}

export default Qcard;

const QcardWrapper = styled.article`
  display: flex;
  width: 100%;
`;

const TopCardSetcion = styled.section`
  margin: 0 2rem;
  border: 2px solid ${theme.colors.white};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${theme.colors.white};
  padding: 4.6rem 2rem;
  width: 100%;
  height: 30rem;
`;

const PlaceTimeSection =styled.section`
  margin-top: 3.3rem;
`
const PlaceContainer =styled.section`

`
const TimeContainer =styled.section`

`
