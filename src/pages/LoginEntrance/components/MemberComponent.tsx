import React, { Dispatch, SetStateAction, useState } from 'react';

import Button from 'components/atomComponents/Button';
import PasswordInput from 'components/atomComponents/PasswordInput';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
import Header from 'components/moleculesComponents/Header';
import TitleComponent from 'components/moleculesComponents/TitleComponents';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface HostInfoProps {
  name: string;
  password: string;
}
interface HostProps {
  hostInfo: HostInfoProps;
  setHostInfo: Dispatch<SetStateAction<HostInfoProps>>;
}
function MemberComponent({ hostInfo, setHostInfo }: HostProps) {
  const hostOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHostInfo((prev: HostInfoProps) => {
      return { ...prev, name: e.target.value };
    });
  };

  const resetHostId = () => {
    setHostInfo((prev: HostInfoProps) => {
      return { ...prev, name: '' };
    });
  };

  return (
    <>
      <Header position={'login'} />
      <TitleComponent
        main={'참여자의 이름을 알려주세요'}
        sub={'정확한 일정 조율을 위해 실명입력을 추천드려요'}
      />
      <HostInfoSection>
        <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>
            방장 이름
          </Text>
          <TextInput
            value={hostInfo.id}
            setValue={hostOnChange}
            resetValue={resetHostId}
            placeholder={'방장 이름'}
          />
        </HostNameSection>
      </HostInfoSection>
      <StyledBtnSection>
        <Button
          typeState={hostInfo.id ? 'primaryActive' : 'secondaryDisabled'}
          onClick={hostInfo.id ? () => console.log('happy') : undefined}
        >
          <Text font={'button2'}>방장 페이지 접속하기</Text>
        </Button>
      </StyledBtnSection>
    </>
  );
}

export default MemberComponent;

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
