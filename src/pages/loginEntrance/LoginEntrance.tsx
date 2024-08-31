import { useState } from 'react';

import styled from 'styled-components';

import HostComponent from './components/HostComponent';
import MemberComponent from './components/MemberComponent';

interface HostInfoProps {
  name: string;
  password: string;
}
const InitialHostInfo: HostInfoProps = {
  name: '',
  password: '',
};

interface LoginType {
  loginType: string;
}

function LoginEntrance({ loginType }: LoginType) {
  const [hostInfo, setHostInfo] = useState(InitialHostInfo);

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
  align-items: center;
  width: 100%;
`;
