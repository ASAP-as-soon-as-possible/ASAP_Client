import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import { CardIc, InsertIc, MakeIc, PointIc } from 'components/Icon/icon';
import Header from 'components/moleculesComponents/Header';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Explain from './components/Explain';

const slides = [
  {
    icon: <MakeIc />,
    main: '간단한 회의방 생성',
    sub1: '1분만에 회의방을 만들고',
    sub2: '회의정보와 함께 전달하고 싶은 내용을 추가해보세요',
  },
  {
    icon: <InsertIc />,
    main: '시간대 우선순위 입력',
    sub1: '클릭 한번으로 선호하는 회의 시간의',
    sub2: '우선순위를 입력하세요',
  },
  {
    icon: <PointIc />,
    main: '최적의 시간대 도출',
    sub1: '모든 팀원이 만족할 만한',
    sub2: '한계의 시간대를 안내해줄게요',
  },
  {
    icon: <CardIc />,
    main: '회의정보 큐카드 제공',
    sub1: '한눈에 회의정보를 확인하고',
    sub2: '쉽게 공유해보세요',
  },
];

function OnBoarding() {
  return (
    <>
      <OnboardingWrapper>
        <Header position={'onBoarding'} />
        <SwiperSection>
          <SwiperContext>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {slides.map((slide, index) => (
                <StyledSwiperSlide key={index}>
                  <SvgContainer>{slide.icon}</SvgContainer>
                  <ExplainContainer>
                    <Explain main={slide.main} sub1={slide.sub1} sub2={slide.sub2} />
                  </ExplainContainer>
                </StyledSwiperSlide>
              ))}
            </Swiper>
          </SwiperContext>
        </SwiperSection>
        <ButtonSection>
          <Link to={'/meet/create'}>
          <Button typeState={'primaryActive'}>
            <Text font={'button2'}>약속 생성하기</Text>
          </Button>
          </Link>
        </ButtonSection>
      </OnboardingWrapper>
    </>
  );
}

export default OnBoarding;

const OnboardingWrapper = styled.div`
  width: 100%;
`;

const SwiperContext = styled.div`
  width: 100%;
  height: 50rem;
`;

const SwiperSection = styled.section``;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
`;

const SvgContainer = styled.section`
  svg {
    width: 25rem;
    height: 25rem;
  }
`;

const ExplainContainer = styled.section`
  margin: 5rem 0;
`;

const ButtonSection = styled.section`
  position: fixed;
  bottom: 1.2rem;
`;
