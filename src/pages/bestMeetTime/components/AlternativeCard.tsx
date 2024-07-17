import Text from 'components/atomComponents/Text';
import { BestDataProps } from 'pages/bestMeetTime/types/meetCardData';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

function AlternativeCard({ rank, carddata, chooseMeetime, selected }: BestDataProps) {
  const checkingCheck = () => {
    chooseMeetime(rank);
  };

  if (carddata) {
    return (
      <AlternativeCardWrapper $rank={rank} $selected={selected}>
        <Input
          id={`${rank}`}
          type="checkbox"
          checked={rank === selected ? true : false}
          onChange={checkingCheck}
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

          <MemeberContainer>
            {carddata.users.map((member, i) => (
              <Text key={i + member.name} font={'body4'} color={`${theme.colors.grey5}`}>
                {member.name}
                {i !== carddata.users.length - 1 ? ',' : ''}&nbsp;
              </Text>
            ))}
          </MemeberContainer>
        </InfoContainer>
      </AlternativeCardWrapper>
    );
  } else {
    return null;
  }
}

export default AlternativeCard;

const AlternativeCardWrapper = styled.article<{ $rank: number; $selected: number }>`
  display: flex;
  position: relative;
  flex-direction: row;
  border: 1px solid
    ${({ $rank, $selected, theme }) =>
      $rank === $selected ? theme.colors.main1 : theme.colors.grey5};
  border-radius: 10px;
  padding: 2rem;
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
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='9' stroke='%23D9D9D9' stroke-width='2'/%3E%3C/svg%3E%0A");
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

const MemeberContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  width: 23rem;
  height: fit-content;
`;
