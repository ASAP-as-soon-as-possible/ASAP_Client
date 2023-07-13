import React from 'react'

import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import { theme } from 'styles/theme';

function OnBoarding() {
  return (
    <>
    <Header position={'onBoarding'}/>
    <Text font={"body1"} color={`${theme.colors.white}`}>OnBoarding</Text>
    </>
  )
}

export default OnBoarding