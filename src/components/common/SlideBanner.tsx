import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/slickCustom.scss";

import banner1 from "../../assets/images/home/banner1.png";
import banner2 from "../../assets/images/home/banner2.png";

const SlideBanner = () => {
  const settings = {
    className: "slider variable-width portfolio-slide",
    arrows: false,
    dots: false,
    dotsClass: "dots_custom",
    infinite: false,
    speed: 500,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <>
      {/* 상단 배너 슬라이드 */}
      <Slider {...settings}>
        <div>
          <img style={{ width: "32rem" }} src={banner1} alt="메인배너1" />
        </div>
        <div>
          <img style={{ width: "32rem" }} src={banner2} alt="메인배너2" />
        </div>
      </Slider>
    </>
  );
};

export default SlideBanner;
