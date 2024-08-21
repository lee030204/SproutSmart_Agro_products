import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homevege() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        const api ='http://localhost:3001/homeveg';
        axios.get(api)
        .then(response=>
        {
            setData(response.data);
        })
        .catch(error=>
            {
                console.log(error);
            }
        )
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      };
  return (
    <div>
        <h2 style={{marginLeft:"30px",fontSize:"50px"}}>To Selling Products in Vegetables</h2>
        <div style={{marginLeft:"40px"}}>
          { 
            <Slider {...settings}>
              {data.map(dataItem => (
                <div key={dataItem.id}>
                  <div className="hello">
                    <img src={dataItem.img}  className="img" style={{width:"420px",height:"400px"}}/>
                  </div>
                </div>
              ))}
            </Slider>
          }
        </div>
    </div>
  )
}

export default Homevege;