import stepingCheck from 'assets/images/steppingCheck.png';
import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import ASAPBasicComponent from 'components/moleculesComponents/ASAPBasicComponent';
import Header from 'components/moleculesComponents/Header';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const CompleteCreateMeeting = () => {
  const { meetingId } = useParams();
  const navigate = useNavigate();
  const navigateSelectSchedule = () => {
    navigate(`/host/select/${meetingId}`);
  };
  return (
    <CompleteCreateMeetingWrapper>
      <Header position="completeCreateMeeting" />

      <ASAPBasicComponent
        imgURL={stepingCheck}
        mainText={'회의 생성 완료!'}
        subText={'이제 나의 가능 시간을 입력하러 가볼까요?'}
      />
      <BtnWrapper>
        <Button typeState={'primaryActive'} onClick={navigateSelectSchedule}>
          <Text font={'button2'}>나의 가능 시간 입력</Text>
        </Button>
      </BtnWrapper>
    </CompleteCreateMeetingWrapper>
  );
};

export default CompleteCreateMeeting;

const BtnWrapper = styled.div`
  position: absolute;
  bottom: 1.2rem;
`;
const CompleteCreateMeetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
