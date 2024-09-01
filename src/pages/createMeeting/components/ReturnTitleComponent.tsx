import TitleComponents from 'components/common/moleculesComponents/TitleComponents';

interface FunnelSteps {
  [key: string]: {
    main: string;
    sub: string;
  };
}
const funnelSteps: FunnelSteps = {
  title: {
    main: '어떤 회의를 계획중인가요?',
    sub: '회의 이름을 지어주세요 (최대 15자)',
  },
  availableDates: {
    main: '고려 중인 회의 날짜는 언제인가요?',
    sub: '하나의 방식을 골라 후보 날짜를 입력해주세요',
  },
  place: {
    main: '회의 장소를 입력해주세요',
    sub: '회의 방식과 장소를 알려주세요',
  },
  duration: {
    main: '회의는 몇 시간 동안 진행되나요?',
    sub: '예정된 회의 시간을 선택해주세요',
  },
  hostInfo: {
    main: '방장 정보를 입력해주세요',
    sub: '방장 페이지에 접속할 때 필요해요',
  },
  additionalInfo: {
    main: '더 알리고 싶은 내용이 있나요?',
    sub: '큐카드에 아래 내용을 함께 적어드려요',
  },
};

interface ReturnProps {
  step: string;
}

function ReturnTitleComponent({ step }: ReturnProps) {
  const currentStep = funnelSteps[step];
  return <TitleComponents main={currentStep.main} sub={currentStep.sub} />;
}

export default ReturnTitleComponent;
