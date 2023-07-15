import styled from 'styled-components';

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
  height: 50rem;
`;

const LoadingSection = styled.div`
  position: absolute;
`;

// const GapCircle = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 50%;
//   background-color: #141414;
//   width: 40.5px; //0.5px 차이
//   height: 40.5px;
// `;

const OuterCircle = styled.div`
  border-radius: 50%;
  background-image: conic-gradient(
    transparent 0deg,
    transparent 180deg,
    white 180deg,
    white 270deg,
    transparent 270deg
  );
  width: 60px;
  height: 60px;
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
    white 0deg,
    white 180deg,
    #141414 180deg,
    #141414 270deg,
    white 270deg
  );
  width: 40px;
  height: 40px;
`;

const InnerInnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #141414;
  width: 20px;
  height: 20px;
`;
