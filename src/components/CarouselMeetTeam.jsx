import "../styles/CarouselMeetTeam.css";
import { useState } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const videoIds = [
  "AwrZoNgM6HU",
  "yIv5VJeROl8",
  "gjqMIQyKK7k",
  "Cv2H3nFk4As",
  "t5tAsV2YESo",
  "CSHOiUYHD9k",
];

function CarouselMeetTeam() {
  const NextArrow = ({ onClick }) => (
    <div className="arrow-next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "470px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {videoIds.map((videoId, idx) => (
          <div
            key={videoId}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <div className="video-container">
              <YouTube videoId={videoId} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselMeetTeam;
