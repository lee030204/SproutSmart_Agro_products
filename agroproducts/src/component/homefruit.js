import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homefruit = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api = 'http://localhost:3001/homefruit';
    axios.get(api)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div >
      <h2 style={{ marginLeft: "30px", fontSize: "50px" }}>Top Selling Products in Fruits</h2>
      <div style={{ marginLeft: "40px" }}>
        <Slider {...settings}>
          {data.map(dataItem => (
            // <div key={dataItem.id} data-aos="fade-up">
            <div key={dataItem.id} data-aos="fade-up-right">
              <div className="hello">
                <img src={dataItem.img} className="img" style={{ width: "420px", height: "400px" }} alt={dataItem.name}/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Homefruit;
