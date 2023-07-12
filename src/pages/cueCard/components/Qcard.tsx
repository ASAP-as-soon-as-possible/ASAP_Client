import Text from 'components/atomComponents/Text';
import { OnlinePlaceIc, TimeIc } from 'components/Icon/icon';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Qcard() {
  return (
    <QcardWrapper>
      <TopCardSetcion>
        <Text font={'head2'}>아삽 전체회의</Text>
        <PlaceTimeSection>
          <PlaceContainer>
            <IconBox>
              <OnlinePlaceIc />
            </IconBox>
            <Text font={'title2'}>신촌 마카닷 스터카페</Text>
          </PlaceContainer>
          <TimeContainer>
            <IconBox>
              <TimeIc />
            </IconBox>
            <Text font={'title2'}>6월 30 (금) 18:00-21:00</Text>
          </TimeContainer>
        </PlaceTimeSection>
        <MemeberSection>
          <HostMeberContainer>
            <MemberTitle>
            <Text font={'body2'} color={`${theme.colors.main1}`}>
              방장
            </Text>
            </MemberTitle>
            <Text font={'body2'}>서지원</Text>
          </HostMeberContainer>
          <MemberContainer>
            <MemberTitle>
            <Text font={'body2'} color={`${theme.colors.main1}`}>
              참여
            </Text>
            </MemberTitle>
            <Text font={'body2'}>
              서지원, 서채원, 강민서, 서지원, 서지원, 서채원, 강민서, 서지원
            </Text>
          </MemberContainer>
        </MemeberSection>
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
  display:flex;
  flex-direction: column;
  gap:3.2rem;
  margin: 0 2rem;
  border: 2px solid ${theme.colors.white};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${theme.colors.white};
  padding: 4.6rem 2rem;
  width: 100%;
  height: 30rem;
`;

const PlaceTimeSection = styled.section`
`;
const PlaceContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
const TimeContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2.4rem;
`;

const MemeberSection = styled.section`
  display: flex;
  flex-direction: column;
`;
const HostMeberContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:1.5rem;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:1.5rem;
`;

const MemberTitle = styled.div`
  min-width: 2.5rem;
`