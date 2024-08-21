
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './rolling.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function RollingContent() {
    const[data, setData] = useState([]);
    
    useEffect(() => {
        const api = 'http://localhost:3001/homefru';
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
    
    return (
        <div className='manik'>
            {data.map(dataItem => (
                <div key={dataItem.id} className='kannank' data-aos="fade-down">
                    <Link to={dataItem.path} className='kj'>
                    <img src={dataItem.img} alt={dataItem.data} className="imgglk00" style={{borderRadius:"5px"}}/>
                    <div className="cardk">
                        <h2>{dataItem.data}</h2>
                        <p>{dataItem.owner} </p>
                        <h7 style={{color:"red"}}><i className="fa-solid fa-location-dot"></i> {dataItem.place}</h7>
                        <br />
                        <br />
                        <button style={{width:"80px",height:"30px",backgroundColor:"green",borderRadius:"4px",color:"white"}}>View More</button>
                        {/* <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Green to Blue</button> */}
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default RollingContent;
