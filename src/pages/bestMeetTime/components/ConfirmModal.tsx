import React, { Dispatch, SetStateAction, useState } from 'react';

import Text from 'components/common/atomComponents/Text';
import { ExitIc } from 'components/Icon/icon';
import { BestMeetFinished } from 'pages/bestMeetTime/types/meetCardData';
import LoadingPage from 'pages/errorLoading/LoadingPage';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { authClient } from 'utils/apis/axios';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  memberCount: number;
  bestTime: BestMeetFinished;
}

function ConfirmModal({ setIsModalOpen, memberCount, bestTime }: ModalProps) {
  const { meetingId } = useParams();
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);

  const confirmMeetime = async () => {
    try {
      const result = await authClient.post(`/meeting/${meetingId}/confirm`, bestTime);
      const { code } = result.data;
      if (code === 200) {
        navigate(`/q-card/${meetingId}`);
        localStorage.removeItem('hostToken');
      }
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
    setIsModalOpen(false);
  };

  const finishConfirm = () => {
    setIsloading(true);
    confirmMeetime();
  };
  return (
    <ReturnModalWrpper>
      <ModalSection>
        <IconContainer onClick={() => setIsModalOpen(false)}>
          <ExitIc />
        </IconContainer>
        <MentContainer>
          <ModalMent>
            현재까지 <ModalHighlight>{memberCount}명</ModalHighlight>이 입력했어요.
          </ModalMent>
          <Text font={`body3`} color={`${theme.colors.white}`}>
            {`회의 시간을 확정하시겠습니까?`}
          </Text>
        </MentContainer>
        <BtnWrapper>
          <ModalBtn id="cancel" onClick={() => setIsModalOpen(false)}>
            <Text font={`title2`} color={`${theme.colors.white}`}>
              취소
            </Text>
          </ModalBtn>
          <ModalBtn id="confirm" onClick={finishConfirm}>
            <Text font={`title2`} color={`${theme.colors.white}`}>
              확정
            </Text>
          </ModalBtn>
        </BtnWrapper>
      </ModalSection>
      {isloading ? (
        <LoadingWrapper>
          <LoadingPage />
        </LoadingWrapper>
      ) : (
        undefined
      )}
    </ReturnModalWrpper>
  );
}

export default ConfirmModal;

const LoadingWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

const ReturnModalWrpper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
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
  height: 15.6rem;
`;

const IconContainer = styled.div`
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
  margin-top: 1.2rem;
  width: 18rem;
  height: 4rem;
`;

const ModalMent = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body3};
`;

const ModalHighlight = styled.span`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.body3};
`;

const ModalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;
  border-radius: 0.6rem;
  background-color: ${({ theme, id }) =>
    id === 'cancel' ? theme.colors.grey6 : theme.colors.main2};
  width: 12.4rem;
  height: 4rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;
