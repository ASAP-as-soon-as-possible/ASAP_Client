import React, { useState, SetStateAction, Dispatch, TouchEvent } from 'react';

import styled from 'styled-components/macro';

interface Param {
  min: number;
  max: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  title: string;
}
// interface NumberContainerProps {
//   margin: number;
// }
// interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
//   deltaMode: number;
//   deltaX: number;
//   deltaY: number;
//   deltaZ: number;
// }
const ScrollerComponent = (aa: Param) => {
  const hoursArray = [];
  const { min, max, value, setValue, title } = aa;
  const [startY, setStartY] = useState<number>(0);
  for (let hour = min; hour <= max; hour++) {
    if (hour === min) hoursArray.push(' ');
    hoursArray.push(hour);
    if (hour === max) hoursArray.push(' ');
  }
  // const startYRef = React.useRef<number | null>(null);
  return (
    <ScrollerContainer>
      <TitleContainer>{title}</TitleContainer>
      {/* <Scroller
        onWheel={(e: WheelEvent<HTMLDivElement>) =>
          e.deltaY > min
            ? value < max
              ? setValue((prevState: number) => prevState + 1)
              : setValue(min)
            : value > min
            ? setValue((prevState: number) => prevState - 1)
            : setValue(max)
        }
      > */}
      <Scroller
        onTouchMove={(e: TouchEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();

          const touch = e.touches[0];
          const deltaY = (touch.clientY - startY) * 0.01;
          console.log(e);
          // if (e.type === 'touchmove') {
          if (deltaY < 0) {
            if (value < max) {
              setValue((prevState: number) => prevState + 1);
            }
          } else if (value > min) {
            setValue((prevState: number) => prevState - 1);
          }
          setStartY(touch.clientY);
        }}
      >
        <NumberContainer margin={value}>
          {hoursArray.length > 1 &&
            hoursArray.map((hour: number, index: number) => (
              <Number key={index} selected={index === value + 1}>
                {hour < 10 && hour !== ' ' ? `0${hour}` : hour}
              </Number>
            ))}
        </NumberContainer>
      </Scroller>
    </ScrollerContainer>
  );
};

const ScrollerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 25%;
`;

const TitleContainer = styled.h3`
  margin: 0px;
  width: 100%;
  height: 50px;
  text-align: center;
`;

const Scroller = styled.div`
  z-index: 2;
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

const NumberContainer = styled.div<{ margin: number }>`
  transition: margin 0.65s;
  margin: -${({ margin }) => margin * 50}px 0px 0px;
  width: 100%;
  height: 100%;
`;

const Number = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ selected }) => (selected ? 1 : 0.25)};
  cursor: default;
  width: 100%;
  height: 50px; /* Safari */ /* Firefox */ /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export default ScrollerComponent;
