import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "./Home.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import sliderData from '../../data/slider.json';

SwiperCore.use([Navigation, Scrollbar, Autoplay, A11y])

function Home() {
  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            scrollbar={{ draggable: true }}
          >
            {sliderData.map(slide => {
              return (
                <SwiperSlide key={slide.index}>
                  <img src={slide.picture} alt={slide.company} />
                  <p className="slider__text">{slide.about}</p>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div >
  );
}

export default Home;