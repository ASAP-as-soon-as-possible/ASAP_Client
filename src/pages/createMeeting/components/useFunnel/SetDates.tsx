// import { useState } from 'react';

import './SetDates.css';

import { methodStateAtom } from 'atoms/atom';
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import { FunnelProps, MeetingInfo } from 'pages/createMeeting/types/useFunnelInterface';
import { Calendar, DateObject, getAllDatesInRange } from 'react-multi-date-picker';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const months = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
const dateRangeFormat = 'YYYY/MM/DD/ddd';
function SetDates({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
  const [multiple, setMultiple] = useRecoilState(methodStateAtom);
  return (
    <SetDatesWrapper>
      <DateSelectorWrapper>
        <InputContianer>
          <RangeInputBox $isClicked={multiple}>
            <Input
              id="range"
              type="radio"
              name="method"
              value="range"
              onClick={() => {
                setMultiple(false);
                setMeetingInfo((prev: MeetingInfo) => {
                  return { ...prev, availableDates: [] };
                });
              }}
              defaultChecked={!multiple}
            />
            <Label htmlFor="range">기간 지정</Label>
          </RangeInputBox>
          <MultipleInputBox $isClicked={multiple}>
            <Input
              id="multiple"
              type="radio"
              name="method"
              value="multiple"
              onClick={() => {
                setMultiple(true);
                setMeetingInfo((prev: MeetingInfo) => {
                  return { ...prev, availableDates: [] };
                });
              }}
              defaultChecked={multiple}
            />
            <Label htmlFor="multiple">날짜 지정</Label>
          </MultipleInputBox>
          <InputNotice $dateLength={meetingInfo.availableDates.length}>
            회의 날짜는 최대 7일까지 선택할 수 있어요.
          </InputNotice>
        </InputContianer>
        <CalendarWrapper>
          <Calendar
            value={meetingInfo.availableDates}
            months={months}
            shadow={false}
            showOtherDays
            weekDays={weekDays}
            headerOrder={['LEFT_BUTTON', 'YEAR_MONTH', 'RIGHT_BUTTON']}
            monthYearSeparator={'년 '}
            className="bg-dark"
            range={!multiple}
            multiple={multiple}
            minDate={new Date()}
            onChange={(dateObjects) => {
              if (dateObjects) {
                const newDate: string[] = [];
                if (multiple === false) {
                  const tmpArr = getAllDatesInRange(dateObjects as DateObject[]);
                  tmpArr.map((date) => {
                    const tempDate = (date as DateObject).format(dateRangeFormat);
                    const reformatDate = tempDate.toUpperCase();
                    // newDate.push((date as DateObject).format(dateRangeFormat));
                    newDate.push(reformatDate);
                  });
                  setMeetingInfo((prev: MeetingInfo) => {
                    return { ...prev, availableDates: newDate };
                  });
                } else if (multiple === true) {
                  (dateObjects as DateObject[]).map((date: DateObject) => {
                    const tempDate = (date as DateObject).format(dateRangeFormat);
                    const reformatDate = tempDate.toUpperCase();
                    // newDate.push((date as DateObject).format(dateRangeFormat));
                    newDate.push(reformatDate);
                  });
                  setMeetingInfo((prev: MeetingInfo) => {
                    return { ...prev, availableDates: newDate };
                  });
                }
                if (newDate.length > 7) {
                  setTimeout(() => {
                    setMeetingInfo((prev: MeetingInfo) => {
                      return { ...prev, availableDates: [] };
                    });
                  }, 1000);
                }
              }
            }}
          />
        </CalendarWrapper>
      </DateSelectorWrapper>
      <BottomBtnSection>
        <Button
          typeState={
            (meetingInfo.availableDates.length > 1 && meetingInfo.availableDates.length < 8) ||
            (multiple &&
              meetingInfo.availableDates.length > 0 &&
              meetingInfo.availableDates.length < 8)
              ? 'primaryActive'
              : 'primaryDisabled'
          }
          onClick={
            (meetingInfo.availableDates.length > 1 && meetingInfo.availableDates.length < 8) ||
            (multiple &&
              meetingInfo.availableDates.length > 0 &&
              meetingInfo.availableDates.length < 8)
              ? () =>
                  setStep((prev) => {
                    if (prev === 5) {
                      return prev;
                    }
                    return prev + 1;
                  })
              : undefined
          }
        >
          <Text font={'button2'}>다음</Text>
        </Button>
      </BottomBtnSection>
    </SetDatesWrapper>
  );
}

export default SetDates;

const SetDatesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DateSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RangeInputBox = styled.div<{ $isClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: left;
  border: 1px solid;
  border-radius: 0.8rem;
  border-color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.grey5 : theme.colors.main1};
  width: 100%;
  height: 5.2rem;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;
const Input = styled.input`
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='10' stroke='%23D9D9D9' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  width: 3.2rem;
  height: 2.2rem;
  margin-left: 1.5rem;
  cursor: pointer;
  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='11' fill='%233C49FF'/%3E%3Ccircle cx='11' cy='11' r='4' fill='white'/%3E%3C/svg%3E ");
  }
  &:checked + label {
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  height: 5rem;
  width: 100%;
  cursor: pointer;
  ${({ theme }) => theme.fonts.button1};
  color: ${({ theme }) => theme.colors.grey6};
`;

const MultipleInputBox = styled.div<{ $isClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: left;
  border: 1px solid;
  border-radius: 0.8rem;
  border-color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.main1 : theme.colors.grey5};
  background-color: transparent;
  width: 100%;
  height: 5.2rem;
  color: ${({ theme }) => theme.colors.white};
`;

const InputContianer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
  div:first-child {
    margin-bottom: 1.1rem;
  }
`;
const InputNotice = styled.span<{ $dateLength: number }>`
  margin-top: 1.2rem;
  margin-bottom: 1rem;
  ${({ theme }) => theme.fonts.body3};
  color: ${({ $dateLength, theme }) => ($dateLength > 7 ? theme.colors.red : theme.colors.sub1)};
  @keyframes vibration {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-0.2rem);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(0.2rem);
    }
    100% {
      transform: translateX(0);
    }
  }
  ${({ $dateLength }) => $dateLength > 7 && `animation: vibration 0.1s 5;`};
`;

const CalendarWrapper = styled.div`
  z-index: 0;
`;
