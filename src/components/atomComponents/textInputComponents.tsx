import React, { Dispatch, SetStateAction, useState } from 'react';

import { InputCancelIc, InputErrorIc } from 'components/Icon/icon';
import { DefaultTheme, styled } from 'styled-components';

interface ValueProps {
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  placeholder: string;
}

function TextInputComponents({ value, setValue, placeholder }: ValueProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const [foucs, setFocus] = useState(false)

  const iconClickFn = () => {
    console.log("Im Clicked")
  }

  return (
    <>
      <Wrapper>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          iserror={value?.length > 15}
        />
        {foucs && (
          <IconWrapper onClick={iconClickFn}>
            {value?.length > 15 ? <InputErrorIc /> : <InputCancelIc />}
          </IconWrapper>
        )
        }

      </Wrapper>
    </>
  );
}

export default TextInputComponents;

const Wrapper = styled.div`
  position: relative;

  input:focus + div {
    display: flex;
    svg{
    cursor: pointer; 
    width: fit-content;
    height: fit-content;
    }
  }
`;

const TextInput = styled.input<{ iserror: boolean }>`
  width: 30.3rem;
  padding: 1rem 1.6rem;
  height: 2rem;

  z-index: 0;

  border-radius: 0.8rem;
  border: 2px solid ${({theme})=>theme.colors.black};
  background: ${({theme})=>theme.colors.grey7};
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);

  caret-color: ${({theme})=>theme.colors.main1};

  position: relative;

  &:focus {
    outline: none;
    border: 2px solid ${({ iserror, theme }) => (iserror ? theme.colors.red : theme.colors.main1)};
  }
`;

const IconWrapper = styled.div`
    width :fit-content;
    height :fit-content;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.6rem;
    cursor:pointer;
`