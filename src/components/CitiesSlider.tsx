import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CityCard from "./CityCard";


const CitiesSlider = () => {
  let settings = {
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider className="w-full mt-10 flex justify-between" {...settings}>
      <CityCard city={0} />
      <CityCard city={1} />
      <CityCard city={2} />
      <CityCard city={3} />
      <CityCard city={4} />
      <CityCard city={5} />
    </Slider>
  );
};

export default CitiesSlider;
