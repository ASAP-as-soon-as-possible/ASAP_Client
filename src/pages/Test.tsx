import styled from 'styled-components';

import SelectSchedule from './selectSchedule/SelectSchedule';

function Test() {
  return (
    <StyledTest>
      <SelectSchedule />
    </StyledTest>
  );
}

export default Test;

const StyledTest = styled.div`
  padding: 5rem;
`;
