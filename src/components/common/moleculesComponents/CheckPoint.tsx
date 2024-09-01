import styled from 'styled-components';
import { theme } from 'styles/theme';

import Text from '../atomComponents/Text';
/**
 * 이미지, 메인텍스트, 서브텍스트로 이루어진 재사용 컴포넌트
 * @returns asap 페이지에 기본이 되는 컴포넌트
 * @param {imgURL} : image
 * @param {mainText}
 * @param {subText}
 */
interface CheckPointProps {
  imgURL: string;
  mainText: string;
  subText: string;
}

const CheckPoint = ({ imgURL, mainText, subText }: CheckPointProps) => {
  return (
    <>
      <ImageSection src={imgURL} />
      <TextWrapper>
        <Text font={'head1'} color={`${theme.colors.white}`}>
          {mainText}
        </Text>
        <Text font={'body1'} color={`${theme.colors.grey4}`}>
          {subText}
        </Text>
      </TextWrapper>
    </>
  );
};

export default CheckPoint;

const ImageSection = styled.img`
  margin-top: 10.7rem;

  width: 21.3rem;
  height: 19.9rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`;
