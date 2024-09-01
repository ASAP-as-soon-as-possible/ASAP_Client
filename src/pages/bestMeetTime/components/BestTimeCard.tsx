import Text from 'components/common/atomComponents/Text';
import { Member } from 'components/Icon/icon';
import { BestDataProps } from 'pages/bestMeetTime/types/meetCardData';
import styled from 'styled-components';
import { theme } from 'styles/theme';

import MemberTooltip from './MemberTooltip';

function BestTimeCard({ rank, carddata, chooseMeetime, selected }: BestDataProps) {
  const checkingCheck = () => {
    chooseMeetime(rank);
  };
  if (carddata) {
    return (
      <BestTimeCardWrapper $rank={rank} $selected={selected}>
        <Input
          id={`${rank}`}
          type="checkbox"
          onChange={checkingCheck}
          checked={rank === selected ? true : false}
        />
        <InfoContainer>
          <Label htmlFor={`${rank}`}>
            <Text font={'body1'} color={`${theme.colors.white}`}>
              {carddata.month}월 {carddata.day}일 {carddata.dayOfWeek}요일
            </Text>
            <Text font={'body1'} color={`${theme.colors.white}`}>
              {carddata.startTime} ~ {carddata.endTime}
            </Text>
          </Label>
        </InfoContainer>
        <MemberCountChip>
          <Member />
          <Text font="body2" color={theme.colors.white}>
            {carddata.users.length}
          </Text>
        </MemberCountChip>
        <MemberTooltip members={carddata.users.map((user) => user.name)} />
      </BestTimeCardWrapper>
    );
  }
}

export default BestTimeCard;

const BestTimeCardWrapper = styled.article<{ $rank: number; $selected: number }>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  border: 1px solid
    ${({ $rank, $selected, theme }) =>
      $rank === $selected ? theme.colors.main1 : theme.colors.grey7};
  border-radius: 10px;
  padding: 1.8rem 1.5rem;
  width: 100%;
  height: fit-content;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;
const Input = styled.input`
  appearance: none;
  margin: 0 2.274rem 0 0;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='9' stroke='%23555555' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  cursor: pointer;
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
  cursor: pointer;
`;

const MemberCountChip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5.6rem;
  height: 3rem;
  padding: 0.6rem 1rem;
  gap: 0.6rem;
  border-radius: 10rem;
  background-color: ${theme.colors.grey8};
  align-self: flex-end;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.grey5};
  }
  &:focus {
    background-color: ${theme.colors.grey6};
  }

  &:hover + .tooltip {
    visibility: visible;
  }
`;
