import { useEffect } from 'react';

import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomSheet from 'components/common/BottomSheet/BottomSheet';
import useModalState from 'components/common/Modal/hooks/useModalState';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function CreateMeetingBottomSheet() {
    const { meetingId } = useParams();

    const {isOpen, onOpen, onClose}= useModalState(false);

    useEffect(()=>{
      onOpen();
    },[])

  return (
    <>
        <BottomSheet isOpen={isOpen}>
            <BottomSheetDescription>
                <Text font={'head2'} color={'white'}>회의방 링크가 생성되었어요!</Text>
                <Text font={'title2'} color={`${theme.colors.grey4}`}>링크를 복사하여 팀원에게 공유해주세요</Text>
            </BottomSheetDescription>
            <CopyToClipboard text={`${import.meta.env.VITE_WEB_IP}/meet/${meetingId}`}>
                <Button typeState={'primaryActive'} onClick={onClose}>
                <Text font={'button2'}>링크 복사하기</Text>
                </Button>
            </CopyToClipboard>
            <Button typeState={'quaternaryDisabled'} onClick={onClose}>
                <Text font={'button2'}>나중에 공유하기</Text>
            </Button>
        </BottomSheet>
    </>
  )
}

export default CreateMeetingBottomSheet;

const BottomSheetDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
  padding-left: 0.9rem;
`;