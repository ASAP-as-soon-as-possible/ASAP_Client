import Text from 'components/atomComponents/Text';
import { OnlinePlaceIc, TimeIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';
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
                서지원, 서채원, 김태희, 강민서, 이재훈, 이동헌, 심은서, 정찬우, 강원용, 도소현
              </Text>
            </MemberContainer>
          </MemeberSection>
        </TopCardSetcion>
        <DashedSection>
          {Array.from({ length: 15 }).map((_, i) => {
            return <div key={i} />;
          })}
        </DashedSection>
        <BottomCardSection>
          <Text font={'body2'} color={`${theme.colors.grey4}`}>
            별도의 공지사항은 없어요!
          </Text>
        </BottomCardSection>
      </QcardWrapper>
  );
}

export default Qcard;

const QcardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const TopCardSetcion = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 3.2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${theme.colors.white};
  padding: 4.6rem 2rem;
  width: 100%;
  height: fit-content;

  &:before {
    display: block;
    position: absolute;
    bottom: -1rem;
    left: -1rem;
    border-radius: 50%;
    background-color: ${theme.colors.black};
    width: 2rem;
    height: 2rem;
    content: '';
  }
  &:after {
    display: block;
    position: absolute;
    right: -1rem;
    bottom: -1rem;
    border-radius: 50%;
    background-color: ${theme.colors.black};
    width: 2rem;
    height: 2rem;
    content: '';
  }
`;

const DashedSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  background-color: ${theme.colors.white};
  width: 100%;
  div {
    border: 1px solid ${theme.colors.grey4};
    width: 1rem;
  }
`;

const PlaceTimeSection = styled.section``;
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
  gap: 1.5rem;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const MemberTitle = styled.div`
  min-width: 2.5rem;
`;

const BottomCardSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${theme.colors.white};
  height: 11rem;
`;
