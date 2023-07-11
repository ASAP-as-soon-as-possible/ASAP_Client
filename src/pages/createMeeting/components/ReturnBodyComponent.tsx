import React, { Dispatch, SetStateAction } from 'react';

import Button from 'components/atomComponents/Button';
import PasswordInput from 'components/atomComponents/PasswordInput';
import PlaceInput from 'components/atomComponents/PlaceInput';
import Text from 'components/atomComponents/Text';
import TextAreaInput from 'components/atomComponents/TextAreaInput';
import TextInput from 'components/atomComponents/TextInput';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import { durationType, placeType } from '../data/MeetingInfoData';
import { MeetingInfo } from '../types/useFunnelInterface';

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

  console.log(meetingInfo)

  const setPlaceDetail = (place: string) => {
    setMeetingInfo((prev) => ({ ...prev, place ,placeDetail: ""}));
  };

  const BodyType: BodyType = {
    title: (
      <>
        <TextInput
          data={"title"}
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
    )
    ,
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
        <PlaceInfoWrapper>
          {placeType.map((type , i)=>{
            return (<PlaceSetion key={i+type}>
                      <Button typeState={meetingInfo?.place === type ? 'primaryActive' : 'secondaryDisabled'} onClick={()=>setPlaceDetail(type)}>
                          <Text font={'button2'}>{type === "ONLINE"?"온라인": type ==="OFFLINE"?"오프라인":"미정"}</Text>
                      </Button>
                      {type === "UNDEFIND" ? null : meetingInfo?.place === type ? <PlaceInput
                        data={type}
                        value={meetingInfo.placeDetail}
                        setValue={setMeetingInfo}
                        placeholder={type === "ONLINE"?"(선택) 화상 회의 툴을 입력해주세요":"(선택) 구체적인 장소명을 입력해주세요"}
                      /> : null
                      }
                  </PlaceSetion>)
          })}
        </PlaceInfoWrapper>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo.place ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
                meetingInfo.place
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
            return (<Button key={i+duration} typeState={meetingInfo.duration === duration ? `halfPrimaryActive`:`halfsecondaryDisabled`} onClick={()=>{
              setMeetingInfo((prev : MeetingInfo) => {
                return { ...prev, duration: duration };
              });
            }} >
            <Text font={'button2'}>{duration}</Text>
          </Button>)
          })}
        </DurationWrapper>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.duration ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
              meetingInfo?.duration
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
          data={`name`}
          value={meetingInfo.name}
          setValue={setMeetingInfo}
          placeholder={`호스트 이름`}
          />
          </HostNameSection>
          <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>방 비밀번호</Text>
          <PasswordInput
          value={meetingInfo.password}
          setValue={setMeetingInfo}
          placeholder={`비밀번호`}
          />
          </HostNameSection>
        </HostInfoWrapper>
        <StyledBtnWrapper>
          <Button
            typeState={meetingInfo?.name && meetingInfo?.password.length >= 4 ? 'primaryActive' : 'secondaryDisabled'}
            onClick={
              meetingInfo?.name && meetingInfo?.password.length >= 4
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
  display:flex;
  flex-direction: column;
  gap:3.4rem;
  padding : 0 2rem;
`

const PlaceInfoWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap:1rem;
`

const PlaceSetion = styled.section`

`