import React, { useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

interface SteppingProps {
  steppingType: string;
}

function SteppingBtnSection({ steppingType }: SteppingProps) {
  const location = useLocation();
  const meetInfo = { ...location.state };
  const { meetingId } = useParams();
  console.log(meetInfo);

  //차후 toast-library 사용시 이용할 상태관리
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <StyledBtnSection>
        {
          {
            meetComplete: (
              <>
                {/* 이후 도메인 시 연결 */}
                {/* <CopyToClipboard text={`${import.meta.env.VITE_APP_IP}/meet/${meetInfo.meetingId}`} onCopy={handleCopy}> */}
                <CopyToClipboard
                  text={`http://172.23.135.46:5173/meet/${meetInfo.meetingId}`}
                  onCopy={handleCopy}
                >
                  <Button typeState={'halfTertiaryActive'}>
                    <Text font={'button2'}>링크 복사하기</Text>
                  </Button>
                </CopyToClipboard>
                <Link to={`/schedule/${meetInfo.meetingId}`}>
                  <Button typeState={'halfPrimaryActive'}>
                    <Text font={'button2'}>나의 가능시간 입력</Text>
                  </Button>
                </Link>
              </>
            ),
            hostScheduleComplete: (
              <>
                <Link to={`/meet/${meetingId}`}>
                  <Button typeState={'halfTertiaryActive'}>
                    <Text font={'button2'}>방장페이지 입장</Text>
                  </Button>
                </Link>
                <CopyToClipboard
                  text={`http://172.23.135.46:5173/meet/${meetingId}`}
                  onCopy={handleCopy}
                >
                  <Button typeState={'halfPrimaryActive'}>
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
  position: fixed;
  bottom: 1.2rem;
  flex-direction: row;
  gap: 1.4rem;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
`;
