import React, { useEffect, useState } from 'react';
import { availableDatesAtom, preferTimesAtom, timeSlotUserNameAtom } from 'atoms/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

import LoadingPage from 'pages/errorLoading/LoadingPage';
import { OverallScheduleData } from 'src/types/overallScheduleType';
import Text from 'components/atomComponents/Text';
import TimeTable from './components/TimeTable';
import { availableScheduleOptionApi } from 'utils/apis/legacy/availbleScheduleOptionApi';
import { getFormattedAvailableDateTimes } from './utils/getFormattedAvailableDateTimes';
import { overallScheduleApi } from 'utils/apis/legacy/overallScheduleApi';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { useParams } from 'react-router-dom';

const OverallSchedule = () => {
  const { meetingId } = useParams();
  const [overallScheduleData, setOverallScheduleData] = useState<OverallScheduleData>();

  const [availableDates, setAvailableDates] = useRecoilState(availableDatesAtom);

  const [preferTimes, setPreferTimes] = useRecoilState(preferTimesAtom);

  const timeSlotUserNames = useRecoilValue(timeSlotUserNameAtom);

  const [memberCount, setMemberCount] = useState<number>(0);
  const [totalUserNames, setTotalUserNames] = useState<string[]>();

  const getAvailableScheduleOption = async () => {
    try {
      const { data } = await availableScheduleOptionApi(meetingId);
      setAvailableDates(data.data.availableDates);
      setPreferTimes(data.data.preferTimes);
    } catch (err) {
      console.log(err);
    }
  };


  const getOverallSchedule = async () => {
    try {
      const result = await overallScheduleApi(meetingId);
      const { data } = result.data;
      const uniqueData = [...new Set(data.totalUserNames)];
      setOverallScheduleData(data);
      setMemberCount(data.memberCount);
      setTotalUserNames(uniqueData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAvailableScheduleOption();
    getOverallSchedule();
  }, []);

  const formattedAvailableDateTimes =
  overallScheduleData && getFormattedAvailableDateTimes(overallScheduleData);

  return (
    <OverallScheduleWrapper>
      {overallScheduleData ? (
        <>
          <TextOneLine>
            <Text font={'title1'} color={`${theme.colors.white}`}>
              현재까지&nbsp;
            </Text>
            <Text font={'title1'} color={`${theme.colors.sub1}`}>
              {memberCount.toString()}명
            </Text>
            <Text font={'title1'} color={`${theme.colors.white}`}>
              이 입력했어요
            </Text>
          </TextOneLine>
          <TotalUserNames>
            {totalUserNames &&
              totalUserNames.map((name, idx) => (
                <Text key={idx + name} font={'body4'} color={`${theme.colors.grey5}`}>
                  {name}
                  {idx !== totalUserNames.length - 1 ? ',' : ''}&nbsp;
                </Text>
              ))}
          </TotalUserNames>
          <TimeTable
            selectedSchedule={formattedAvailableDateTimes?.availableDateTimes}
            availableDates={availableDates}
            preferTimes={preferTimes}
            scheduleType="available"
          />
          <UserNameWrapper>
            {!timeSlotUserNames ? (
              <TextTwoLine>
              <Text font={'body4'} color={`${theme.colors.grey5}`}>
                블럭을 선택하면 해당 시간대에 참여가능한
              </Text>
              <Text font={'body4'} color={`${theme.colors.grey5}`}>
                인원을 확인할 수 있어요
              </Text>
              </TextTwoLine>
            ) : (
              timeSlotUserNames.map((name, idx) => (
                <Text key={idx + name} font={'body2'} color={`${theme.colors.grey2}`}>
                  {name}
                  {idx !== timeSlotUserNames.length - 1 ? ',' : ''}&nbsp;
                </Text>
              ))
            )}
          </UserNameWrapper>
        </>
      ) : (
        <LoadingWrapper>
          <LoadingPage />
        </LoadingWrapper>
      )}
    </OverallScheduleWrapper>
  );
};

export default OverallSchedule;

const UserNameWrapper = styled.aside`
  display: flex;
  position: fixed;
  bottom: 4.4rem;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey9};
  width: 33.5rem;
  min-height: 8.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const OverallScheduleWrapper = styled.main`
  margin-bottom: 16.1rem;
`;

const TextOneLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.7rem;
  width: 100%;
`;

const TotalUserNames = styled.div`
  display: flex;
  margin-top: 1.2rem;
  margin-bottom: 2.4rem;
`;

const LoadingWrapper = styled.div`
  position: relative;
  top: 25rem;
  width: 100%;
`;

const TextTwoLine = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
`