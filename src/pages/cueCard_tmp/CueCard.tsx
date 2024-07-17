import { useRef } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import html2canvas from 'html2canvas';
import CueCardTitle from 'pages/cueCard/components/CueCardTitle';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components/macro';
import { downLoadNotify, notify } from 'utils/toast/copyLink';

import Qcard from './components/Qcard';

function CueCard() {
  const imageRef = useRef(null);

  const downLoadImage = () => {
    if (imageRef.current) {
      html2canvas(imageRef.current, { backgroundColor: null }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'myimage.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  const currentURL = window.location.href;

  return (
    <CueCardWrapper>
      <Header position={'cueCard'} />
      <CueCardTitle main={'일정 조율 완료!'} sub={'이미 확정된 회의 일정입니다'} />
      <Qcard ref={imageRef} />
      <ButtonSection>
        <CopyToClipboard text={currentURL}>
          <Button typeState={'halfTertiaryActive'} onClick={notify}>
            <Text font={'button2'}>링크 복사하기</Text>
          </Button>
        </CopyToClipboard>
        <Button
          typeState={'halfPrimaryActive'}
          onClick={() => {
            downLoadNotify();
            downLoadImage();
          }}
        >
          <Text font={'button2'}>이미지 저장하기</Text>
        </Button>
      </ButtonSection>
    </CueCardWrapper>
  );
}

export default CueCard;

const CueCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const ButtonSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 1.2rem;
  flex-direction: row;
  gap: 1.4rem;
  justify-content: center;
`;
