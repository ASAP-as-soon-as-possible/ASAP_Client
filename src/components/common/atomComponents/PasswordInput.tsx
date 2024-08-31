import React, { useState } from 'react';

import Text from 'components/common/atomComponents/Text';
import { PasswordEyeIc, PasswordOpenEyeIc } from 'components/Icon/icon';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ValueProps {
  value: string;
  placeholder: string;
  passWordOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  page: string;
}

function PasswordInput({ value, placeholder, passWordOnChange, page }: ValueProps) {
  const [inputType, setInputType] = useState(true);

  const changePasswordType = () => {
    setInputType((prev) => !prev);
  };
  return (
    <PasswordInputWrapper>
      <InputSection>
        <StyledPasswordInput
          placeholder={placeholder}
          value={value}
          onChange={passWordOnChange}
          $iserror={value.length < 4 || value.length > 8}
          type={inputType ? 'password' : `number`}
          inputMode="numeric"
        />
        <IconContainer onClick={changePasswordType}>
          {inputType ? <PasswordOpenEyeIc /> : <PasswordEyeIc />}
        </IconContainer>
      </InputSection>
      {page === 'createMeeting' ? (
        <>
          {value.length > 8 && (
            <InvalidPWTextSection>
              <Text font={'body4'} color={theme.colors.red}>
                최대 8자리까지 입력 가능해요{' '}
              </Text>
            </InvalidPWTextSection>
          )}

          <SubTextSection>
            <Text font={'body4'} color={`${theme.colors.sub1}`}>
              *
            </Text>
            <Text font={'body4'} color={`${theme.colors.sub1}`}>
              확정 후 비밀번호는 수정할 수 없으며, 비밀번호가 있어야 방장 페이지에 접속할 수 있으니
              반드시 기억해주세요!
            </Text>
          </SubTextSection>
        </>
      ) : (
        undefined
      )}
    </PasswordInputWrapper>
  );
}

export default PasswordInput;

const PasswordInputWrapper = styled.div``;

const InputSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  input:focus + div {
    display: flex;
    svg {
      width: fit-content;
      height: fit-content;
      cursor: pointer;
    }
  }
`;

const StyledPasswordInput = styled.input<{ $iserror: boolean }>`
  position: relative;
  border: none;

  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.grey7};
  padding: 1rem 1.6rem;

  width: 100%;
  height: 5.2rem;

  caret-color: ${({ theme }) => theme.colors.main1};

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body3};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey4};
  }

  &:focus {
    border: 2px solid ${({ $iserror, theme }) => ($iserror ? theme.colors.red : theme.colors.main1)};
    outline: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);
  cursor: pointer;
  width: fit-content;
  height: fit-content;
`;

const SubTextSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  align-items: flex-start;
  margin-top: 1.7rem;

  span {
    font-weight: 600;
  }
`;

const InvalidPWTextSection = styled.div`
  margin-top: 0.9rem;

  span {
    font-weight: 600;
  }
`;
