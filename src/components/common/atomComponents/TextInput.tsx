import React, { useState } from 'react';

import Text from 'components/common/atomComponents/Text';
import { InputCancelIc, InputErrorIc } from 'components/Icon/icon';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ValueProps {
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetValue: () => void;
  max: number;
  placeholder: string;
}

function TextInput({ value, setValue, resetValue, max, placeholder }: ValueProps) {
  const [focus, setFocus] = useState(false);

  const resetOnClick = () => {
    resetValue();
    setFocus(false);
  };
  return (

      <TextInputWrapper>
        <InputSection>
          <StyledTextInput
            placeholder={placeholder}
            value={value}
            onChange={setValue}
            onFocus={() => setFocus(true)}
            $iserror={value?.length > max}
          />
          {focus && (
            <IconContainer onClick={resetOnClick}>
              {value && value.length > max ? <InputErrorIc /> : <InputCancelIc />}
            </IconContainer>
          )}
        </InputSection>
        {value &&
          value.length > max && (
            <SubTextSection>
              <Text font={'body4'} color={`${theme.colors.red}`}>
                {`공백포함 최대 ${String(max)}자까지 입력가능해요`}
              </Text>
            </SubTextSection>
          )}
      </TextInputWrapper>

  );
}

export default TextInput;

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
width: 100%;
  input:focus + div {
    display: flex;
    svg {
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
  }
`;

const StyledTextInput = styled.input<{ $iserror: boolean }>`
  position: relative;
  border:none;

  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.grey7};
  padding: 1rem 1.6rem;

  width: 100%;
  max-width: 39rem;
  height: 5.2rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body3};

  caret-color: ${({ theme }) => theme.colors.main1};
  &::placeholder{
    color:${({theme})=>theme.colors.grey4}
  }

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
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;

const SubTextSection = styled.div`
  margin-top: 0.9rem;

  span {
    font-weight: 600;
  }
`;
