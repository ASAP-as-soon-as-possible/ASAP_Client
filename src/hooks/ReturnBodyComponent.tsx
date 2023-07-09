import React, { Dispatch, SetStateAction } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import TextAreaInput from 'components/atomComponents/TextAreaInput';
import TextInput from 'components/atomComponents/TextInput';
import styled from 'styled-components/macro';

interface MeetingInfo {
    title: string;
    availableDates: string[];
    preferTimes: {
      startTime: string;
      endTime: string;
    }[];
    place: string;
    placeDetail: string;
    duration: string;
    name: string;
    password: string;
    additionalInfo: string;
  }

interface BodyProps {
  currentStep: string;
  meetingInfo: MeetingInfo;
  setMeetingInfo: Dispatch<SetStateAction<MeetingInfo>>;
  setStep: Dispatch<SetStateAction<number>>;
}

type BodyType = {
  [key: string]: React.JSX.Element;
};

function ReturnBodyComponent({ currentStep, meetingInfo, setMeetingInfo, setStep }: BodyProps) {

  const BodyType: BodyType = {
    title: (
      <>
        <TextInput
          value={meetingInfo.title}
          setValue={setMeetingInfo}
          placeholder={'서비스 기획 1차 회의'}
        />
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.title && meetingInfo?.title.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo?.title && meetingInfo?.title?.length < 16
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    availableDates: (
        <>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.title && meetingInfo?.title.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo?.title && meetingInfo?.title?.length < 16
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    preferTimes: (
        <>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.title && meetingInfo?.title.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo?.title && meetingInfo?.title?.length < 16
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    place: (
        <>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.title && meetingInfo?.title.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo?.title && meetingInfo?.title?.length < 16
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    duration: (
        <>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.title && meetingInfo?.title.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo?.title && meetingInfo?.title?.length < 16
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    hostInfo: (
        <>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.title && meetingInfo?.title.length < 16 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo?.title && meetingInfo?.title?.length < 16
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>다음</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
    additionalInfo: (
      <>
        <TextAreaInput
          value={meetingInfo}
          setValue={setMeetingInfo}
          placeholder={'회의 안건, 준비물 등 회의와 관련하여 알리고 싶은 추가 내용을 적어 보세요.'}
        />
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo.additionalInfo ? 'primaryActive' : 'tertiaryActive'}
            onClick={
                meetingInfo.additionalInfo
                ? () =>
                    setStep((prev) => {
                      if (prev === 6) {
                        return prev;
                      }
                      return prev + 1;
                    })
                : undefined
            }
          >
            <Text font={'button2'}>{meetingInfo.additionalInfo ? `회의  생성하기`: `건너뛰기`}</Text>
          </Button>
        </StyledBtnWrapper>
      </>
    ),
  };

  return <ReturnBodyComponentWrapper>{BodyType[currentStep]}</ReturnBodyComponentWrapper>;
}

export default ReturnBodyComponent;

const ReturnBodyComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledBtnWrapper = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;
