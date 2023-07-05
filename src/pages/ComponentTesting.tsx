import TextInputComponents from 'components/atomComponents/textInputComponents';
import {
  BackBtn,
  DropDownBtn,
  DropUpBtn,
  ExitIcon,
  HambergerIcon,
  InputCancelBtn,
  InputErrorBtn,
  LinkIcon,
  MainLogo,
  PasswordEye,
  PasswordOpenEye,
  PlaceIcon,
  PlusBtn,
  RadioCheck,
  RadioChecked,
  Clock,
} from 'components/Icon/icon';
import { styled } from 'styled-components';

function ComponentTesting() {
  return (
    <>
      <Wrapper>
        <CategorySection>
          <h1>SVG Component</h1>
          <MainLogo />
          <IconWrapper>
            <HambergerIcon />
          </IconWrapper>
          <IconWrapper>
            <ExitIcon />
          </IconWrapper>
          <InputCancelBtn />
          <InputErrorBtn />
          <RadioCheck />
          <RadioChecked />
          <IconWrapper>
            <BackBtn />
          </IconWrapper>
          <PlusBtn />
          <DropDownBtn />
          <DropUpBtn />
          <PasswordEye />
          <PasswordOpenEye />
          <IconWrapper>
            <LinkIcon />
          </IconWrapper>
          <PlaceIcon />
          <Clock />
        </CategorySection>
        <CategorySection>
          <h1>ReuseComponents</h1>
          <TextInputComponents />
        </CategorySection>
      </Wrapper>
    </>
  );
}

export default ComponentTesting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  padding: 1rem;

  gap: 1rem;

  border: 2px solid black;
`;

const IconWrapper = styled.div`
  background-color: black;
  padding: 12.35px 11px;
`;
