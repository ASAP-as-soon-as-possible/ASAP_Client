import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CardPng from 'assets/images/card.png';
import InsertPng from 'assets/images/insert.png';
import MakePng from 'assets/images/make.png';
import PointPng from 'assets/images/point.png';
import Button from 'components/common/atomComponents/Button';
import Text from 'components/common/atomComponents/Text';
import BottomBtnSection from 'components/common/moleculesComponents/BottomBtnSection';
import Header from 'components/common/moleculesComponents/Header';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Explain from './components/Explain';

const slides = [
  {
    icon: <img src={MakePng} alt="png" />,
    main: '간단한 회의방 생성',
    sub1: '1분만에 회의방을 만들고',
    sub2: '회의정보와 함께 전달하고 싶은 내용을 추가해보세요',
  },
  {
    icon: <img src={InsertPng} alt="png" />,
    main: '시간대 우선순위 입력',
    sub1: '클릭 한번으로 선호하는 회의 시간의',
    sub2: '우선순위를 입력하세요',
  },
  {
    icon: <img src={PointPng} alt="png" />,
    main: '최적의 시간대 도출',
    sub1: '모든 팀원이 만족할 만한',
    sub2: '한개의 시간대를 안내해줄게요',
  },
  {
    icon: <img src={CardPng} alt="png" />,
    main: '회의정보 큐카드 제공',
    sub1: '한눈에 회의정보를 확인하고',
    sub2: '쉽게 공유해보세요',
  },
];

function OnBoarding() {
  const navigate = useNavigate();
  const handleCreateMeeting = () => {
    navigate('/meet/create?step=title');
  };
  return (
    <>
      <OnboardingWrapper>
        <Header position={'onBoarding'} />
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
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {slides.map((slide, index) => (
                <StyledSwiperSlide key={index}>
                  {/* <SvgContainer>{slide.icon}</SvgContainer> */}
                  {/* 로딩 속도로 차선책 png code */}
                  <SvgContainer>{slide.icon}</SvgContainer>
                  <>
                    <Explain main={slide.main} sub1={slide.sub1} sub2={slide.sub2} />
                  </>
                </StyledSwiperSlide>
              ))}
            </Swiper>
          </SwiperContext>
        <BottomBtnSection>
          <Button typeState={'primaryActive'} onClick={handleCreateMeeting}>
            <Text font={'button2'}>회의 일정 정하기</Text>
          </Button>
        </BottomBtnSection>
      </OnboardingWrapper>
    </>
  );
}

export default OnBoarding;

const OnboardingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
`;

const SwiperContext = styled.div`
  width: 100%;
  height: 50rem;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
`;

const SvgContainer = styled.section`
  img {
    width: 33rem;
    height: 33rem;
  }
`;
