import { CloseIc } from 'components/Icon/icon';
import Lottie from 'react-lottie';
import taptotapOnboarding from 'src/assets/lotties/taptotap_onboarding.json';
import styled from 'styled-components';

interface OnboardingLottieProps {
  onClose: () => void;
  top: number;
}

function OnboardingLottie({ onClose, top }: OnboardingLottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: taptotapOnboarding,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <OnboardingLottieWrapper $top={top}>
        <CloseIcWrapper onClick={onClose} />
        <LottieWrapper options={defaultOptions} />
      </OnboardingLottieWrapper>
      <LottieBackground />
    </>
  );
}

export default OnboardingLottie;

const OnboardingLottieWrapper = styled.aside<{ $top: number }>`
  position: absolute;
  top: ${({ $top }) => $top}rem;
  z-index: 1;
`;

const CloseIcWrapper = styled(CloseIc)`
  position: absolute;
  right: 1.5rem;
  z-index: 1;
  cursor: pointer;
`;

const LottieWrapper = styled(Lottie)`
  position: absolute;
`;

const LottieBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black60};
`;
