import React, { Dispatch, SetStateAction, useState } from 'react';

import { InputCancelIc, InputErrorIc } from 'components/Icon/icon';
import { MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';
import styled from 'styled-components';

interface ValueProps {
  data: string;
  value: string;
  setValue: Dispatch<SetStateAction<MeetingInfo>>;
  placeholder: string;
}

function PlaceInput({ value, setValue, placeholder }: ValueProps) {
  const textOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev: MeetingInfo) => {
      return { ...prev, placeDetail: e.target.value };
    });
  };

  const [focus, setFocus] = useState(false);

  const resetOnClick = () => {
    setFocus(false);
    setValue((prev: MeetingInfo) => {
      return { ...prev, placeDetail: `` };
    });
  };

  return (
    <>
      <PlaceInputWrapper>
        <InputSection>
          <StyledTextInput
            placeholder={placeholder}
            value={value}
            onChange={textOnChange}
            onFocus={() => setFocus(true)}
            $iserror={value.length > 15}
          />
          {focus && (
            <IconContainer onClick={resetOnClick}>
              {value.length > 15 ? <InputErrorIc /> : <InputCancelIc />}
            </IconContainer>
          )}
        </InputSection>
      </PlaceInputWrapper>
    </>
  );
}

export default PlaceInput;

const PlaceInputWrapper = styled.div`
  width: 100%;
`;

const InputSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  input:focus + div {
    display: flex;
    svg {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
`;

const StyledTextInput = styled.input<{ $iserror: boolean }>`
  position: relative;
  outline: none;

  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey4};
  background-color: transparent;

  padding: 1rem 1.6rem;

  width: 100%;
  height: 5.2rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body3};

  caret-color: ${({ theme }) => theme.colors.main1};

  &:focus {
    border-bottom: 2px solid
      ${({ $iserror, theme }) => ($iserror ? theme.colors.red : theme.colors.main1)};
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
  width: 2rem;
  height: 2rem;
`;
