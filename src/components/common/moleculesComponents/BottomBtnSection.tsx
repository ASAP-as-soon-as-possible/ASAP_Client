import { ReactNode } from 'react';

import styled from 'styled-components';

interface BottomBtnProps {
  children: ReactNode;
}

const BottomBtnSection = ({ children }: BottomBtnProps) => {
  return <ButtomBtnWrapper>{children}</ButtomBtnWrapper>;
};

const ButtomBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 1.2rem;
  padding: 0 2rem;
  gap: 1.4rem;
`;
export default BottomBtnSection;
