// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import CSS from '../../assets/icons/CSS/CSS.ico';
import HTML from '../../assets/icons/HTML/HTML.ico';
import JS from '../../assets/icons/JS/JS.ico';
import TS from '../../assets/icons/TS/TS.ico';
import NextJS from '../../assets/icons/NextJS/NextJS.ico';

const CarroselIcons = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='carousel-icon' src={HTML}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className='carousel-icon' src={CSS}></img>
      </SwiperSlide>

      <SwiperSlide>
        <img className='carousel-icon' src={JS}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className='carousel-icon' src={TS}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className='carousel-icon' src={NextJS}></img>
      </SwiperSlide>
    </Swiper>
  );
};
export default CarroselIcons;
