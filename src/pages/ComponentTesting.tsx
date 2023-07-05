import { ExitIcon, HambergerIcon, InputCancelBtn, MainLogo } from 'components/Icon/icon';
import { styled } from 'styled-components';

function ComponentTesting() {
  return (
    <>
      <Wrapper>
        <MainLogo />
        <IconWrapper>
          <HambergerIcon />
        </IconWrapper>
        <IconWrapper>
          <ExitIcon />
        </IconWrapper>
        <InputCancelBtn />

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

const IconWrapper = styled.div`
  background-color: black;
  padding: 12.35px 11px;
`;
