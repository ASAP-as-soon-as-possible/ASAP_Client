
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { notify } from 'utils/toast/copyLinkToast';


interface SteppingProps {
  steppingType: string;
}

function SteppingBtnSection({ steppingType }: SteppingProps) {
  const { meetingId } = useParams();

  return (
    <>
      <StyledBtnSection>
        {
          {
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
