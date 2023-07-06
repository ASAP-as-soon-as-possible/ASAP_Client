import React from 'react';

import styled from 'styled-components/macro';

function LibraryTP() {
  return (
    <LibraryWrapper>
      <LibrayContainer>
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
        <Div5 />
        <Div6 />
        <Div7 />
        <Div8 />
      </LibrayContainer>
    </LibraryWrapper>
  );
}

const LibraryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LibrayContainer = styled.div`
  width: 12rem;
`;
const Div1 = styled.div`
  background-color: yellow;
  width: 100%;
  height: 10rem;
`;
const Div2 = styled.div`
  background-color: blue;
  width: 100%;
  height: 10rem;
`;
const Div3 = styled.div`
  background-color: red;
  width: 100%;
  height: 10rem;
`;
const Div4 = styled.div`
  background-color: green;
  width: 100%;
  height: 10rem;
`;
const Div5 = styled.div`
  background-color: orange;
  width: 100%;
  height: 4rem;
`;
const Div6 = styled.div`
  background-color: #123456;
  width: 100%;
  height: 10rem;
`;
const Div7 = styled.div`
  background-color: #777777;
  width: 100%;
  height: 10rem;
`;
const Div8 = styled.div`
  background-color: #999999;
  width: 100%;
  height: 10rem;
`;
export default LibraryTP;
