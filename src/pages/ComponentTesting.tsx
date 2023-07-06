import { useState } from 'react';

import Button from 'components/atomComponents/button';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
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

  //TextInput component 사용시 useState 로 보내주기
  const [inputValue, setInputValue] = useState(``)

  return (
    <>
      <Wrapper>
        <CategorySection>
          <h1>SVG Component</h1>
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
        </CategorySection>
        <CategorySection>
          <h1>ReuseComponents</h1>
          <TextInput
            value={inputValue}
            setValue={setInputValue}
            placeholder={"서비스 기획 1차 회의"} />
        </CategorySection>
        <CategorySection>
          <h1>ReuseButton</h1>
          <Button typeState={"primaryActive"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
          <Button typeState={"primaryDisabled"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
          <Button typeState={"secondaryActive"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
          <Button typeState={"secondaryDisabled"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
          <Button typeState={"tertiaryActive"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
          <Button typeState={"tertiaryDisabled"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
          <Button typeState={"halfPrimaryActive"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
          <Button typeState={"halfTertiaryActive"}>
            <Text font={"button2"}>약속 생성하기</Text>
          </Button>
        </CategorySection>
        <CategorySection>
          <h1>TextComponents</h1>
          <Text font={"head1"}>Hello</Text>
          <Text font={"head2"}>Hello</Text>
          <Text font={"title1"}>Hello</Text>
          <Text font={"title2"}>Hello</Text>
          <Text font={"body1"}>Hello</Text>
          <Text font={"body2"}>Hello</Text>
          <Text font={"body3"}>Hello</Text>
          <Text font={"body4"}>Hello</Text>
          <Text font={"button1"}>Hello</Text>
          <Text font={"button2"}>Hello</Text>
        </CategorySection>
      </Wrapper>
    </>
  );
}

export default ComponentTesting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top:1rem;

  width:100%;
  height:80rem;
`;

const CategorySection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;

  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 1rem;

  height : 100%;
`;

const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 12.35px 11px;
`;
