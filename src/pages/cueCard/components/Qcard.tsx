import { forwardRef, useState, ForwardedRef, useEffect, Suspense } from 'react';

import Text from 'components/atomComponents/Text';
import { OfflinePlaceIc, OnlinePlaceIc, TimeIc } from 'components/Icon/icon';
import LoadingPage from 'pages/ErrorLoading/LoadingPage';
import { useParams } from 'react-router';
import { cueCardDataType} from 'src/types/cueCardType';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { client } from 'utils/apis/axios';

const Qcard = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  // const initCardData: cueCardDataType = {
  //   title: '',
  //   place: 'UNDEFINED',
  //   placeDetail: null,
  //   month: '',
  //   day: '',
  //   dayOfWeek: '',
  //   startTime: '',
  //   endTime: '',
  //   hostName: '',
  //   userNames: [],
  //   additionalInfo: null,
  // }
  const [cardData, setCardData] = useState<cueCardDataType>();
  const { meetingId } = useParams();

  const getCueCardData = async () => {

    const result = await client.get(`/meeting/${meetingId}/card`);

    setCardData(result.data.data);

  };
  useEffect(
    () => {
      getCueCardData();
    },
    [meetingId],
  );

  return (

    <Suspense fallback={<LoadingPage></LoadingPage>}>
    <QcardWrapper ref={ref}>
      <TopCardSetcion>
        <Text font={'head2'} color={`${theme.colors.white}`}>
          {cardData?.title}
        </Text>
        <PlaceTimeSection>
          <PlaceContainer>
            <IconBox>{cardData?.place === 'ONLINE' ? <OnlinePlaceIc /> : <OfflinePlaceIc />}</IconBox>
            <Text font={'title2'} color={`${theme.colors.white}`}>
              {cardData?.placeDetail === null ?'미정':cardData?.placeDetail}
            </Text>
          </PlaceContainer>
          <TimeContainer>
            <IconBox>
              <TimeIc />
            </IconBox>
            <Text
              font={'title2'}
              color={`${theme.colors.white}`}
            >{`${cardData?.month}월 ${cardData?.day} (${cardData?.dayOfWeek}) ${cardData?.startTime}-${cardData?.endTime}`}</Text>
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
                {cardData?.hostName}
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
              {cardData?.userNames?.map((member, i) => (
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
        {cardData?.additionalInfo === null ? (
          <Text font={'body2'} color={`${theme.colors.grey4}`}>
            별도의 공지사항은 없어요!
          </Text>
        ) : (
          <AdditionalText>
            <NoticeText>공지</NoticeText>
            <MentText>{cardData?.additionalInfo}</MentText>
          </AdditionalText>
        )}
      </BottomCardSection>
    </QcardWrapper>

</Suspense>

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
    display: block;
    position: absolute;
    bottom: -1rem;
    left: 0rem;
    border-radius: 0 5rem 5rem 0;
    background-color: ${theme.colors.grey10};
    width: 1rem;
    height: 2rem;
    content: '';
  }
  &:after {
    display: block;
    position: absolute;
    right: 0rem;
    bottom: -1rem;
    border-radius: 5rem 0 0 5rem;
    background-color: ${theme.colors.grey10};
    width: 1rem;
    height: 2rem;
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
    border: 1px solid ${theme.colors.black};
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

