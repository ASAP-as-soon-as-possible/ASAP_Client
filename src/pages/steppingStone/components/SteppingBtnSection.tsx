

import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { notify } from 'utils/toast/copyLinkToast';

interface SteppingProps {
  steppingType: string;
}

function SteppingBtnSection({ steppingType }: SteppingProps) {
  const { meetingId } = useParams();

  const navigate=useNavigate();

  return (
    <>
      <BottomBtnSection>
        {
          {
            hostScheduleComplete: (
              <>
                  <Button typeState={'halfTertiaryActive'} onClick={()=>navigate(`/host/${meetingId}`)}>
                    <Text font={'button2'}>방장페이지 입장</Text>
                  </Button>
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
                  <Button typeState={'halfSecondaryActive'} onClick={()=>navigate(`/login/host/${meetingId}`)}>
                    <Text font={'button2'}>방장 입장하기</Text>
                  </Button>
                  <Button typeState={'halfPrimaryActive'} onClick={()=>navigate(`/login/member/${meetingId}`)}>
                    <Text font={'button2'}>팀원 입장하기</Text>
                  </Button>
              </>
            ),
            memberScheduleComplete: (
              <>
                  <Button typeState={'primaryActive'} onClick={()=>navigate("/")}>
                    <Text font={'button2'}>홈으로 돌아가기</Text>
                  </Button>
              </>
            ),
          }[steppingType]
        }
      </BottomBtnSection>
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


