import React, { Dispatch, SetStateAction, useState } from 'react';

import { AxiosError } from 'axios';
import Button from 'components/atomComponents/Button';
import PasswordInput from 'components/atomComponents/PasswordInput';
import Text from 'components/atomComponents/Text';
import TextInput from 'components/atomComponents/TextInput';
import Header from 'components/moleculesComponents/Header';
import TitleComponent from 'components/moleculesComponents/TitleComponents';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { client } from 'utils/apis/axios';

import ReturnModal from './ReturnModal';

interface HostInfoProps {
  name: string;
  password: string;
}
interface HostProps {
  hostInfo: HostInfoProps;
  setHostInfo: Dispatch<SetStateAction<HostInfoProps>>;
}

function HostComponent({ hostInfo, setHostInfo }: HostProps) {
  const { meetingId } = useParams();
  const navigate = useNavigate();
  const hostOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHostInfo((prev: HostInfoProps) => {
      return { ...prev, name: e.target.value };
    });
  };

  const passWordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHostInfo((prev: HostInfoProps) => {
      return { ...prev, password: e.target.value };
    });
  };
  const resetHostId = () => {
    setHostInfo((prev: HostInfoProps) => {
      return { ...prev, name: '' };
    });
  };

  const loginHost = async () => {
    try {
      const result = await client.post(`/user/${meetingId}/host`, hostInfo);
      const {
        data: { code, accessToken, message },
      } = result;
      if (code === 200) {
        if (!localStorage.getItem('hostToken')) {
          localStorage.setItem('hostToken', accessToken);
        }
        navigate(`/host/${meetingId}`);
      } else if (code === 403) {
        navigate(`/priority/${meetingId}`);
      } else {
        console.log(message);
      }
    } catch {
      (error: AxiosError) => {
        console.log(error);
      };
    }
  };

  const [ismodalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Header position={'login'} />
      <TitleComponent main={'방장 정보를 알려주세요'} sub={''} />
      <HostInfoSection>
        <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>
            방장 이름
          </Text>
          <TextInput
            value={hostInfo.name}
            setValue={hostOnChange}
            resetValue={resetHostId}
            placeholder={'방장 이름'}
          />
        </HostNameSection>
        <HostNameSection>
          <Text font={`title2`} color={`${theme.colors.white}`}>
            방 비밀번호
          </Text>
          <PasswordInput
            value={hostInfo.password}
            placeholder={`숫자 4자 이상`}
            passWordOnChange={passWordOnChange}
            page={'entrance'}
          />
        </HostNameSection>
      </HostInfoSection>
      <StyledBtnSection>
        <Button
          typeState={
            hostInfo.name && hostInfo.password.length >= 4 ? 'primaryActive' : 'secondaryDisabled'
          }
          onClick={hostInfo.name && hostInfo.password.length >= 4 ? loginHost : undefined}
        >
          <Text font={'button2'}>방장 페이지 접속하기</Text>
        </Button>
      </StyledBtnSection>
      {ismodalOpen ? <ReturnModal setIsModalOpen={setIsModalOpen} /> : undefined}
    </>
  );
}

export default HostComponent;

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
