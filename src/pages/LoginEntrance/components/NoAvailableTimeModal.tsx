import { Link, useParams } from 'react-router-dom';
import React, { Dispatch, SetStateAction, useState } from 'react';

import { ExitIc } from 'components/Icon/icon';
import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

function NoAvailableTimeModal({ setIsModalOpen }: ModalProps) {
  const { meetingId } = useParams();
  return (
    <ReturnModalWrpper>
      <ModalSection>
        <IconCatainer onClick={() => setIsModalOpen(false)}>
          <ExitIc />
        </IconCatainer>
        <Text font={`title1`} color={`${theme.colors.sub1}`}>
          잠깐!
        </Text>
        <MentContainer>
          <Text font={`body2`} color={`${theme.colors.white}`}>
            나의 가능 시간을 입력해야
          </Text>
          <Text font={`body2`} color={`${theme.colors.white}`}>
            방장 페이지에 접속할 수 있어요!
          </Text>
        </MentContainer>
        <Link to={`/host/select/${meetingId}`}>
          <ModalBtn>
            <Text font={`body2`} color={`${theme.colors.white}`}>
              가능 시간 입력하러 가기
            </Text>
          </ModalBtn>
        </Link>
      </ModalSection>
    </ReturnModalWrpper>
  );
}

export default NoAvailableTimeModal;

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
