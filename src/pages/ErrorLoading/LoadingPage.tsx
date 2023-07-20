import styled from 'styled-components/macro';

function LoadingPage() {
  return (
    <LoadingPageWrapper>
      <OuterCircle />
      <InnerCircle>
        <InnerInnerCircle />
      </InnerCircle>
    </LoadingPageWrapper>
  );
}

export default LoadingPage;

const LoadingPageWrapper = styled.div`
  position: relative;
  background-color: transparent;
  width: 6rem;
  height: 6rem;
`;

const OuterCircle = styled.div`
  border-radius: 50%;
  background-image: conic-gradient(
    transparent 0deg,
    transparent 180deg,
    #fff 180deg,
    #fff 270deg,
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
    #fff 0deg,
    #fff 180deg,
    #141414 180deg,
    #141414 270deg,
    #fff 270deg
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
