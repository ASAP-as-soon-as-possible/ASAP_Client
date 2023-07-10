import React, { Dispatch, SetStateAction } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import TextAreaInput from 'components/atomComponents/TextAreaInput';
import TextInput from 'components/atomComponents/TextInput';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

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

const durationType = [
  "30분",
  "1시간",
  "1시간 30분",
  "2시간",
  "2시간 30분",
  "3시간"
]

function ReturnBodyComponent({ currentStep, meetingInfo, setMeetingInfo, setStep }: BodyProps) {

  console.log(meetingInfo)
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
        <DurationWrapper>
          {durationType.map((duration , i)=>{
            return (<Button key={i} typeState={`halfsecondaryDisabled`} >
            <Text font={'button2'}>{duration}</Text>
          </Button>)
          })}
        </DurationWrapper>
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
        <HostInfoWrapper>
          <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>방장 이름</Text>
          <TextInput
          value={meetingInfo.name}
          setValue={setMeetingInfo}
          placeholder={`호스트 이름`}
          />
          </HostNameSection>
        </HostInfoWrapper>
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

const DurationWrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap:1.1rem;

  justify-content:center;
`
const HostNameSection =styled.section`
  display: flex;
  flex-direction: column;
  gap:1rem;
`


const HostInfoWrapper = styled.div`

`