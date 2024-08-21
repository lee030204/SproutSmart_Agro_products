
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './topproducts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function TopProduct() {
    const[data, setData] = useState([]);
    
    useEffect(() => {
        const api = 'http://localhost:3001/topproduct';
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
        <div className='container'>
            {data.map(dataItem => (
                <div key={dataItem.id} className='card' >
                    <Link to={dataItem.path} className='kj'>
                    <img src={dataItem.img} alt={dataItem.data} className="imgg" data-aos="fade-up-right"/>
                    <div className="card-content">
                        <h2 style={{textDecoration:"none",color:"white",}}>{dataItem.data}</h2>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TopProduct;
