import React, { useState } from 'react';

import Text from 'components/atomComponents/Text';
import { DropdownWhite, DropupWhite } from 'components/Icon/icon';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

const mebers = [
  '서지원',
  '강원용',
  '김태희',
  '이재훈',
  '서채원',
  '정찬우',
  '심은서',
  '이동헌',
  '강민서',
  '도소현',
];

interface DateTimeData {
  status: number;
  message: string;
  data: {
    memberCount: number;
    bestDateTime: {
      month: string;
      day: string;
      dayOfWeek: string;
      startTime: string;
      endTime: string;
    };
    otherDateTimes: {
      month: string;
      day: string;
      dayOfWeek: string;
      startTime: string;
      endTime: string;
    }[];
  };
}

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
    },
    otherDateTimes: [
      {
        month: '7',
        day: '30',
        dayOfWeek: '화',
        startTime: '06:00',
        endTime: '12:00',
      },
      {
        month: '7',
        day: '30',
        dayOfWeek: '화',
        startTime: '06:00',
        endTime: '12:00',
      },
    ],
  },
};
function BestMeetTime() {
  const count = 12;

  const [isMember, setIsMember] = useState(false);
  return (
    <BestMeetTimeWrapper>
      <TitleSection>
        <HeaderContainer>
          <HeaderTitle>
            현재까지 모인 <MemberCount>{count}</MemberCount>명을 위한
          </HeaderTitle>
          <HeaderTitle>최적의 회의시간이에요</HeaderTitle>
        </HeaderContainer>
        <Text font={'body3'} color={`${theme.colors.grey4}`}>
          박스를 클릭하여 회의시간을 확정해주세요
        </Text>
      </TitleSection>
      <BestTimeCard>
        <IconContainer onClick={() => setIsMember((prev) => !prev)}>
          {isMember ? <DropupWhite /> : <DropdownWhite />}
        </IconContainer>
        <Input id="bestMeetTime" type="checkbox" />
        <InfoContainer>
          <Label htmlFor="bestMeetTime">
            <Text font={'body1'} color={`${theme.colors.white}`}>
              6월 30일 금요일
            </Text>
            <Text font={'body1'} color={`${theme.colors.white}`}>
              18:00 ~ 21:00
            </Text>
          </Label>
          {isMember ? (
            <MemeberContainer>
              {mebers.map((member, i) => (
                <Text key={i + member} font={'body4'} color={`${theme.colors.grey5}`}>
                  {`${member},`}&nbsp;
                </Text>
              ))}
            </MemeberContainer>
          ) : (
            undefined
          )}
        </InfoContainer>
      </BestTimeCard>
      <AnotherTimeBtnSection>
        <Text font={`body4`} color={`${theme.colors.grey3}`}>
          다른 시간대 확인하기
        </Text>
        <BasicIconContainer onClick={() => setIsMember((prev) => !prev)}>
          {isMember ? <DropupWhite /> : <DropdownWhite />}
        </BasicIconContainer>
      </AnotherTimeBtnSection>

      <BestTimeCard>
        <Input id="bestMeetTime" type="checkbox" />
        <InfoContainer>
          <Label htmlFor="bestMeetTime">
            <Text font={'body1'} color={`${theme.colors.white}`}>
              6월 30일 금요일
            </Text>
            <Text font={'body1'} color={`${theme.colors.white}`}>
              18:00 ~ 21:00
            </Text>
          </Label>

          <MemeberContainer>
            {mebers.map((member, i) => (
              <Text key={i + member} font={'body4'} color={`${theme.colors.grey5}`}>
                {`${member},`}&nbsp;
              </Text>
            ))}
          </MemeberContainer>
        </InfoContainer>
      </BestTimeCard>
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

const BestTimeCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  border-radius: 10px;
  padding: 2rem;
  height: fit-content;
`;

const AnotherTimeBtnSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 2rem 0 1.6rem 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;
const Input = styled.input`
  appearance: none;
  margin: 0 2.274rem 0 0;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='9' stroke='%23D9D9D9' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%233C49FF'/%3E%3Ccircle cx='9.99965' cy='10.0001' r='3.63636' fill='white'/%3E%3C/svg%3E ");
  }
  &:checked + label {
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MemeberContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  width: 23rem;
  height: fit-content;
`;

const BasicIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
`;

const IconContainer = styled(BasicIconContainer)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
`;
