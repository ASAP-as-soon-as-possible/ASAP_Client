import { Dispatch, SetStateAction } from 'react';

import Text from 'components/common/atomComponents/Text';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

function NoAvailableTimeModal({ setIsModalOpen }: ModalProps) {
  const { meetingId } = useParams();
  const navigate = useNavigate();

  return (
    <ReturnModalWrpper onClick={() => setIsModalOpen(false)}>
      <ModalSection>
        <MentContainer>
          <Text font={'title1'} color={`${theme.colors.white}`}>
            가능 시간을 입력하지 않으셨나요?
          </Text>

          <ModalText>
            나의 가능 시간을 입력해야 <br />방장 페이지에 접속할 수 있어요
          </ModalText>
        </MentContainer>

        <ModalBtn onClick={() => navigate(`/host/select/${meetingId}?step=selectSchedule`)}>
          <Text font={`body2`} color={`${theme.colors.white}`}>
            가능 시간 입력하러 가기
          </Text>
        </ModalBtn>
      </ModalSection>
    </ReturnModalWrpper>
  );
}

export default NoAvailableTimeModal;

const ModalText = styled.span`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grey3};
`;

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
  /* position: relative; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey8};
  width: 32.4rem;
  height: 18.4rem;
  padding: 2.4rem 2rem;
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
  justify-content: center;
  gap: 0.8rem;
  text-align: center;
`;
const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.main1};
  width: 100%;
  height: 4.2rem;
`;
