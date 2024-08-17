import { useState } from 'react';

import stepingCheck from 'assets/images/steppingCheck.png';
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import ASAPBasicComponent from 'components/common/moleculesComponents/ASAPBasicComponent';
import Header from 'components/common/moleculesComponents/Header';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const CompleteCreateMeeting = () => {
  const { meetingId } = useParams();
  const [isModalOpen, setIsModalOpen]= useState(true);
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

      <>
                <BottomSheetModal $isModalOpen={isModalOpen}>
                  <BottomSheetDescription>
                  <Text font={'head2'} color={'white'}>회의방 링크가 생성되었어요!</Text>
                  <Text font={'title2'} color={`${theme.colors.grey4}`}>링크를 복사하여 팀원에게 공유해주세요</Text>
                  </BottomSheetDescription>
                  <CopyToClipboard text={`${import.meta.env.VITE_WEB_IP}/meet/${meetingId}`}>
                    <Button typeState={'primaryActive'} onClick={()=>setIsModalOpen(false)}>
                      <Text font={'button2'}>링크 복사하기</Text>
                    </Button>
                  </CopyToClipboard>
                    <Button typeState={'quaternaryDisabled'} onClick={()=>setIsModalOpen(false)}>
                      <Text font={'button2'}>나중에 공유하기</Text>
                    </Button>
                </BottomSheetModal>
                <ModalOverlay $isModalOpen={isModalOpen} onClick={()=>setIsModalOpen(false)}>
                </ModalOverlay>


              </>
    </CompleteCreateMeetingWrapper>
  );
};

export default CompleteCreateMeeting;

const ModalOverlay = styled.div<{$isModalOpen:boolean;}>`
  display:${({$isModalOpen})=>($isModalOpen?'block':'none')};
  position:fixed;
  top: 0;

  background-color: rgba(0, 0, 0, 0.50);
  width:100%;
  height:100%;
`

const BottomSheetDescription = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.8rem;
  margin-bottom:2.4rem;
  padding-left:0.9rem;
`
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

const BottomSheetModal = styled.div<{$isModalOpen:boolean;}>`
  display:flex;
  position:fixed;
  bottom:${({$isModalOpen})=>$isModalOpen?0:-27.5}rem;
  flex-direction:column;
  gap:0.8rem;
  transition: bottom 600ms cubic-bezier(0.86, 0, 0.07, 1);
  z-index:1;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.grey8};

  padding: 2.8rem 2rem 4rem;
  width:37.5rem;

  & button {
    width:100%;
  }
`

