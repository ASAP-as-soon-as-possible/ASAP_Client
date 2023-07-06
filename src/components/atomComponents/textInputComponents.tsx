import React, { Dispatch, SetStateAction } from 'react';

import { InputCancelBtn } from 'components/Icon/icon';
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

  return (
    <>
      <Wrapper>
        <TextInput placeholder={placeholder} value={value} onChange={handleChange} />
        <IconWrapper onClick={() => setValue("")}>
          <InputCancelBtn />
        </IconWrapper>
      </Wrapper>
    </>
  );
}

export default TextInputComponents;

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

const Wrapper = styled.div`
  position: relative;

  input:focus + div {
    svg{
    display: flex;
    cursor: pointer; 
    }
  }
`;

const TextInput = styled.input`
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
    border: 2px solid #3c49ff;
  }
`;