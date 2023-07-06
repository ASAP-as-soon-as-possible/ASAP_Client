import React, { Dispatch, SetStateAction, useState } from 'react';

import { InputCancelIc, InputErrorIc } from 'components/Icon/icon';
import { styled } from 'styled-components';

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
  width: 303px;
  padding: 10px 16px;
  height: 20px;

  z-index: 0;

  border-radius: 8px;
  border: 2px solid #000;
  background: var(--asap-neutral-grey-7, #3f3f3f);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  caret-color: #3c49ff;

  position: relative;

  &:focus {
    outline: none;
    border: 2px solid ${({ iserror }) => (iserror ? '#DE4B44' : '#3c49ff')};;
  }
`;

const IconWrapper = styled.div`
    width :fit-content;
    height :fit-content;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    cursor:pointer;
`