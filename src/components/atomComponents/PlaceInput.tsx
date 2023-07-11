import React, { Dispatch, SetStateAction, useState } from 'react';

import Text from 'components/atomComponents/Text';
import { InputCancelIc, InputErrorIc } from 'components/Icon/icon';
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
  data : string;
  value: string;
  setValue: Dispatch<SetStateAction<MeetingInfo>>;
  placeholder: string;
}

function PlaceInput({ value, setValue, placeholder }: ValueProps) {

  const textOnChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev : MeetingInfo ) => {
      return { ...prev, placeDetail: e.target.value };
    });
  };

  const [focus, setFocus] = useState(false)

  const resetOnClick = () => {
    setFocus(false)
    setValue((prev : MeetingInfo) => {
      return { ...prev, placeDetail: ``};
    });
  }

  return (
    <>
      <PlaceInputWrapper>
        <InputSection>
          <StyledTextInput
            placeholder={placeholder}
            value={value}
            onChange={textOnChange}
            onFocus={() => setFocus(true)}
            $iserror={value?.length > 15}
          />
          {focus && (
            <IconContainer onClick={resetOnClick}>
              <InputCancelIc />
            </IconContainer>
          )
          }
        </InputSection>
      </PlaceInputWrapper>
    </>
  );
}

export default PlaceInput;

const PlaceInputWrapper = styled.div``

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

const StyledTextInput = styled.input<{ $iserror: boolean }>`
  position: relative;
  outline: none;
  /* border: 2px solid ${({ theme }) => theme.colors.black}; */
  border:none;
  border-bottom :2px solid ${({ theme }) => theme.colors.grey4};
  background-color: transparent;

  padding: 1rem 1.6rem;

  width: 33.5rem;
  height: 5.2rem;

  color : ${({ theme }) => theme.colors.white};

  caret-color: ${({ theme }) => theme.colors.main1};


  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ $iserror, theme }) => ($iserror ? theme.colors.red : theme.colors.main1)};
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