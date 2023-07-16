import React from 'react';

import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface LoginType {
  loginType: string;
}

function LoginEntrance({ loginType }: LoginType) {
  console.log(loginType);
  return (
    <LoginEntranceWrapper>
      <Text font={'title2'} color={`${theme.colors.white}`}>
        LoginEntrance
      </Text>
    </LoginEntranceWrapper>
  );
}

export default LoginEntrance;

const LoginEntranceWrapper = styled.div``;
