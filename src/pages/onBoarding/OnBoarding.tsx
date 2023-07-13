import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function OnBoarding() {
  return (
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
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 1
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 2
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 3
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 4
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 5
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 6
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 7
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 8
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text font={'body1'} color={`${theme.colors.white}`}>
                Slide 9
              </Text>
            </SwiperSlide>
          </Swiper>
        </SwiperContext>
      </SwiperSection>
    </OnboardingWrapper>
  );
}

export default OnBoarding;

const OnboardingWrapper = styled.div`
  width: 100%;
`;

const SwiperContext = styled.div`
  /* border: 2px solid ${theme.colors.white}; */
  width: 100%;
  height: 50rem;
`;

const SwiperSection = styled.section`
margin-top:3rem;
`;

const Img = styled.img`
  width: 100%;
  height: 20rem;
`;
