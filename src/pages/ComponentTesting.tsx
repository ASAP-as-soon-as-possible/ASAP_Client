import { HambergerIcon, MainLogo } from 'components/Icon/icon';
import { styled } from 'styled-components';

function ComponentTesting() {
  return (
    <>
      <Wrapper>
        <MainLogo />
        <HambergerWrapper>
          <HambergerIcon />
        </HambergerWrapper>
      </Wrapper>
    </>
  );
}

export default ComponentTesting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap:2rem;
`;

const HambergerWrapper = styled.div`
  background-color: black;
  padding: 12.35px 11px;
`;
