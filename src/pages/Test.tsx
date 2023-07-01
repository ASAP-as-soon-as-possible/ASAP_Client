import React, { useEffect } from 'react';

import styled from 'styled-components/macro';

const Test = () => {
  useEffect(() => {
    console.log('hi');
  }, []);
  return <TestWrapper>test</TestWrapper>;
};

const TestWrapper = styled.div`
  display: flex;

  background-color: yellow;
  width: 20rem;
  height: 20rem;

  color: white;
`;

export default Test;
