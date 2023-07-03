import { useState } from 'react';

import ScrollerComponent from 'pages/ScrollerComponent';
import styled from 'styled-components/macro';

import GlobalStyle from './styles/globalStyles';

function App() {
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState(1);
  const [selectedSecond, setSelectedSecond] = useState(1);

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <ScrollerComponent
          min={0}
          max={24}
          value={selectedHour}
          setValue={setSelectedHour}
          title="Hour"
        />
        <ColonSpan>:</ColonSpan>
        <ScrollerComponent
          min={0}
          max={59}
          value={selectedMinute}
          setValue={setSelectedMinute}
          title="Minute"
        />
        <ColonSpan>:</ColonSpan>
        <ScrollerComponent
          min={0}
          max={59}
          value={selectedSecond}
          setValue={setSelectedSecond}
          title="Second"
        />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: calc(50vh - 100px) 0px;
  width: 100vw;
  height: 200px;
`;
const ColonSpan = styled.span`
  margin: 150px 0px 100px;
`;
export default App;
