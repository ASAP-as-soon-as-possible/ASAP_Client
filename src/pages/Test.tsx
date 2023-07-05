import React, { useEffect, useState } from 'react';

import styled from 'styled-components/macro';
import { Calendar, DateObject, getAllDatesInRange } from 'react-multi-date-picker';
import './Test.css';

function Test() {
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
  const [value, setValue] = useState<any>(new Date());
  console.log(value);
  const dateRangeFormat = 'YYYY-MM-DD';

  return (
    <TestWrapper>
      <h1>안녕하세요 프리텐다드 입니다.</h1>
      <Calendar
        value={value}
        months={months}
        weekDays={weekDays}
        className="bg-dark"
        range={true}
        // multiple={true}
        onChange={(dateObjects) => {
          if (dateObjects) {
            let tmpArr = getAllDatesInRange(dateObjects as DateObject[]);
            let newDate: string[] = [];
            tmpArr.map((date) => {
              newDate.push((date as DateObject).format(dateRangeFormat));
            });
            setValue(newDate);

            // let newDate: string[] = [];
            // (dateObjects as DateObject[]).map((date: DateObject) => {
            //   newDate.push(date.format(dateRangeFormat));
            // });
            // setValue(newDate);
          }
        }}
      />
    </TestWrapper>
  );
}

export default Test;

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 20rem;
  height: 20rem;

  color: white;

  h1 {
    ${({ theme }) => theme.fonts.head1}
    color: ${({ theme }) => theme.colors.main1}
  }
`;
