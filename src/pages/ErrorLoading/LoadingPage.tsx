import styled from 'styled-components/macro';

function LoadingPage() {
  return (
    <LoadingPageWrapper>
      <LoadingSection>
        <OuterCircle />
        {/* <GapCircle /> */}
        <InnerCircle />
        <InnerInnerCircle />
      </LoadingSection>
    </LoadingPageWrapper>
  );
}

export default LoadingPage;

const LoadingPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #141414;
  width: 100%;
  height: 100vh;
`;

const LoadingSection = styled.div`
  position: absolute;
`;

const OuterCircle = styled.div`
  border-radius: 50%;
  background-image: conic-gradient(
    transparent 0deg,
    transparent 180deg,
    #FFF 180deg,
    #FFF 270deg,
    transparent 270deg
  );
  width: 6rem;
  height: 6rem;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-image: conic-gradient(
    #FFF 0deg,
    #FFF 180deg,
    #141414 180deg,
    #141414 270deg,
    #FFF 270deg
  );
  width: 4rem;
  height: 4rem;
`;

const InnerInnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #141414;
  width: 2rem;
  height: 2rem;
`;
