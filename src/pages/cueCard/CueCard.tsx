import { useEffect, useRef, useState } from 'react';

import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import Header from 'components/common/moleculesComponents/Header';
import html2canvas from 'html2canvas';
import CueCardTitle from 'pages/cueCard/components/CueCardTitle';
import useShareLink from 'src/\bhooks/useShareLink';
import styled from 'styled-components';
import { downLoadNotify } from 'utils/toast/copyLinkToast';

import Qcard from './components/Qcard';

function CueCard() {
  const imageRef = useRef(null);
  const { handleWebShare } = useShareLink('cueCard');
  const [btnText, setBtnText] = useState('');
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

  useEffect(() => {
    const handleBtnText = async () => {
      if (navigator.share) {
        setBtnText('링크 공유하기');
      } else {
        setBtnText('링크 복사하기');
      }
    };

    handleBtnText();
  }, []);

  return (
    <CueCardWrapper>
      <Header position={'cueCard'} />
      <CueCardTitle main={'일정 조율 완료!'} sub={'이미 확정된 회의 일정입니다'} />
      <Qcard ref={imageRef} />
      <BottomBtnSection>
        <Button typeState={'halfTertiaryActive'} onClick={handleWebShare}>
          <Text font={'button2'}>{btnText}</Text>
        </Button>

        <Button
          typeState={'halfPrimaryActive'}
          onClick={() => {
            downLoadNotify();
            downLoadImage();
          }}
        >
          <Text font={'button2'}>이미지 저장하기</Text>
        </Button>
      </BottomBtnSection>
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
