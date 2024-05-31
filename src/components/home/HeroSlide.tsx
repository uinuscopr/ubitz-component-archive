import "../../assets/css/heroSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/images/home/test1.png";
import img2 from "../../assets/images/home/test2.jpg";
import img3 from "../../assets/images/home/test3.jpg";
import img4 from "../../assets/images/home/test4.jpg";
import img5 from "../../assets/images/home/test5.png";

// Import Swiper styles
import "swiper/css";

export default function heroSlide() {
  return (
    <>
      <section className="hero-slide-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={img1} alt="테스트 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="테스트 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="테스트 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="테스트 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="테스트 이미지" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
