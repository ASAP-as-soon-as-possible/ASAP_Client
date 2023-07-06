import React, { Dispatch, SetStateAction, useState } from 'react';

import Text from 'components/atomComponents/Text';
import { InputCancelIc, InputErrorIc } from 'components/Icon/icon';
import { styled } from 'styled-components';


interface ValueProps {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  placeholder: string;
}

function TextInput({ value, setValue, placeholder }: ValueProps) {
  const textOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const [focus, setFocus] = useState(false)

  const resetOnClick = () => {
    setFocus(false)
    setValue(``)
  }

  return (
    <>
      <Wrapper>
        <InputSection>
          <StyledTextInput
            placeholder={placeholder}
            value={value}
            onChange={textOnChange}
            onFocus={() => setFocus(true)}
            iserror={value?.length > 15}
          />
          {focus && (
            <IconContainer onClick={resetOnClick}>
              {value?.length > 15 ? <InputErrorIc /> : <InputCancelIc />}
            </IconContainer>
          )
          }
        </InputSection>
        {value?.length > 15 && (
          <SubTextSection>
            <Text font={"body4"}>공백포함 최대 15자까지 입력가능해요</Text>
          </SubTextSection>
         )
        }
      </Wrapper>
    </>
  );
}

export default TextInput;

const Wrapper = styled.div``

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

const StyledTextInput = styled.input<{ iserror: boolean }>`

  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.black};

  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.grey7};
  padding: 1rem 1.6rem;
  width: 30.3rem;
  height: 2rem;

  caret-color: ${({ theme }) => theme.colors.main1};

  &:focus {
    outline: none;
    border: 2px solid ${({ iserror, theme }) => (iserror ? theme.colors.red : theme.colors.main1)};
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
    color:${({ theme }) => theme.colors.red};
    font-weight: 600;
  }
`