import { Suspense, useRef, useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import html2canvas from 'html2canvas';
import CueCardTitle from 'pages/cueCard/components/CueCardTitle';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components/macro';

import Qcard from './components/Qcard';

function CueCard() {
  const imageRef = useRef(null);

  const downLoadImage = () => {
    if (imageRef.current) {
      html2canvas(imageRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'myimage.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  const currentURL = window.location.href;

  //차후 toast-library 사용시 이용할 상태관리
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Suspense fallback={<LoadingPage />}>
      <CueCardWrapper>
        <Header position={'cueCard'} />
        <CueCardTitle main={'일정 조율 완료!'} sub={'이미 확정된 회의 일정입니다'} />
        <Qcard ref={imageRef} />
        <ButtonSection>
          <CopyToClipboard text={currentURL} onCopy={handleCopy}>
            <Button typeState={'halfTertiaryActive'}>
              <Text font={'button2'}>링크 복사하기</Text>
            </Button>
          </CopyToClipboard>
          <Button typeState={'halfPrimaryActive'} onClick={downLoadImage}>
            <Text font={'button2'}>이미지 저장하기</Text>
          </Button>
        </ButtonSection>
      </CueCardWrapper>
    </Suspense>
  );
}

export default CueCard;

const CueCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 1.2rem;
  flex-direction: row;
  gap: 1.4rem;
  justify-content: center;
`;

const LoadingPage = styled.div`
  z-index: 2;
  background-color: yellow;
  width: 100%;
  height: 100vh;
`;
