import React, { useEffect, useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { DropdownWhite, DropupWhite } from 'components/Icon/icon';
import AlternativeCard from 'pages/BestMeetTime/components/bestMeetTime/AlternativeCard';
import BestTimeCard from 'pages/BestMeetTime/components/bestMeetTime/BestTimeCard';
import ConfirmModal from 'pages/BestMeetTime/components/bestMeetTime/confirmModal';
import { BestMeetFinished, DateTimeData } from 'pages/BestMeetTime/types/meetCardData';
import LoadingPage from 'pages/ErrorLoading/LoadingPage';
import { useParams } from 'react-router';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { client } from 'utils/apis/axios';

const initialData = {
  status: 200,
  message: '최적의 회의시간 조회 성공입니다.',
  data: {
    memberCount: 12,
    bestDateTime: {
      month: '7',
      day: '30',
      dayOfWeek: '월',
      startTime: '06:00',
      endTime: '12:00',
      users: [
        {
          id: 1,
          name: '베스트',
        },
        {
          id: 2,
          name: '이동헌',
        },
        {
          id: 3,
          name: '정찬우',
        },
      ],
    },
    otherDateTimes: [
      {
        month: '7',
        day: '30',
        dayOfWeek: '화',
        startTime: '06:00',
        endTime: '12:00',
        users: [
          {
            id: 1,
            name: '얼터1',
          },
          {
            id: 2,
            name: '이동헌',
          },
          {
            id: 3,
            name: '정찬우',
          },
        ],
      },
      {
        month: '7',
        day: '30',
        dayOfWeek: '화',
        startTime: '06:00',
        endTime: '12:00',
        users: [
          {
            id: 1,
            name: '야보링',
          },
          {
            id: 2,
            name: '이동헌',
          },
          {
            id: 3,
            name: '정찬우',
          },
        ],
      },
    ],
  },
};

function BestMeetTime() {
  const [isalternativeCardOpen, setIsalternativeCardOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [bestTimeData, setBestTimeData] = useState<DateTimeData>();
  const meetingId = useParams();
  const [isloading, setIsloading] = useState(true);
  const getCueCardData = async () => {
    try {
      setIsloading(true);
      // const result = await client.get(`/meeting/${meetingId}/details`);
      // setBestTimeData(result.data);
      setTimeout(() => setBestTimeData(initialData), 1000);
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };

  useEffect(
    () => {
      getCueCardData();
    },
    [meetingId],
  );

  if (!isloading && bestTimeData) {
    let dataobj: BestMeetFinished;
    const whatisDataobj = (rank: number) => {
      if (rank === 0) {
        dataobj = bestTimeData.data.bestDateTime;
      } else if (rank === 1) {
        dataobj = bestTimeData.data.otherDateTimes[0];
      } else if (rank === 2) {
        dataobj = bestTimeData.data.otherDateTimes[1];
      }

      return dataobj;
    };

    const dataUse = whatisDataobj(selected);

    return (
      <BestMeetTimeWrapper $state={showModal}>
        <TitleSection>
          <HeaderContainer>
            <HeaderTitle>
              현재까지 모인 <MemberCount>{bestTimeData.data.memberCount}</MemberCount>명을 위한
            </HeaderTitle>
            <HeaderTitle>최적의 회의시간이에요</HeaderTitle>
          </HeaderContainer>
          <Text font={'body3'} color={`${theme.colors.grey4}`}>
            박스를 클릭하여 회의시간을 확정해주세요
          </Text>
        </TitleSection>
        <BestTimeCard
          rank={0}
          selected={selected}
          carddata={bestTimeData.data.bestDateTime}
          chooseMeetime={setSelected}
        />

        <AnotherTimeBtnSection>
          <Text font={`body4`} color={`${theme.colors.grey3}`}>
            다른 시간대 확인하기
          </Text>
          <BasicIconContainer onClick={() => setIsalternativeCardOpen((prev) => !prev)}>
            {isalternativeCardOpen ? <DropupWhite /> : <DropdownWhite />}
          </BasicIconContainer>
        </AnotherTimeBtnSection>
        {isalternativeCardOpen ? (
          <AlternativeSection>
            <AlternativeCard
              rank={1}
              selected={selected}
              carddata={bestTimeData.data.otherDateTimes[0]}
              chooseMeetime={setSelected}
            />
            <AlternativeCard
              rank={2}
              selected={selected}
              carddata={bestTimeData.data.otherDateTimes[1]}
              chooseMeetime={setSelected}
            />
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
            bestTime={dataUse} //얘도 데이터에서 애들 이름 지워야됨
          />
        )}
      </BestMeetTimeWrapper>
    );
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
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.2rem;
  font-weight: 700;
`;

const MemberCount = styled.span`
  color: ${({ theme }) => theme.colors.sub1};
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
