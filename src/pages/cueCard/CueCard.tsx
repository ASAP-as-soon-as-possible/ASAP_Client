import React from 'react';

import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import TitleComponent from 'components/moleculesComponents/TitleComponent';
import { theme } from 'styles/theme';
import Qcard from './components/Qcard';
import CueCardTitle from './components/cueCardTitle';

function CueCard() {
  return (
    <>
      <Header />
      <CueCardTitle main={'일정 조율 완료'} sub={'이미 확정된 회의 일정입니다'} />
      <Qcard />
    </>
  );
}

export default CueCard;
