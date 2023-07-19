import { DateStates, ScheduleStates, TimeStates } from './types/Schedule';
import { PlusIc, SpeechBubbleIc } from 'components/Icon/icon';
import React, { useEffect, useRef, useState } from 'react';
import { availableDatesAtom, preferTimesAtom } from 'atoms/atom';

import Button from 'components/atomComponents/Button';
import Header from 'components/moleculesComponents/Header';
import { MeetingDetail } from 'src/types/availbleScheduleType';
import SelectSchedule from './components/SelectSchedule';
import Text from 'components/atomComponents/Text';
import TimeTable from 'components/scheduleComponents/components/TimeTable';
import TitleComponent from 'components/moleculesComponents/TitleComponents';
import TitleComponents from 'components/moleculesComponents/TitleComponents';
import { availbleScheduleOptionApi } from 'utils/apis/availbleScheduleOptionApi';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

function SelectPage() {
  // 가능시간 선택지 - 날짜
  const [availableDates, setAvailableDates] = useRecoilState(availableDatesAtom);

  const [preferTimes, setPreferTimes] = useRecoilState(preferTimesAtom);

  const [meetingDetail, setMeetingDetail] = useState<MeetingDetail>({
    duration: '',
    place: '',
    placeDetail: '',
  });

  const {meetingId} = useParams();

  const changeDurationFormat = (duration:string) => {
    switch(duration){
      case "HALF":
        return "30분";
      case "HOUR":
        return "1시간";
      case "HOUR_HALF":
        return "1시간 30분";
      case "TWO_HOUR":
        return "2시간";
      case "TWO_HOUR_HALF":
        return "2시간 30분";
      case "THREE_HOUR":
        return "3시간";
    }
  }

  const changePlaceFormat = (place:string) => {
    switch(place){
      case "ONLINE":
        return "온라인";
      case "OFFLINE":
        return "오프라인";
      case "UNDEFINED":
        return undefined;
    }
  }


  const getAvailableScheduleOption = async() => {
    try{
      const {
        data
      } = await availbleScheduleOptionApi(meetingId);
      setAvailableDates(data.data.availableDates);
      setPreferTimes(data.data.preferTimes);

      const {duration, place, placeDetail} = data.data;
      setMeetingDetail({duration:changeDurationFormat(duration), place:changePlaceFormat(place), placeDetail:placeDetail});
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getAvailableScheduleOption();
  },[]);

  const [scheduleList, setScheduleList] = useState<ScheduleStates[]>([
    {
      id: 1,
      date: '',
      startTime: '',
      endTime: '',
      priority: 0,
    },
  ]);

  const nextID = useRef<number>(2);

  const addDateList = () => {
    const schedule = {
      id: nextID.current,
      date: '',
      startTime: '',
      endTime: '',
      priority: 0,
    };
    setScheduleList([...scheduleList, schedule]);
    nextID.current += 1;
  };

  const deleteDataList = (index: number) => {
    setScheduleList(scheduleList.filter((item) => item?.id !== index));
  };

  const validateScheduleList = (list: ScheduleStates[]): boolean => {
    return list.every((item) => {
      return item.id !== undefined && item.date !== '' && item.startTime !== '' && item.endTime !== '' && item.priority !== undefined;
    });
  };

  const isScheduleListValid = validateScheduleList(scheduleList);

  return (
    <SelectPageWrapper>
      <Header position={'schedule'} />
      <SpeechBubbleWrapper>
        <TextWrapper>
          {
            meetingDetail.place ? (
              <>
                <TextOneLine>
                  <Text font={'body1'} color={`${theme.colors.grey1}`}>
                    회의는&nbsp;
                  </Text>
                  <Text font={'body1'} color={`${theme.colors.sub1}`}>
                    {meetingDetail.duration}&nbsp;
                  </Text>
                  <Text font={'body1'} color={`${theme.colors.grey1}`}>
                    동안
                  </Text>
                </TextOneLine>
                <TextSeveralLines>
                  <Text font={'body1'} color={`${theme.colors.sub1}`}>
                    {meetingDetail.place}
                  </Text>
                  {meetingDetail.placeDetail && (
                    <Text font={'body1'} color={`${theme.colors.sub1}`}>
                      {`(${meetingDetail.placeDetail})`}
                    </Text>
                  )
                  }
                  <Text font={'body1'} color={`${theme.colors.grey1}`}>
                    으로 진행될 예정이에요!
                  </Text>
                </TextSeveralLines>
              </>
            ) :
            <TextOneLine>
              <Text font={'body1'} color={`${theme.colors.grey1}`}>
                회의는&nbsp;
              </Text>
              <Text font={'body1'} color={`${theme.colors.sub1}`}>
              {meetingDetail.duration}&nbsp;
            </Text>
            <Text font={'body1'} color={`${theme.colors.grey1}`}>
              동안 진행될 예정이에요!
            </Text>
            </TextOneLine>
          }
        </TextWrapper>
      {/* <SpeechBubbleIc/> */}
      </SpeechBubbleWrapper>
      <TitleWrapper>
      <Text font={'head2'} color={`${theme.colors.white}`}>
        {'가능한 시간을 알려주세요'}
      </Text>
      <Text font={'body3'} color={`${theme.colors.grey4}`}>
        {'아래 추가 버튼을 눌러 가능한 시간을 입력해주세요'}
      </Text>
    </TitleWrapper>
      <TimeTable selectedSchedule={scheduleList} availableDates={availableDates} preferTimes={preferTimes} scheduleType="available" />
      <SelectSchedule
        availableDates={availableDates}
        preferTimes={preferTimes}
        scheduleList={scheduleList}
        setScheduleList={setScheduleList}
        deleteData={deleteDataList}
      />
      <PlusButton onClick={addDateList} type="button">
        <PlusIc />
      </PlusButton>
      <StyledBtnSection>
        <Button
          typeState={
            isScheduleListValid
              ? 'primaryActive'
              : 'secondaryDisabled'
          }
          onClick={
            () => {console.log('click')}
          }
        >
          <Text font={'button2'}>다음</Text>
        </Button>
      </StyledBtnSection>
    </SelectPageWrapper>
  );
}

const SelectPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlusButton = styled.button`
  margin-top: 3.2rem;
  margin-bottom: 12.2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey2};
  width: 33.5rem;
  height: 5.2rem;
`;

const TextOneLine = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
`

const TextSeveralLines = styled.div`
  display:flex;
  flex-wrap:wrap;
`

const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  border-radius:0.8rem;
  background-color: ${theme.colors.grey9};
  padding:1.5rem 2.4rem;
  width:33.5rem;
`

const SpeechBubbleWrapper = styled.div`
    display: flex;
    position: relative;
    margin-top:2rem;
   
`

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1.2rem;

  padding: 3.2rem 0 3.2rem 0;
  width: 100%;
`;

const StyledBtnSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;


export default SelectPage;
