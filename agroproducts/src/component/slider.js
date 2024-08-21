import React, { useEffect, useState } from "react";
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function Sliderer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = 'http://localhost:3001/slider';
    axios.get(api)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
        { 
          <Slider {...settings}>
            {data.map(dataItem => (
              <div key={dataItem.id}>
                <div className="hello">
                  <img src={dataItem.img} alt={`Slide ${dataItem.id}`} className="img" />
                </div>
              </div>
            ))}
          </Slider>
        }
      </div>
    </div>
  );
}

export default Sliderer;
