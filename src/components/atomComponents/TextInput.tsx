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

function TextInput({ data , value, setValue, placeholder }: ValueProps) {

  const textOnChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev : MeetingInfo ) => {
      return { ...prev, title: e.target.value };
    });
  };

  const hostOnChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev : MeetingInfo ) => {
      return { ...prev, name: e.target.value };
    });
  };

  const [focus, setFocus] = useState(false)

  const resetOnClick = () => {
    setFocus(false)
    setValue((prev : MeetingInfo) => {
      return { ...prev, title: ``};
    });
  }

  return (
    <>
      <TextInputWrapper>
        <InputSection>
          <StyledTextInput
            placeholder={placeholder}
            value={value}
            onChange={data === "title" ? textOnChange : hostOnChange}
            onFocus={() => setFocus(true)}
            $iserror={value?.length > 15}
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
            <Text font={"body4"} color={`${theme.colors.red}`}>공백포함 최대 15자까지 입력가능해요</Text>
          </SubTextSection>
        )
        }
      </TextInputWrapper>
    </>
  );
}

export default TextInput;

const TextInputWrapper = styled.div``

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
  border: 2px solid ${({ theme }) => theme.colors.black};

  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.grey7};
  padding: 1rem 1.6rem;

  width: 33.5rem;
  height: 5.2rem;

  caret-color: ${({ theme }) => theme.colors.main1};

  color : ${({ theme }) => theme.colors.white};

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
    cursor:pointer;
    width :fit-content;
    height :fit-content;
`

const SubTextSection = styled.div` 
  margin-top: 0.9rem;

  span {
    font-weight: 600;
  }
`