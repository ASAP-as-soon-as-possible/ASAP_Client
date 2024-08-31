import stepingCheck from 'assets/images/steppingCheck.png';
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import CheckPoint from 'components/common/moleculesComponents/CheckPoint';
import Header from 'components/common/moleculesComponents/Header';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import CreateMeetingBottomSheet from './components/CreateMeetingBottomSheet';

const CompleteCreateMeeting = () => {
  const { meetingId } = useParams();

  const navigate = useNavigate();
  const navigateSelectSchedule = () => {
    navigate(`/host/select/${meetingId}`);
  };

  return (
    <CompleteCreateMeetingWrapper>
      <Header position="completeCreateMeeting" />
      <CheckPoint
        imgURL={stepingCheck}
        mainText={'회의 생성 완료!'}
        subText={'이제 나의 가능 시간을 입력하러 가볼까요?'}
      />
      <BottomBtnSection>
        <Button typeState={'primaryActive'} onClick={navigateSelectSchedule}>
          <Text font={'button2'}>나의 가능 시간 입력</Text>
        </Button>
      </BottomBtnSection>
      <CreateMeetingBottomSheet />
    </CompleteCreateMeetingWrapper>
  );
};

export default CompleteCreateMeeting;

const CompleteCreateMeetingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
