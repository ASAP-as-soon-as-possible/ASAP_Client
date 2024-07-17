import React, { useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { DropdownWhite, DropupWhite } from 'components/Icon/icon';
import AlternativeCard from 'pages/bestMeetTime/components/bestMeetTime/AlternativeCard';
import BestTimeCard from 'pages/bestMeetTime/components/bestMeetTime/BestTimeCard';
import ConfirmModal from 'pages/bestMeetTime/components/bestMeetTime/confirmModal';
import GetBestMeetimeListHooks from 'pages/bestMeetTime/hooks/getBestMeetimeList';
import { whatisBestMeetime } from 'pages/bestMeetTime/utils/whatisBestMeetime';
import LoadingPage from 'pages/errorLoading/LoadingPage';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import BlankMeetCard from './BlankMeetCard';

function BestMeetTime() {
  const [isalternativeCardOpen, setIsalternativeCardOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { meetingId } = useParams();
  const { isloading, bestTimeData, isError } = GetBestMeetimeListHooks(
    (meetingId as unknown) as string,
  );
  const navigate = useNavigate();
  if (isError) {
    navigate(`/*`);
  } else if (!isloading && bestTimeData) {
    const bestMeetimeObj = whatisBestMeetime(bestTimeData, selected);
    if (bestMeetimeObj) {
      return (
        <BestMeetTimeWrapper $state={showModal}>
          <TitleSection>
            <HeaderContainer>
              <HeaderTitle>
                <Text font={`head2`} color={`${theme.colors.white}`}>
                  현재까지 모인&nbsp;
                </Text>
                <Text font={`head2`} color={`${theme.colors.sub1}`}>
                  {bestTimeData.data.memberCount}
                </Text>
                <Text font={`head2`} color={`${theme.colors.sub1}`}>
                  명
                </Text>
                <Text font={`head2`} color={`${theme.colors.white}`}>
                  을 위한
                </Text>
              </HeaderTitle>
              <Text font={`head2`} color={`${theme.colors.white}`}>
                최적의 회의시간이에요
              </Text>
            </HeaderContainer>
            <Text font={'body3'} color={`${theme.colors.grey4}`}>
              박스를 클릭하여 회의시간을 확정해주세요
            </Text>
          </TitleSection>
          {bestTimeData.data.bestDateTime ? (
            <BestTimeCard
              rank={0}
              selected={selected}
              carddata={bestTimeData.data.bestDateTime}
              chooseMeetime={setSelected}
            />
          ) : null}

          <AnotherTimeBtnSection onClick={() => setIsalternativeCardOpen((prev) => !prev)}>
            <Text font={`body4`} color={`${theme.colors.grey3}`}>
              다른 시간대 확인하기
            </Text>
            <BasicIconContainer>
              {isalternativeCardOpen ? <DropupWhite /> : <DropdownWhite />}
            </BasicIconContainer>
          </AnotherTimeBtnSection>
          {isalternativeCardOpen ? (
            <AlternativeSection>
              {bestTimeData.data.otherDateTimes[0] ? (
                <AlternativeCard
                  rank={1}
                  selected={selected}
                  carddata={bestTimeData.data.otherDateTimes[0]}
                  chooseMeetime={setSelected}
                />
              ) : (
                <BlankMeetCard />
              )}
              {bestTimeData.data.otherDateTimes[1] ? (
                <AlternativeCard
                  rank={2}
                  selected={selected}
                  carddata={bestTimeData.data.otherDateTimes[1]}
                  chooseMeetime={setSelected}
                />
              ) : null}
            </AlternativeSection>
          ) : (
            undefined
          )}
          <BtnWrapper>
            <Button typeState={'primaryActive'} onClick={() => setShowModal(true)}>
              <Text font={'title2'}> 확정</Text>
            </Button>
          </BtnWrapper>
          {showModal && (
            <ConfirmModal
              setIsModalOpen={setShowModal}
              memberCount={bestTimeData.data.memberCount}
              bestTime={bestMeetimeObj} //얘도 데이터에서 애들 이름 지워야됨
            />
          )}
        </BestMeetTimeWrapper>
      );
    }
  } else {
    return (
      <LoadingWrapper>
        <LoadingPage />
      </LoadingWrapper>
    );
  }
}

export default BestMeetTime;

const LoadingWrapper = styled.div`
  position: relative;
  top: 25rem;
  width: 100%;
`;
const BestMeetTimeWrapper = styled.div<{ $state: boolean }>`
  width: 100%;
`;
const TitleSection = styled.article`
  display: flex;
  flex-direction: column;
  margin: 4rem 10.8rem 3rem 0rem;
  width: 100%;
`;
const HeaderContainer = styled.div`
  margin-bottom: 1.2rem;
`;

const HeaderTitle = styled.div`
  display: flex;
`;

const AnotherTimeBtnSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 2rem 0 1.6rem 0;
  padding-right: 1rem;
`;
const AlternativeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BasicIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
`;
const BtnWrapper = styled.div`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;
