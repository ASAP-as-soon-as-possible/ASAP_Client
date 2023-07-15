import { useRef } from 'react';

import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import html2canvas from 'html2canvas';
import CueCardTitle from 'pages/cueCard/components/CueCardTitle';
import styled from 'styled-components/macro';

import Qcard from './components/Qcard';


function CueCard() {

  const imageRef = useRef(null);

const downLoadImage = () => {
  if (imageRef.current) {
    html2canvas(imageRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = "myimage.png";
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
}

const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('복사 성공!');
  } catch (error) {
    alert('복사실패! 아삽미쳤다 amugoto motaZo?!');
  }
};

  return (
    <CueCardWrapper >
      <Header />
      <CueCardTitle main={'일정 조율 완료!'} sub={'이미 확정된 회의 일정입니다'} />
      <Qcard ref={imageRef} />
      <ButtonSection>
        <Button typeState={'halfTertiaryActive'} onClick={() => handleCopyClipBoard('복사된 텍스트')}>
          <Text font={'button2'}>링크 복사하기</Text>
        </Button>
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
