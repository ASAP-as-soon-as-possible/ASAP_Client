import { useState } from 'react';

import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { DropDown, DropUp } from 'components/Icon/icon';
import BestTimeCard from 'pages/bestMeetTime/components/BestTimeCard';
import ConfirmModal from 'pages/bestMeetTime/components/ConfirmModal';
import GetBestMeetimeListHooks from 'pages/bestMeetTime/hooks/getBestMeetimeList';
import { whatisBestMeetime } from 'pages/bestMeetTime/utils/whatisBestMeetime';
import LoadingPage from 'pages/errorLoading/LoadingPage';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import BlankMeetCard from './BlankMeetCard';
import BlankOtherMeetCard from './BlankOtherMeetCard';

function BestMeetTime() {
  const [isalternativeCardOpen, setIsalternativeCardOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { meetingId } = useParams();
  const { isLoading, bestTimeData, isError } = GetBestMeetimeListHooks(
    (meetingId as unknown) as string,
  );
  const navigate = useNavigate();
  if (isError) {
    navigate(`/*`);
  }
  if (isLoading) {
    return (
      <LoadingWrapper>
        <LoadingPage />
      </LoadingWrapper>
    );
  }
  const bestMeetimeObj = bestTimeData && whatisBestMeetime(bestTimeData, selected);
  return (
    <BestMeetTimeWrapper $state={showModal}>
      <TitleSection>
        <HeaderContainer>
          <HeaderTitle>
            <Text font={`head2`} color={`${theme.colors.white}`}>
              현재까지 모인&nbsp;
            </Text>
            <Text font={`head2`} color={`${theme.colors.sub1}`}>
              {bestTimeData ? bestTimeData.data.memberCount : ''}
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
      {bestMeetimeObj ? (
        <>
          {bestTimeData.data.bestDateTime ? (
            <BestTimeCard
              rank={0}
              selected={selected}
              carddata={bestTimeData.data.bestDateTime}
              chooseMeetime={setSelected}
            />
          ) : null}
        </>
      ) : (
        <BlankMeetCard />
      )}
      <AnotherTimeBtnSection onClick={() => setIsalternativeCardOpen((prev) => !prev)}>
        <Text font={`body4`} color={`${theme.colors.grey5}`}>
          다른 시간대 확인하기
        </Text>
        <BasicIconContainer>{isalternativeCardOpen ? <DropUp /> : <DropDown />}</BasicIconContainer>
      </AnotherTimeBtnSection>
      {isalternativeCardOpen && bestTimeData ? (
        <AlternativeSection>
          {bestTimeData.data.otherDateTimes[0] ? (
            <BestTimeCard
              rank={1}
              selected={selected}
              carddata={bestTimeData.data.otherDateTimes[0]}
              chooseMeetime={setSelected}
            />
          ) : (
            <BlankOtherMeetCard />
          )}
          {bestTimeData.data.otherDateTimes[1] ? (
            <BestTimeCard
              rank={2}
              selected={selected}
              carddata={bestTimeData.data.otherDateTimes[1]}
              chooseMeetime={setSelected}
            />
          ) : null}
        </AlternativeSection>
      ) : null}
      <BottomBtnSection>
        <Button typeState={'primaryActive'} onClick={() => setShowModal(true)}>
          <Text font={'title2'}> 확정</Text>
        </Button>
      </BottomBtnSection>
      {showModal &&
        bestMeetimeObj && (
          <ConfirmModal
            setIsModalOpen={setShowModal}
            memberCount={bestTimeData.data.memberCount}
            bestTime={bestMeetimeObj}
          />
        )}
    </BestMeetTimeWrapper>
  );
}

export default BestMeetTime;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 25rem;
  width: 100%;
`;
const BestMeetTimeWrapper = styled.div<{ $state: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const TitleSection = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 3.6rem;
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
  cursor: pointer;
`;
const AlternativeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
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
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 1.2rem;
`;
