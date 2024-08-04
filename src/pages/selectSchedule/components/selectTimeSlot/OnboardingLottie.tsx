import Lottie from 'react-lottie';
import taptotapOnboarding from 'src/assets/lotties/taptotap_onboarding.json';

function OnboardingLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: taptotapOnboarding,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default OnboardingLottie;
