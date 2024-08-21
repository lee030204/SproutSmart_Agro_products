/*

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './homespecies.css';
import Marquee from '../class_activity/Marque';

function FarmerHome() {
    const [farmerData, setFarmerData] = useState([]);
    const [categoryImages, setCategoryImages] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from both APIs
                const [farmerResponse, singleResponse] = await Promise.all([
                    axios.get('http://localhost:8080/farmerdata'),
                    axios.get('http://localhost:8080/single'),
                ]);

                // Process and set farmer data
                setFarmerData(farmerResponse.data);

                // Process and set category images
                const imageMap = singleResponse.data.reduce((acc, single) => {
                    acc[single.category] = single.img;
                    return acc;
                }, {});

                setCategoryImages(imageMap);

            } catch (error) {
                console.log("API Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='nn'>
            <h4 style={{ marginLeft: '30px', fontSize: '30px' }}>Recently Added</h4>
            <Marquee />
            <div className='nan'>
                {farmerData.map(dataItem => {
                    const imgUrl = categoryImages[dataItem.category] || "https://via.placeholder.com/250";
                    console.log("Product:", dataItem.product, "Image URL:", imgUrl);

                    return (
                        <div key={dataItem.id} className='kannankopo' style={{ height: "660px", borderRadius: "20px", backgroundColor: "aliceblue", display: "flex", flexDirection: "column", margin: "20px" }}>
                            <div className='imgglk' style={{ width: "350px", height: "340px" }}>
                                <img
                                    src={imgUrl}
                                    alt={dataItem.product}
                                    style={{ width: "250px", height: "200px", marginLeft: "45px", marginBottom: "-10px", marginTop: "-110px", borderRadius: "2px" }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250"; }}
                                />
                                <div className='cardk'>
                                    <h2>{dataItem.product}</h2>
                                    <h2>{dataItem.name}</h2>
                                    <p style={{ marginLeft: "68px" }}> {dataItem.description} </p>
                                    <p style={{ color: "red" }}> <i className="fa-solid fa-location-dot"></i> {dataItem.location}</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p style={{ marginBottom: "0px", marginLeft: "75px", paddingBottom: "10px" }}>Quantity: {dataItem.quantity} Kg</p>
                                    </div>
                                    <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FarmerHome;

*/

















import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './homespecies.css';
import FarmMachine from './farmmachine';
import Marquee from '../class_activity/Marque';


function FarmerHome() {
    const [data, setData] = useState([]);

    const farmerdata = {
        vegetable: "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=ZJyLIXEa10DQTtvH8vVLQh3ZDqxmt4soKhPRaQE23k8=",
        fruit: "https://thumbs.dreamstime.com/z/heart-fruits-vegetables-fit-healthy-lifestyle-concept-perfect-diet-oranges-apples-tomatoes-blackberries-grapes-kiwi-301160222.jpg?w=768",
        spices: "https://t4.ftcdn.net/jpg/01/02/58/91/360_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg",
        nuts: "https://media.istockphoto.com/id/496689738/photo/assorted-nuts.jpg?s=612x612&w=0&k=20&c=lJhqPaHqwvXiDFNni5nB9EKgvYlqMEljI-0JzaB-ZNA=",
        farmmachine: "https://i.pinimg.com/originals/68/22/83/682283c0aa432a66027622dd5ed551db.jpg",
        cropproduction: "https://media.istockphoto.com/id/1346744481/photo/anonymous-chef-harvesting-fresh-vegetables-on-a-farm.jpg?s=612x612&w=0&k=20&c=U9h4fAi68nwVndAJW8TF-f2lFFCO2Y-XrZWA2gah1Xw=",
        seed: "https://img.freepik.com/premium-photo/various-seeds-diet-eating-professional-advertising-food-photography_920594-35032.jpg",
        rice: "https://st.depositphotos.com/1056373/1930/i/950/depositphotos_19303401-stock-photo-wooden-scoops-with-different-rice.jpg"
    };

    useEffect(() => {
        
        const api = 'http://localhost:3001/farmer';
        axios.get(api)
            .then(response => {
                console.log("API Response:", response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log("API Error:", error);
            });
    }, []);

    const normalizeProductName = (productName) => {
        return productName.toLowerCase().replace(/\s+/g, '');
    }

    return (
        <div className='nn' >
            <h4 style={{ marginLeft: '30px', fontSize: '30px' }}>Recently Added</h4>
            <Marquee />
            <div className='nan' >
                {data.map(dataItem => {
                    const normalizedProduct = normalizeProductName(dataItem.product);
                    const imgUrl = farmerdata[normalizedProduct];
                    console.log("Product:", dataItem.product, "Normalized:", normalizedProduct, "Image URL:", imgUrl);

                    return (
                        <div key={dataItem.id} className='kannankopo'  style={{height:"660px",borderRadius:"20px",backgroundColor:"aliceblue",display:"flex",flexDirection:"column",margin:"20px"}}>
                            <div className='imgglk' style={{ width: "350px", height: "340px" }}>
                                <img
                                    src={dataItem.category}
                                    
                                    style={{ width: "250px", height: "200px", marginLeft: "45px", marginBottom: "-10px", marginTop: "-110px", borderRadius: "2px" }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250"; }}
                                />
                                <div className='cardk' >
                                    <h2>{dataItem.product}</h2>
                                    <h2>{dataItem.name}</h2>
                                    <p style={{ marginLeft: "68px" }}> {dataItem.description} </p>
                                    <p style={{ color: "red" }}> <i className="fa-solid fa-location-dot"></i> {dataItem.location}</p>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <p style={{ marginBottom: "0px", marginLeft: "75px", paddingBottom: "10px" }}>Quantity: {dataItem.quantity} Kg</p>
                                    </div>
                                    <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FarmerHome;
