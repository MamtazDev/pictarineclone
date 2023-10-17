import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CarouselMeetTeam.css";

import Slider from "react-slick";

const NextArrow = ({ onClick }) => (
  <img
    src="https://img.icons8.com/ios/50/forward--v1.png"
    width={50}
    height={50}
    className="custom-slick-arrow custom-next-arrow"
    onClick={onClick}
  />
);

const PrevArrow = ({ onClick }) => (
  <img
    src="https://img.icons8.com/ios/50/back--v1.png"
    width={50}
    height={50}
    className="custom-slick-arrow custom-prev-arrow"
    onClick={onClick}
  />
);

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
