import React from 'react';

import Text from 'components/common/atomComponents/Text';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ValueProps {
  value: string;
  setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

function TextAreaInput({ value, setValue, placeholder }: ValueProps) {
  return (
    <TextAreaWrapper>
      <StyledTextArea placeholder={placeholder} value={value} onChange={setValue} maxLength={50} />
      <CountingLetterSection>
        <Text font={'body3'} color={`${theme.colors.grey5}`}>{`(${value.length} / 50자)`}</Text>
      </CountingLetterSection>
    </TextAreaWrapper>
  );
}

export default TextAreaInput;

const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const StyledTextArea = styled.textarea`
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey8};
  padding: 1.8rem;
  width: 100%;
  height: 20.8rem;
  resize: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body3};

  &:focus {
    outline: none;
  }
`;

const CountingLetterSection = styled.section`
  position: absolute;
  right: 1.8rem;
  bottom: 1.8rem;
`;
