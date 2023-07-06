import React, { useState } from 'react';

import TextInputComponents from 'components/atomComponents/textInputComponents';
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
          <TextInputComponents
            value={inputValue}
            setValue={setInputValue}
            placeholder={"서비스 기획 1차 회의"} />
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
