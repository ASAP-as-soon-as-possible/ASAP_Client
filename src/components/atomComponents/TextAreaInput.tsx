import React, { Dispatch, SetStateAction } from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface MeetingInfo {
  title: string;
  availableDates: string[];
  preferTimes: {
    startTime: string;
    endTime: string;
  }[];
  place: string | undefined;
  placeDetail: string;
  duration: string;
  name: string;
  password: string;
  additionalInfo: string;
}


interface ValueProps {
  value: MeetingInfo;
  setValue: Dispatch<SetStateAction<MeetingInfo>>;
  placeholder: string;
}

function TextAreaInput({ value, setValue, placeholder }: ValueProps) {
  const textOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(e.target.value.length < 51) {
    setValue((prev : MeetingInfo) => {
      return { ...prev, additionalInfo: e.target.value };
    });
  }
  };

  return (
    <TextAreaWrapper>
      <StyledTextArea placeholder={placeholder} value={value.additionalInfo} onChange={textOnChange} maxLength={49}/>
      <CountingLetterSection>
        <Text font={'body3'} color={`${theme.colors.grey5}`} >{`(${value?.additionalInfo.length} / 50자)`}</Text>
      </CountingLetterSection>
    </TextAreaWrapper>
  );
}

export default TextAreaInput;

const TextAreaWrapper = styled.div`
  position:relative;
`;

const StyledTextArea = styled.textarea`
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.grey8};
  padding: 1.8rem;
  width: 33.5rem;
  height: 20.8rem;
  resize: none;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }
`;

const CountingLetterSection = styled.section`
  position:absolute;
  right:1.8rem;
  bottom:1.8rem;
`;
