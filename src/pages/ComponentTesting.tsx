import {
  MainLogoIc,
  HambergerIc,
  ExitIc,
  InputCancelIc,
  RadioCheckIc,
  RadioCheckedIc,
  BackIc,
  PlusIc,
  InputErrorIc,
  DropDownIc,
  DropUpIc,
  PasswordOpenEyeIc,
  PasswordEyeIc,
  LinkIc,
  PlaceIc,
  ClockIc
} from 'components/Icon/icon';
import { styled } from 'styled-components';

function ComponentTesting() {
  return (
    <>
      <Wrapper>
        <MainLogoIc />
        <IconWrapper>
          <HambergerIc />
        </IconWrapper>
        <IconWrapper>
          <ExitIc />
        </IconWrapper>
        <InputCancelIc />
        <InputErrorIc />
        <RadioCheckIc />
        <RadioCheckedIc />
        <IconWrapper>
          <BackIc />
        </IconWrapper>
        <PlusIc />
        <DropDownIc />
        <DropUpIc />
        <PasswordEyeIc />
        <PasswordOpenEyeIc />
        <IconWrapper>
          <LinkIc />
        </IconWrapper>
        <PlaceIc />
        <ClockIc />
      </Wrapper>
    </>
  );
}

export default ComponentTesting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  gap: 2rem;
`;

const IconWrapper = styled.div`
  background-color: black;
  padding: 12.35px 11px;
`;
