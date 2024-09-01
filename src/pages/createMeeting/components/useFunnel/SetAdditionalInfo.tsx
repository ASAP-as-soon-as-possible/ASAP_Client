import React from 'react';

import { isAxiosError } from 'axios';
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import TextAreaInput from 'components/common/atomComponents/TextAreaInput';
import BottomSheet from 'components/common/BottomSheet/BottomSheet';
import useModalState from 'components/common/Modal/hooks/useModalState';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { durationType, placeType, weekDayType } from 'pages/createMeeting/data/meetingInfoData';
import { FunnelProps, MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { createMeetingApi } from 'utils/apis/legacy/createMeetingApi';

function SetAdditionalInfo({ meetingInfo, setMeetingInfo }: FunnelProps) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useModalState(false);

  const textAreaOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 51) {
      setMeetingInfo((prev: MeetingInfo) => {
        return { ...prev, additionalInfo: e.target.value };
      });
    }
  };
  const createMeeting = async () => {
    try {
      const {
        data: { data },
      } = await createMeetingApi(meetingInfo);
      localStorage.setItem('hostToken', data.accessToken);
      navigate(`/meet/complete/${data.url}`);
    } catch (err) {
      if (isAxiosError(err) && err.response) {
        if (err.response.status === (400 || 500)) {
          console.log(err.response.data.message);
        } else {
          console.log(err.response.data.code);
        }
        navigate('/error');
      }
    }
  };

  const formatDate = (dateString: string) => {
    const [, month, day, dayOfWeek] = dateString.split('/');
    const formattedMonth = parseInt(month, 10);
    const formattedDay = parseInt(day, 10);
    return `${formattedMonth}/${formattedDay} (${weekDayType[dayOfWeek]})`;
  };

  const parseAvailableDates = (availableDates: string[]) => {
    const sortedDates = availableDates.sort();
    const [firstDate, lastDate] = [sortedDates[0], sortedDates[sortedDates.length - 1]];

    return `${formatDate(firstDate)} ~ ${formatDate(lastDate)}`;
  };

  return (
    <>
      <SetAdditionalInfoWrapper>
        <TextAreaInput
          value={meetingInfo.additionalInfo}
          setValue={textAreaOnChange}
          placeholder={'회의 안건, 준비물 등 회의와 관련하여 알리고 싶은 추가 내용을 적어 보세요.'}
        />
        <BottomBtnSection>
          <Button
            typeState={meetingInfo.additionalInfo ? 'primaryActive' : 'tertiaryActive'}
            onClick={onOpen}
          >
            <Text font={'button2'}>
              {meetingInfo.additionalInfo ? `회의방 생성하기` : `건너뛰기`}
            </Text>
          </Button>
        </BottomBtnSection>
      </SetAdditionalInfoWrapper>
      <BottomSheet isOpen={isOpen}>
        <BottomSheetDescription>
          <Text font={'head2'} color={'white'}>
            회의방을 생성하시겠어요?
          </Text>
          <Text font={'title2'} color={`${theme.colors.grey4}`}>
            입력한 회의 정보가 맞는지 확인해주세요
          </Text>
        </BottomSheetDescription>
        <BottomSheetContents>
        <MeetingInfoWrapper>
          <Text font="title1" color={theme.colors.white}>
            {meetingInfo.title}
          </Text>
          <MeetingInfoDetail>
            <MeetingInfoLine>
              <PlaceIcon />
              <Text font="body2" color={theme.colors.white}>
                {placeType[meetingInfo.place]}
              </Text>
            </MeetingInfoLine>
            <MeetingInfoLine>
              <DateIcon />
              <Text font="body2" color={theme.colors.white}>
                {parseAvailableDates(meetingInfo.availableDates)}
              </Text>
            </MeetingInfoLine>
            <MeetingInfoLine>
              <TimeIcon />
              <Text font="body2" color={theme.colors.white}>
                {durationType.find((item) => item.enum === meetingInfo.duration)?.time || ''}
              </Text>
            </MeetingInfoLine>
          </MeetingInfoDetail>
        </MeetingInfoWrapper>
        <MeetingInfoWrapper>
          <HostInfoDetail>
         <HostInfoLine>
         <Text font='body2' color={theme.colors.main1}>{'방장'.padEnd(5, 'ㅤ')}</Text>
         <Text font='body2' color={theme.colors.white}>{meetingInfo.name}</Text>
         </HostInfoLine>
         <HostInfoLine>
         <Text font='body2' color={theme.colors.main1}>{'비밀번호'.padEnd(5, 'ㅤ')}</Text>
         <Text font='body2' color={theme.colors.white}>{meetingInfo.password}</Text>
         </HostInfoLine>
         </HostInfoDetail>
        </MeetingInfoWrapper>
        </BottomSheetContents>
        <Button typeState={'primaryActive'} onClick={createMeeting}>
          <Text font={'button2'}>회의방 생성하기</Text>
        </Button>
        <Button typeState={'quaternaryDisabled'} onClick={onClose}>
          <Text font={'button2'}>돌아가기</Text>
        </Button>
      </BottomSheet>
    </>
  );
}

export default SetAdditionalInfo;

const SetAdditionalInfoWrapper = styled.div`
width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomSheetDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
`;

const BottomSheetContents = styled.div`
display:flex;
flex-direction:column;
gap:1.2rem;
  margin-bottom:28px;
  `

const MeetingInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.8rem 2.4rem;
  background-color:${theme.colors.grey7};
  border-radius:0.8rem;
  justify-content: center;

`;

const MeetingInfoDetail = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  padding:0;
`;

const MeetingInfoLine = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const HostInfoDetail = styled.ul`
display:flex;
flex-direction:column;
gap:4px;
justify-content:center;
padding:0;
`

const HostInfoLine = styled.li`
    display: flex;
  align-items: center;
  gap: 0.8rem;
`

const PlaceIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.676 2C7.45649 2 4.03505 5.30505 4.02292 9.38807H4L4.02157 9.42462C4.02157 16.3114 11.6504 22.0013 11.6504 22.0013C11.6504 22.0013 19.3291 16.1222 19.3291 9.41287C19.3304 5.3181 15.9036 2 11.676 2ZM11.6652 12.9907C9.54197 12.9907 7.82047 11.3238 7.82047 9.26798C7.82047 7.21211 9.54197 5.54523 11.6652 5.54523C13.7884 5.54523 15.5099 7.21211 15.5099 9.26798C15.5099 11.3238 13.7884 12.9907 11.6652 12.9907Z"
        fill="#3253FF"
      />
    </svg>
  );
};

const DateIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.75 4V7"
        stroke="#3253FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 4V7"
        stroke="#3253FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.97727 5.75H19.5227C19.9244 5.75 20.25 6.03491 20.25 6.38636V9.25H4.25V6.38636C4.25 6.03491 4.57561 5.75 4.97727 5.75ZM4.25 10.75V19.1136C4.25 19.4651 4.57561 19.75 4.97727 19.75H19.5227C19.9244 19.75 20.25 19.4651 20.25 19.1136V10.75H4.25Z"
        fill="#3253FF"
      />
    </svg>
  );
};

const TimeIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21C7.02944 21 3 16.9705 3 12C3 7.02944 7.02944 3 12 3C16.9705 3 21 7.02944 21 12C21 16.9705 16.9705 21 12 21ZM12.9 12V8.4C12.9 7.90294 12.4971 7.5 12 7.5C11.5029 7.5 11.1 7.90294 11.1 8.4V13.8H15.6C16.0971 13.8 16.5 13.3971 16.5 12.9C16.5 12.4029 16.0971 12 15.6 12H12.9Z"
        fill="#3253FF"
      />
    </svg>
  );
};
