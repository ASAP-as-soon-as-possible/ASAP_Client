// import { useState } from 'react';

import { methodStateAtom } from 'atoms/atom';
import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { MeetingInfo, FunnelProps } from 'pages/createMeeting/types/useFunnelInterface';
import { Calendar, DateObject, getAllDatesInRange } from 'react-multi-date-picker';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/macro';

import './SetDates.css';

function SetDates({ meetingInfo, setMeetingInfo, setStep }: FunnelProps) {
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
  // const [multiple, setMultiple] = useState(false);
  const [multiple, setMultiple] = useRecoilState(methodStateAtom);
  console.log(meetingInfo);
  console.log(multiple);
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
          <InputNotice>회의 날짜는 최대 7일까지 선택할 수 있어요.</InputNotice>
        </InputContianer>
        <CalendarWrapper>
          <Calendar
            value={meetingInfo.availableDates}
            months={months}
            weekDays={weekDays}
            className="bg-dark"
            range={!multiple}
            multiple={multiple}
            onChange={(dateObjects) => {
              if (dateObjects) {
                if (multiple == false) {
                  const tmpArr = getAllDatesInRange(dateObjects as DateObject[]);
                  const newDate: string[] = [];
                  tmpArr.map((date) => {
                    newDate.push((date as DateObject).format(dateRangeFormat));
                  });
                  setMeetingInfo((prev: MeetingInfo) => {
                    return { ...prev, availableDates: newDate };
                  });
                } else if (multiple == true) {
                  const newDate: string[] = [];
                  (dateObjects as DateObject[]).map((date: DateObject) => {
                    newDate.push(date.format(dateRangeFormat));
                  });
                  setMeetingInfo((prev: MeetingInfo) => {
                    return { ...prev, availableDates: newDate };
                  });
                }
              }
            }}
          />
        </CalendarWrapper>
      </DateSelectorWrapper>
      <StyledBtnSection>
        <Button
          typeState={
            meetingInfo.availableDates.length > 1 ||
            (meetingInfo.availableDates.length > 0 && multiple)
              ? 'primaryActive'
              : 'secondaryDisabled'
          }
          onClick={
            meetingInfo.availableDates.length > 1 ||
            (meetingInfo.availableDates.length > 0 && multiple)
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
      </StyledBtnSection>
    </SetDatesWrapper>
  );
}

export default SetDates;

const SetDatesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBtnSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
  z-index: 3;
`;
const DateSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RangeInputBox = styled.div<{ $isClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: left;
  border: 1px solid;
  border-radius: 0.8rem;
  border-color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.grey5 : theme.colors.main1};
  width: 33.5rem;
  height: 5.2rem;
  color: white;
`;
const Input = styled.input`
  appearance: none;
  margin: 1.5rem 0 1.5rem 1.6rem;
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='10' stroke='%23D9D9D9' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  width: 2.2rem;
  height: 2.2rem;

  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='11' fill='%233C49FF'/%3E%3Ccircle cx='11' cy='11' r='4' fill='white'/%3E%3C/svg%3E ");
  }
  &:checked + label {
    color: white;
  }
`;
const Label = styled.label`
  margin: 1.2rem;
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
  width: 33.5rem;
  height: 5.2rem;
  color: white;
`;

const InputContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 3rem;
  div:first-child {
    margin-bottom: 1.1rem;
  }
`;
const InputNotice = styled.span`
  margin-top: 1.2rem;
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.sub1};
`;

const CalendarWrapper = styled.div`
  z-index: 0;
`;
