import { Dispatch, SetStateAction } from 'react';

import Text from 'components/common/atomComponents/Text';
import { ExitIc } from 'components/Icon/icon';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ModalProps {
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>;
}

function IncorrectInfoModal({ setIsLoginModalOpen }: ModalProps) {
  return (
    <ReturnModalWrpper>
      <ModalSection>
        <IconCatainer onClick={() => setIsLoginModalOpen(false)}>
          <ExitIc />
        </IconCatainer>

        <MentContainer>
          <Text font={`body2`} color={`${theme.colors.white}`}>
            유효하지 않은 사용자 이름
          </Text>
          <Text font={`body2`} color={`${theme.colors.white}`}>
            또는 비밀번호 입니다.
          </Text>
        </MentContainer>
        <ModalBtn onClick={() => setIsLoginModalOpen(false)}>
          <Text font={`body2`} color={`${theme.colors.white}`}>
            다시 입력하기
          </Text>
        </ModalBtn>
      </ModalSection>
    </ReturnModalWrpper>
  );
}

export default IncorrectInfoModal;

const ReturnModalWrpper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
`;

const ModalSection = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey8};
  width: 28.8rem;
  height: 21.2rem;
`;

const IconCatainer = styled.div`
  display: flex;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
`;

const MentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;
`;
const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.main1};
  width: 17.6rem;
  height: 4.2rem;
`;
