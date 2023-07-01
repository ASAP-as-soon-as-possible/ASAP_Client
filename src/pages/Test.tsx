import React, { useEffect } from 'react';

import styled from 'styled-components/macro';

const Test = () => {
  useEffect(() => {
    console.log('hi');
  }, []);
  return <TestWrapper>test</TestWrapper>;
};

const TestWrapper = styled.div`
  width: 20rem;
  height: 20rem;

  background-color: yellow;

  color: white;
  display: flex;
`;

export default Test;
