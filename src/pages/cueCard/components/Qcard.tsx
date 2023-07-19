import { forwardRef, useState, ForwardedRef } from 'react';

import Text from 'components/atomComponents/Text';
import { OfflinePlaceIc, OnlinePlaceIc, TimeIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface CardData {
  status: number;
  message: string;
  data: {
    title: string;
    place: 'ONLINE' | 'OFFLINE' | 'UNDEFINED';
    placeDetail: string | null;
    month: string;
    day: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    hostName: string;
    userNames: string[];
    additionalInfo: string | null;
  };
}

const cardInitData: CardData = {
  status: 200,
  message: '큐카드 조회 성공입니다.',
  data: {
    title: 'ASAP 간챙겨',
    place: 'OFFLINE',
    placeDetail: '구글미트',
    month: '7',
    day: '30',
    dayOfWeek: '월',
    startTime: '06:00',
    endTime: '12:00',
    hostName: '서지원',
    userNames: [
      '서지원',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
      '도소현',
    ],
    additionalInfo:
      '50자 들어간 버전이에요 신촌역에서 만나요! 다들 늦지 않게 도착해주시면 감사하겠습니다! ',
  },
};

const Qcard = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const [cardData, setCardData] = useState<CardData>(cardInitData);
  const {
    data: {
      title,
      place,
      placeDetail,
      month,
      day,
      dayOfWeek,
      startTime,
      endTime,
      hostName,
      userNames,
      additionalInfo,
    },
  } = cardData;

  return (
    <QcardWrapper ref={ref}>
      <TopCardSetcion>
        <Text font={'head2'} color={`${theme.colors.white}`}>
          {title}
        </Text>
        <PlaceTimeSection>
          <PlaceContainer>
            <IconBox>{place === 'ONLINE' ? <OnlinePlaceIc /> : <OfflinePlaceIc />}</IconBox>
            <Text font={'title2'} color={`${theme.colors.white}`}>
              {placeDetail === null ? '미정' : placeDetail}
            </Text>
          </PlaceContainer>
          <TimeContainer>
            <IconBox>
              <TimeIc />
            </IconBox>
            <Text
              font={'title2'}
              color={`${theme.colors.white}`}
            >{`${month}월 ${day} (${dayOfWeek}) ${startTime}-${endTime}`}</Text>
          </TimeContainer>
        </PlaceTimeSection>
        <MemeberSection>
          <HostMeberContainer>
            <MemberTitle>
              <Text font={'body2'} color={`${theme.colors.main1}`}>
                방장
              </Text>
            </MemberTitle>
            <UserMemberbox>
              <Text font={'body2'} color={`${theme.colors.white}`}>
                {hostName}
              </Text>
            </UserMemberbox>
          </HostMeberContainer>
          <MemberContainer>
            <MemberTitle>
              <Text font={'body2'} color={`${theme.colors.main1}`}>
                참여
              </Text>
            </MemberTitle>
            <UserMemberbox>
              {userNames.map((member, i) => (
                <Text
                  key={i + member}
                  font={'body2'}
                  color={`${theme.colors.white}`}
                >{`${member},`}</Text>
              ))}
            </UserMemberbox>
          </MemberContainer>
        </MemeberSection>
      </TopCardSetcion>
      <DashedSection>
        {Array.from({ length: 15 }).map((_, i) => {
          return <div key={i} />;
        })}
      </DashedSection>
      <BottomCardSection>
        {additionalInfo === null ? (
          <Text font={'body2'} color={`${theme.colors.grey4}`}>
            별도의 공지사항은 없어요!
          </Text>
        ) : (
          <AdditionalText>
            <NoticeText>공지</NoticeText>
            <MentText>{additionalInfo}</MentText>
          </AdditionalText>
        )}
      </BottomCardSection>
    </QcardWrapper>
  );
});

Qcard.displayName = 'Qcard';

export default Qcard;

const QcardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.6rem;
  width: 100%;
`;

const TopCardSetcion = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 3.2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${theme.colors.grey9};
  padding: 4.6rem 2rem;
  height: fit-content;

  &:before {
    position: absolute;
    bottom: -1rem;
    left: 0rem;
    display: block;
    width: 1rem;
    height: 2rem;
    background-color: ${theme.colors.grey10};
    border-radius: 0 5rem 5rem 0;
    content: '';
  }
  &:after {
    position: absolute;
    right: 0rem;
    bottom: -1rem;
    display: block;
    width: 1rem;
    height: 2rem;
    background-color: ${theme.colors.grey10};
    border-radius: 5rem 0 0 5rem;
    content: '';
  }
`;

const DashedSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  background-color: ${theme.colors.grey9};
  div {
    width: 1rem;
    border: 1px solid ${theme.colors.black};
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

const UserMemberbox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.3rem;
`;
const BottomCardSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: ${theme.colors.grey9};
  height: 11rem;
`;
const AdditionalText = styled.div`
  display: flex;
  gap: 1.6rem;
  align-self: flex-start;
  margin-top: 2.7rem;
`;
const NoticeText = styled.span`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.main1};
  width: 2.5rem;
`;
const MentText = styled.span`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grey2};
  width: 21.2rem;
`;
