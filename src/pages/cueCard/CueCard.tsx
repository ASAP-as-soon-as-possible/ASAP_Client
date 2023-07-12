import React from 'react';

import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import TitleComponent from 'components/moleculesComponents/TitleComponent';
import { theme } from 'styles/theme';
import Qcard from './components/Qcard';

function CueCard() {
  return (
    <>
      <Header />
      <TitleComponent main={'회의 일정이 확정되었어요!'} sub={'이미지를 저장하거나 링크를 복사하여 팀원에게 공유해보세요'} />
      <Qcard />
    </>
  );
}

export default CueCard;
