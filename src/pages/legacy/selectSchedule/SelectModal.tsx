import { userNameAtom } from 'atoms/atom';
import { isAxiosError } from 'axios';
import Text from 'components/common/atomComponents/Text';
import { ExitIc } from 'components/Icon/icon';
import { useSelectContext } from 'pages/selectSchedule/contexts/useSelectContext';
import { formatHostScheduleScheme, formatMemberScheduleScheme } from 'pages/selectSchedule/utils';
import { useNavigate, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { hostAvailableApi, userAvailableApi } from 'utils/apis/legacy/createHostAvailableSchedule';

interface ModalProps {
  setShowModal: (isModalOpen: boolean) => void;
}

function SelectModal({ setShowModal }: ModalProps) {
  const { selectedSlots } = useSelectContext();
  const userName = useRecoilValue(userNameAtom);

  const navigate = useNavigate();
  const { auth, meetingId } = useParams();

  const updateScheduleType = formatHostScheduleScheme(selectedSlots);
  const updateMemberScheduleType = formatMemberScheduleScheme(selectedSlots, userName);

  const postHostAvailableApi = async () => {
    try {
      if (meetingId && updateScheduleType) {
        const { data } = await hostAvailableApi(meetingId, updateScheduleType);
        if (data.code === 201) {
          setShowModal(false);
          navigate(`/${auth}/schedule-complete/${meetingId}`);
        } else {
          navigate('/error');
        }
        return data.code;
      }
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        if (e.response.status === 400) {
          alert(`${e.response.data.message}`);
        } else if (e.response.status === 409) {
          alert(`${e.response.data.message}`);
          navigate(`/host/${meetingId}`);
        } else {
          alert(`${e.response.data.message}`);
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
        if (data.code === 201) {
          setShowModal(false);
          navigate(`/${auth}/schedule-complete/${meetingId}`);
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

  const finishConfirm = () => {
    if (auth === 'host') {
      postHostAvailableApi();
    } else if (auth === 'member') {
      postMemberAvailableApi();
    }
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
  position: fixed;
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
  margin-top: 2.4rem;
  margin-bottom: 0.8rem;

  width: 14.4rem;

  text-align: center;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body2};
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
