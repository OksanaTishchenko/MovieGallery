import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import './Home.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import poster1 from '../../images/slider/poster-01.png';
import poster2 from '../../images/slider/poster-02.png';
import poster3 from '../../images/slider/poster-03.png';

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
            //pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                {/* <img src="../images/slider/poster-01.png" alt="" /> */}
                <img src={poster1} alt="poster1" />
              </div>
            </SwiperSlide>
            <SwiperSlide><img src={poster2} alt="poster2" /></SwiperSlide>
            <SwiperSlide><img src={poster3} alt="poster3" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div >
  );
}

export default Home;