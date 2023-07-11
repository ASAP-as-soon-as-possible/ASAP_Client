import React, { Dispatch, SetStateAction, useState } from 'react';

import Text from 'components/atomComponents/Text';
import { PasswordEyeIc, PasswordOpenEyeIc } from 'components/Icon/icon';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface MeetingInfo {
  title: string;
  availableDates: string[];
  preferTimes: {
    startTime: string;
    endTime: string;
  }[];
  place: string;
  placeDetail: string;
  duration: string;
  name: string;
  password: string;
  additionalInfo: string;
}

interface ValueProps {
  value: string;
  setValue: Dispatch<SetStateAction<MeetingInfo>>;
  placeholder: string;
}

function PasswordInput({ value, setValue, placeholder }: ValueProps) {
  const passWordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev : MeetingInfo) => {
      return { ...prev, password: e.target.value };
    });
  };

  const [inputType , setInputType] = useState(true)

  const changePasswordType = () => {
   setInputType((prev)=>!prev)
  }
  return (
    <>
      <PasswordInputWrapper>
        <InputSection>
          <StyledPasswordInput
            placeholder={placeholder}
            value={value}
            onChange={passWordOnChange}
            $iserror={value?.length < 4}
            type={inputType ? `password` : undefined}
          />
            <IconContainer onClick={changePasswordType}>
              {inputType ? <PasswordOpenEyeIc /> : <PasswordEyeIc />}
            </IconContainer>
        </InputSection>
          <SubTextSection>
            <Text font={"body4"} color={`${theme.colors.sub1}`}>* 확정 후 비밀번호는 수정할 수 없으며, 비밀번호가 있어야 방장 페이지에 접속할 수 있으니 반드시 기억해주세요!</Text>
          </SubTextSection>
      </PasswordInputWrapper>
    </>
  );
}

export default PasswordInput;

const PasswordInputWrapper = styled.div``

const InputSection = styled.div`
  display: flex;
  position: relative;
  flex-direction:column;

  input:focus + div {
    display: flex;
    svg{
      cursor: pointer; 
      width: fit-content;
      height: fit-content;
    }
  }
`;

const StyledPasswordInput = styled.input<{ $iserror: boolean }>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.black};

  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.grey7};
  padding: 1rem 1.6rem;

  width: 33.5rem;
  height: 5.2rem;

  caret-color: ${({ theme }) => theme.colors.main1};

  color : ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border: 2px solid ${({ $iserror, theme }) => ($iserror ? theme.colors.red : theme.colors.main1)};
  }
`;

const IconContainer = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    right: 1.6rem;
    transform: translateY(-50%);
    cursor:pointer;
    width :fit-content;
    height :fit-content;
`

const SubTextSection = styled.div` 
  margin-top: 0.9rem;

  span {
    font-weight: 600;
  }
`