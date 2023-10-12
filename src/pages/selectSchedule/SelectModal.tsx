import React, { Dispatch, useEffect, SetStateAction } from 'react';

import { scheduleAtom, userNameAtom } from 'atoms/atom';
import { isAxiosError } from 'axios';
import Text from 'components/atomComponents/Text';
import { ExitIc } from 'components/Icon/icon';
import { useNavigate, useParams } from 'react-router';
import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { hostAvailableApi, userAvailableApi } from 'utils/apis/createHostAvailableSchedule';

import { ScheduleStates } from './types/Schedule';
import { transformHostScheduleType, transformUserScheduleType } from './utils/changeApiReq';

interface ModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

function SelectModal({ setShowModal }: ModalProps) {
  const [scheduleList, setScheduleList] = useRecoilState<ScheduleStates[]>(scheduleAtom);
  const userName = useRecoilValue(userNameAtom);

  const navigate = useNavigate();
  const { auth, meetingId } = useParams();
  const updateScheduleType = transformHostScheduleType(scheduleList);
  console.log(updateScheduleType);
  const updateMemberScheduleType = transformUserScheduleType(scheduleList, userName);
  console.log(updateMemberScheduleType);

  const postHostAvailableApi = async () => {
    try {
      if (meetingId && updateScheduleType) {
        const { data } = await hostAvailableApi(meetingId, updateScheduleType);
        console.log(data);
        if (data.code === 201) {
          setShowModal(false);
          navigate(`/${auth}/schedule-complete/${meetingId}`);
        } else if (data.code === 400) {
          alert(`${data.message}`);
        } else {
          navigate('/error');
        }
        return data.code;
      }
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        if (e.response.status === 400) {
          alert(`${e.response.data.message}`);
        } else {
          console.error(e);
          navigate(`/error`);
        }
      }
    }
  };

  const postMemberAvailableApi = async () => {
    try {
      if (meetingId && updateMemberScheduleType) {
        const { data } = await userAvailableApi(meetingId, updateMemberScheduleType);
        console.log(data);
        if (data.code === 201) {
          setShowModal(false);
          navigate(`/${auth}/schedule-complete/${meetingId}`);
        } else if (data.code === 400) {
          alert(`${data.message}`);
        } else {
          navigate('/error');
        }
        return data;
      }
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        if (e.response.status === 400) {
          alert(`${e.response.data.message}`);
        } else {
          console.error(e);
          navigate(`/error`);
        }
      }
    }
  };

  useEffect(
    () => {
      console.log(scheduleList);
    },
    [scheduleList],
  );

  // console.log(transformedScheduleList);
  const finishConfirm = () => {
    //여기에 api 연결하세요.
    if (auth === 'host') {
      postHostAvailableApi();
    } else if (auth === 'member') {
      console.log(auth);
      postMemberAvailableApi();
    }

    // setShowModal(false);
    // navigate(`/${auth}/schedule-complete/${meetingId}`);
  };
  return (
    <ReturnModalWrpper>
      <ModalSection>
        <IconContainer onClick={() => setShowModal(false)}>
          <ExitIc />
        </IconContainer>
        <MentContainer>
          <ModalMent>
            가능 시간 입력을 완료하면 <ModalHighlight>수정이 불가</ModalHighlight>합니다.
          </ModalMent>
          <Text font={`body2`} color={`${theme.colors.white}`}>
            계속 진행하시겠습니까?
          </Text>
        </MentContainer>
        <BtnWrapper>
          <ModalBtn id="cancel" onClick={() => setShowModal(false)}>
            <Text font={`button2`} color={`${theme.colors.white}`}>
              취소
            </Text>
          </ModalBtn>
          <ModalBtn id="confirm" onClick={finishConfirm}>
            <Text font={`button2`} color={`${theme.colors.white}`}>
              확정
            </Text>
          </ModalBtn>
        </BtnWrapper>
      </ModalSection>
    </ReturnModalWrpper>
  );
}

export default SelectModal;

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
  height: 17.2rem;
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
  ${({ theme }) => theme.fonts.body2};
  width: 14.4rem;
  text-align: center;
  margin-bottom: 0.8rem;
  margin-top: 2.4rem;
`;

const ModalHighlight = styled.span`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts.body2};
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
  height: 4.4rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 2rem;
`;
