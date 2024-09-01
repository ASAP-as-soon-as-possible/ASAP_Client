import React, { Dispatch, SetStateAction } from 'react';

import { userNameAtom } from 'atoms/atom';
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import TextInput from 'components/common/atomComponents/TextInput';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import Header from 'components/common/moleculesComponents/Header';
import TitleComponent from 'components/common/moleculesComponents/TitleComponents';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
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
  const { meetingId } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useRecoilState(userNameAtom);
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

  const loginMember = () => {
    setUserName(hostInfo.name);
    navigate(`/member/select/${meetingId}?step=selectSchedule`);
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
            이름
          </Text>
          <TextInput
            value={hostInfo.name}
            setValue={hostOnChange}
            resetValue={resetHostId}
            max={8}
            placeholder={'참여자 이름'}
          />
        </HostNameSection>
      </HostInfoSection>
      <BottomBtnSection>
        <Button
          typeState={hostInfo.name ? 'primaryActive' : 'secondaryDisabled'}
          onClick={hostInfo.name ? loginMember : undefined}
        >
          <Text font={'button2'}>나의 가능 시간 입력</Text>
        </Button>
      </BottomBtnSection>
    </>
  );
}

export default MemberComponent;

const HostNameSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
const HostInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  width: 100%;
`;
