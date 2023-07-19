import { useEffect, useRef, useState } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import html2canvas from 'html2canvas';
import CueCardTitle from 'pages/cueCard/components/CueCardTitle';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
import { cueCardResponse } from 'src/types/cueCardType';
import styled from 'styled-components/macro';
import { client } from 'utils/apis/axios';

import Qcard from './components/Qcard';

function CueCard() {
  const imageRef = useRef(null);
  const { meetingId } = useParams();

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

  const getCueCardData = async () => {
    const result: cueCardResponse = await client.get(`/meeting/${meetingId}/card`);
    console.log(result);
    setCueCardData(result);
  };
  useEffect(() => {
    getCueCardData();
  }, []);
  const [cueCardData, setCueCardData] = useState<cueCardResponse>();

  return (
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
