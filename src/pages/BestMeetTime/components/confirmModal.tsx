import React, { Dispatch, SetStateAction } from 'react';

import Text from 'components/atomComponents/Text';
import { ExitIc } from 'components/Icon/icon';
import { Token } from 'html2canvas/dist/types/css/syntax/tokenizer';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { BestMeetTimeApi } from 'utils/apis/bestMeetTimeApi';

import { BestMeetFinished } from '../types/meetCardData';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  memberCount: number;
  bestTime: BestMeetFinished;
  meetingId: string;
  token: string;
}

function ConfirmModal({ setIsModalOpen, memberCount, bestTime, meetingId, token }: ModalProps) {
  const bestMeetTime = async () => {
    try {
      const {
        data: { data },
      } = await BestMeetTimeApi(bestTime, meetingId, token);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const finishConfirm = () => {
    bestMeetTime();
    setIsModalOpen(false);
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
            <Text font={`body2`} color={`${theme.colors.white}`}>
              취소
            </Text>
          </ModalBtn>
          <ModalBtn id="confirm" onClick={finishConfirm}>
            <Text font={`body2`} color={`${theme.colors.white}`}>
              확정
            </Text>
          </ModalBtn>
        </BtnWrapper>
      </ModalSection>
    </ReturnModalWrpper>
  );
}

export default ConfirmModal;

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
