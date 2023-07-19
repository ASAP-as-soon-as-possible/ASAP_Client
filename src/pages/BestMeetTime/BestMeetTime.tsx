import React, { useEffect, useState } from 'react';

import Text from 'components/atomComponents/Text';
import { DropdownWhite, DropupWhite } from 'components/Icon/icon';
import { useParams } from 'react-router';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { client } from 'utils/apis/axios';

import AlternativeCard from './components/AlternativeCard';
import BestTimeCard from './components/BestTimeCard';
import { BestMeetFinished, DateTimeData } from './types/meetCardData';

function BestMeetTime() {
  const [isalternativeCardOpen, setIsalternativeCardOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [bestTimeData, setBestTimeData] = useState<DateTimeData>();
  const meetingId = useParams();

  const getCueCardData = async () => {
    const result = await client.get(`/meeting/${meetingId}/details`);
    console.log(result.data);
    setBestTimeData(result.data);
  };

  useEffect(
    () => {
      getCueCardData;
    },
    [meetingId],
  );

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
  return (
    <BestMeetTimeWrapper>
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
    </BestMeetTimeWrapper>
  );
}

export default BestMeetTime;
const BestMeetTimeWrapper = styled.div`
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
