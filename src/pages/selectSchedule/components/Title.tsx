import TitleComponents from 'components/moleculesComponents/TitleComponents';

interface TitleProps {
  mainText: string;
  subText: string;
}
function Title({ mainText, subText }: TitleProps) {
  return <TitleComponents main={mainText} sub={subText} />;
}

export default Title;
