import { useState } from 'react';

import TextInput from 'components/atomComponents/TextInput';
import TitleComponents from 'components/moleculesComponents/TitleComponents';

function ViewTesting() {
  const [inputValue, setInputValue] = useState(``);
  return (
    <>
      <TitleComponents
        main={'어떤 회의를 계획중인가요?'}
        sub={'회의 이름을 지어주세요 (최대 15자)'}
      />
      <TextInput value={inputValue} setValue={setInputValue} placeholder={'서비스 기획 1차 회의'} />
    </>
  );
}

export default ViewTesting;
