import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function AboutSlide() {
  const [data] = useState([
    { id: 1, img: "https://cdn.create.vista.com/api/media/small/46496699/stock-photo-corn-field" },
    { id: 2, img: "https://www.shutterstock.com/image-photo/hand-planting-seedling-growing-step-600nw-1732057171.jpg" },
    { id: 3, img: "https://www.shutterstock.com/image-photo/young-corn-plants-growing-on-600nw-2299683499.jpg" },
    // Add more slides as needed
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mani">
      <div className="hole">
        <Slider {...settings}>
          {data.map(dataItem => (
            <div key={dataItem.id}>
              <div className="hello">
                <img src={dataItem.img} alt={`Slide ${dataItem.id}`} className="img" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AboutSlide;
