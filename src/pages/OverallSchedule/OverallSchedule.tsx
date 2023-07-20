import React, { useEffect, useState } from 'react';

import { availableDatesAtom, preferTimesAtom, timeSlotUserNameAtom } from 'atoms/atom';
import Text from 'components/atomComponents/Text';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { availableScheduleOptionApi } from 'utils/apis/availbleScheduleOptionApi';

import TimeTable from './components/TimeTable';
import { getFormattedAvailableDateTimes } from './utils/getFormattedAvailableDateTimes';

const data = {
  memberCount: 4,
  totalUserNames: ['심은서', '이재훈', '도소현', '정찬우'],
  availableDateTimes: [
    {
      month: '7',
      day: '20',
      dayOfWeek: '목',
      timeSlots: [
        {
          time: '19:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '19:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '20:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '20:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '21:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '21:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '22:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '22:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '23:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
      ],
    },
    {
      month: '7',
      day: '21',
      dayOfWeek: '금',
      timeSlots: [
        {
          time: '14:00',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '14:30',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '15:00',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '15:30',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '16:00',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '16:30',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '17:00',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '17:30',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '18:00',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '18:30',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '19:00',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '19:30',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '20:00',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '20:30',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '21:00',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '21:30',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '22:00',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '22:30',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '23:00',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
      ],
    },
    {
      month: '7',
      day: '17',
      dayOfWeek: '월',
      timeSlots: [
        {
          time: '10:00',
          userNames: ['정찬우'],
          colorLevel: 2,
        },
        {
          time: '10:30',
          userNames: ['정찬우'],
          colorLevel: 2,
        },
        {
          time: '11:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '11:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '12:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '12:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '13:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '13:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '14:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '14:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '15:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '15:30',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '16:00',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '16:30',
          userNames: ['이재훈'],
          colorLevel: 2,
        },
        {
          time: '17:00',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '17:30',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '18:00',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '18:30',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '19:00',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '19:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '20:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '20:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '21:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '21:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '22:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
      ],
    },
    {
      month: '7',
      day: '18',
      dayOfWeek: '화',
      timeSlots: [
        {
          time: '11:00',
          userNames: ['도소현', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '11:30',
          userNames: ['도소현', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '12:00',
          userNames: ['도소현', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '12:30',
          userNames: ['도소현', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '13:00',
          userNames: ['이재훈', '도소현', '정찬우'],
          colorLevel: 4,
        },
        {
          time: '13:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '14:00',
          userNames: ['이재훈', '도소현', '정찬우'],
          colorLevel: 4,
        },
        {
          time: '14:30',
          userNames: ['이재훈', '도소현', '정찬우'],
          colorLevel: 4,
        },
        {
          time: '15:00',
          userNames: ['이재훈', '도소현', '정찬우'],
          colorLevel: 4,
        },
        {
          time: '15:30',
          userNames: ['이재훈', '도소현', '정찬우'],
          colorLevel: 4,
        },
        {
          time: '16:00',
          userNames: ['심은서', '이재훈', '도소현', '정찬우'],
          colorLevel: 5,
        },
        {
          time: '16:30',
          userNames: ['심은서', '이재훈', '도소현', '정찬우'],
          colorLevel: 5,
        },
        {
          time: '17:00',
          userNames: ['심은서', '이재훈', '도소현', '정찬우'],
          colorLevel: 5,
        },
        {
          time: '17:30',
          userNames: ['심은서', '이재훈', '도소현', '정찬우'],
          colorLevel: 5,
        },
        {
          time: '18:00',
          userNames: ['심은서', '이재훈', '도소현', '정찬우'],
          colorLevel: 5,
        },
        {
          time: '18:30',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '19:00',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '19:30',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
        {
          time: '20:00',
          userNames: ['심은서', '이재훈'],
          colorLevel: 3,
        },
      ],
    },
    {
      month: '7',
      day: '19',
      dayOfWeek: '수',
      timeSlots: [
        {
          time: '11:00',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '11:30',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '12:00',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '12:30',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '13:00',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '13:30',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '14:00',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '14:30',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '15:00',
          userNames: ['심은서', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '15:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '16:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '16:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '17:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '17:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '18:00',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '18:30',
          userNames: ['심은서'],
          colorLevel: 2,
        },
        {
          time: '19:00',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '19:30',
          userNames: ['심은서', '이재훈', '도소현'],
          colorLevel: 4,
        },
        {
          time: '20:00',
          userNames: ['심은서', '이재훈', '도소현', '정찬우'],
          colorLevel: 5,
        },
        {
          time: '20:30',
          userNames: ['이재훈', '도소현', '정찬우'],
          colorLevel: 4,
        },
        {
          time: '21:00',
          userNames: ['이재훈', '도소현', '정찬우'],
          colorLevel: 4,
        },
        {
          time: '21:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '22:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '22:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '23:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '23:30',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
        {
          time: '24:00',
          userNames: ['이재훈', '정찬우'],
          colorLevel: 3,
        },
      ],
    },
  ],
};

const formattedAvailableDateTimes = getFormattedAvailableDateTimes(data);

const OverallSchedule = () => {
  const { meetingId } = useParams();
  const [availableDates, setAvailableDates] = useRecoilState(availableDatesAtom);

  const [preferTimes, setPreferTimes] = useRecoilState(preferTimesAtom);

  const [timeSlotUserNames, setTimeSlotUserNames] = useRecoilState(timeSlotUserNameAtom);
  const getAvailableScheduleOption = async () => {
    try {
      const { data } = await availableScheduleOptionApi(meetingId);
      setAvailableDates(data.data.availableDates);
      setPreferTimes(data.data.preferTimes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAvailableScheduleOption();
  }, []);

  return (
    <>
      <UserNameWrapper>
        {!timeSlotUserNames ? (
          <Text font={'body4'} color={`${theme.colors.grey5}`}>
            블럭을 선택하면 해당 시간대에 참여가능한<br />인원을 확인할 수 있어요
          </Text>
        ) : (
          timeSlotUserNames.map((name, idx) => (
            <Text key={idx + name} font={'body2'} color={`${theme.colors.grey2}`}>
              {name}
              {idx !== timeSlotUserNames.length - 1 ? ',' : ''}&nbsp;
            </Text>
          ))
        )}
      </UserNameWrapper>
      <TimeTable
        selectedSchedule={formattedAvailableDateTimes.availableDateTimes}
        availableDates={availableDates}
        preferTimes={preferTimes}
        scheduleType="available"
      />
    </>
  );
};

export default OverallSchedule;

const UserNameWrapper = styled.aside`
  display: flex;
  position: fixed;
  bottom: 1.2rem;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey7};
  width: 33.5rem;
  height: 8.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
