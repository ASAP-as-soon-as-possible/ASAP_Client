import React, { useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { DropdownWhite, DropupWhite } from 'components/Icon/icon';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import AlternativeCard from './components/AlternativeCard';
import BestTimeCard from './components/BestTimeCard';
import ConfirmModal from './components/confirmModal';
import { BestMeetFinished, DateTimeData } from './types/meetCardData';

const bestTimeData: DateTimeData = {
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
          name: '서채원',
        },
        {
          id: 2,
          name: '강민서',
        },
        {
          id: 3,
          name: '김태희',
        },
        {
          id: 4,
          name: '도소현',
        },
        {
          id: 5,
          name: '강원용',
        },
        {
          id: 6,
          name: '이재훈',
        },
        {
          id: 7,
          name: '정찬우',
        },
        {
          id: 8,
          name: '서지원',
        },
        {
          id: 9,
          name: '심은서',
        },
        {
          id: 10,
          name: '이동헌',
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
            name: '서채원',
          },
          {
            id: 2,
            name: '강민서',
          },
          {
            id: 3,
            name: '김태희',
          },
          {
            id: 4,
            name: '도소현',
          },
          {
            id: 5,
            name: '강원용',
          },
          {
            id: 6,
            name: '이재훈',
          },
          {
            id: 7,
            name: '정찬우',
          },
          {
            id: 8,
            name: '서지원',
          },
          {
            id: 9,
            name: '심은서',
          },
          {
            id: 10,
            name: '이동헌',
          },
        ],
      },
      {
        month: '6',
        day: '30',
        dayOfWeek: '수',
        startTime: '06:00',
        endTime: '12:00',
        users: [
          {
            id: 1,
            name: '서채원',
          },
          {
            id: 2,
            name: '강민서',
          },
          {
            id: 3,
            name: '김태희',
          },
          {
            id: 4,
            name: '도소현',
          },
          {
            id: 5,
            name: '강원용',
          },
          {
            id: 6,
            name: '이재훈',
          },
          {
            id: 7,
            name: '정찬우',
          },
          {
            id: 8,
            name: '서지원',
          },
          {
            id: 9,
            name: '심은서',
          },
          {
            id: 10,
            name: '이동헌',
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
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE2ODk3MDQ0NzgsImV4cCI6MTY4OTc5MDg3OCwidXNlcklkIjoiMjMiLCJyb2xlIjoiSE9TVCJ9.1yraZtDir9BPJcWTqw4pAMa9iTjj3ejPDjuJGJ2ziJhFpp45TM6uvkc8m_LGM11DOgV2jRA32mQPypacdlIuUQ';
  console.log(dataUse);

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
          bestTime={dataUse} //얘도 데이터에서 애들 이름 지워야됨.
          meetingId={'MjM='} //임시
          token={token}
        />
      )}
    </BestMeetTimeWrapper>
  );
}

export default BestMeetTime;
const BestMeetTimeWrapper = styled.div<{ $state: boolean }>`
  width: 100%;
  overflow: hidden;
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
