import { ForwardedRef, forwardRef } from 'react';

import Text from 'components/atomComponents/Text';
import { OfflinePlaceIc, OnlinePlaceIc, TimeIc } from 'components/Icon/icon';
import LoadingPage from 'pages/errorLoading/LoadingPage';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import GetQcardDataHooks from '../hooks/getQCardData';

const Qcard = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const { meetingId } = useParams();
  const navigate = useNavigate();
  const {isError, isloading, cueCardData } = GetQcardDataHooks(meetingId as unknown as string)
  if (isError) {
    navigate(`/error`);
  } else if (!isloading && cueCardData) {
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
    } = cueCardData;

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
               {placeDetail === "" ? "미정" : placeDetail}
              </Text>
            </PlaceContainer>
            <TimeContainer>
              <IconBox>
                <TimeIc />
              </IconBox>
              <Text
                font={'title2'}
                color={`${theme.colors.white}`}
              >{`${month}월 ${day}일 (${dayOfWeek}) ${startTime}-${endTime}`}</Text>
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
                {userNames?.map((member, i) => (
                  <Text
                    key={i + member}
                    font={'body2'}
                    color={`${theme.colors.white}`}
                  >{member}{i !== userNames.length - 1 ? ',' : ''}&nbsp;</Text>
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
          {additionalInfo === '' ? (
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
  } else {
    return (
      <LoadingWrapper>
        <LoadingPage />
      </LoadingWrapper>
    );
  }
});

Qcard.displayName = 'Qcard';

export default Qcard;

const LoadingWrapper = styled.div`
  display: flex;
  position: relative;
  top: 15rem;
  align-items: center;
  justify-content: center;
  width: 32rem;
`;

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
  z-index:0;
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
    z-index:1;
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
    z-index:1;
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
  width: 2.5rem;
  color: ${({ theme }) => theme.colors.main1};
`;
const MentText = styled.span`
  ${({ theme }) => theme.fonts.body2};
  width: 21.2rem;
  color: ${({ theme }) => theme.colors.grey2};
`;
