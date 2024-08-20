import { useEffect} from 'react';

import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomSheet from 'components/common/BottomSheet/BottomSheet';
import useModalState from 'components/common/Modal/hooks/useModalState';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { notify } from 'utils/toast/copyLink';

interface SteppingProps {
  steppingType: string;
}

function SteppingBtnSection({ steppingType }: SteppingProps) {
  const location = useLocation();
  const meetInfo = { ...location.state };
  const { meetingId } = useParams();

  const {isOpen, onOpen, onClose}= useModalState(false);

  useEffect(()=>{
    onOpen();
  },[])

  return (
    <>
      <StyledBtnSection>
        {
          {
            meetComplete: (
              <>
                  <BottomSheet isOpen={isOpen}>
                    <BottomSheetDescription>
                      <Text font={'head2'} color={'white'}>회의방 링크가 생성되었어요!</Text>
                      <Text font={'title2'} color={`${theme.colors.grey4}`}>링크를 복사하여 팀원에게 공유해주세요</Text>
                    </BottomSheetDescription>
                    <CopyToClipboard text={`${import.meta.env.VITE_WEB_IP}/meet/${meetInfo.meetingId}`}>
                      <Button typeState={'primaryActive'} onClick={onClose}>
                        <Text font={'button2'}>링크 복사하기</Text>
                      </Button>
                    </CopyToClipboard>
                    <Button typeState={'quaternaryDisabled'} onClick={onClose}>
                      <Text font={'button2'}>나중에 공유하기</Text>
                    </Button>
                </BottomSheet>
                <Link to={`/host/select/${meetInfo.meetingId}`}>
                  <Button typeState={'primaryActive'}>
                    <Text font={'button2'}>나의 가능시간 입력</Text>
                  </Button>
                </Link>
              </>
            ),
            hostScheduleComplete: (
              <>
                <Link to={`/host/${meetingId}`}>
                  <Button typeState={'halfTertiaryActive'}>
                    <Text font={'button2'}>방장페이지 입장</Text>
                  </Button>
                </Link>
                <CopyToClipboard
                  text={`${import.meta.env.VITE_WEB_IP}/meet/${meetingId}`}
                >
                  <Button typeState={'halfPrimaryActive'} onClick={notify}>
                    <Text font={'button2'}>링크 복사하기</Text>
                  </Button>
                </CopyToClipboard>
              </>
            ),
            meetEntrance: (
              <>
                <Link to={`/login/host/${meetingId}`}>
                  <Button typeState={'halfSecondaryActive'}>
                    <Text font={'button2'}>방장 입장하기</Text>
                  </Button>
                </Link>
                <Link to={`/login/member/${meetingId}`}>
                  <Button typeState={'halfPrimaryActive'}>
                    <Text font={'button2'}>팀원 입장하기</Text>
                  </Button>
                </Link>
              </>
            ),
            memberScheduleComplete: (
              <>
                <Link to={`/`}>
                  <Button typeState={'primaryActive'}>
                    <Text font={'button2'}>홈으로 돌아가기</Text>
                  </Button>
                </Link>
              </>
            ),
          }[steppingType]
        }
      </StyledBtnSection>
    </>
  );
}

export default SteppingBtnSection;

const StyledBtnSection = styled.section`
  display: flex;
  position: absolute;
  bottom: 1.2rem;
  flex-direction: row;
  gap: 1.4rem;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
  
`;


const BottomSheetDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
  padding-left: 0.9rem;
`;
