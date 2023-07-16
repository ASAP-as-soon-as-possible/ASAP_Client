import React, { useState } from 'react';

import Button from 'components/atomComponents/Button';
import PasswordInput from 'components/atomComponents/PasswordInput';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
import Header from 'components/moleculesComponents/Header';
import TitleComponent from 'components/moleculesComponents/TitleComponent';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

import HostComponent from './LoginComponent/HostComponent';
import MemberComponent from './LoginComponent/MemberComponent';

interface HostInfoProps {
  id: string;
  password: string;
}
const InitialHostInfo: HostInfoProps = {
  id: '',
  password: '',
};

interface LoginType {
  loginType: string;
}

function LoginEntrance({ loginType }: LoginType) {
  console.log(loginType);

  const [hostInfo, setHostInfo] = useState(InitialHostInfo);

  console.log(hostInfo);

  return (
    <LoginEntranceWrapper>
      {
        {
          host: <HostComponent hostInfo={hostInfo} setHostInfo={setHostInfo} />,
          member: <MemberComponent hostInfo={hostInfo} setHostInfo={setHostInfo} />,
        }[loginType]
      }
    </LoginEntranceWrapper>
  );
}

export default LoginEntrance;

const LoginEntranceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledBtnSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
  border-radius: 50%;
`;

const HostNameSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const HostInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`;
