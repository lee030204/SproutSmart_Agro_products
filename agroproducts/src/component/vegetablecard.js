


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './vegetables.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import {useNavigate, useParams } from "react-router-dom";
// // import VegeCategory from './vegecategory';

// function VegetableCard() {
//     const [data, setData] = useState([]);
    
//     const [counters, setCounters] = useState({});
    
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [cartItems, setCartItems] = useState([]);
//     const { idvalue } = useParams();
//     const [dataItem, setDataItem] = useState({});

//     useEffect(() => {
//         const api = 'http://localhost:3001/vegetables';
//         axios.get(api)
//             .then(response => {
//                 setData(response.data);
                
//                 const initialCounters = {};
//                 response.data.forEach(item => {
//                     initialCounters[item.id] = 0;
//                 });
//                 setCounters(initialCounters);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);

//     useEffect(() => {
//         AOS.init({
//             duration: 1000, 
//         });
//     }, []);

//     const incrementCounter = (id) => {
//         setCounters(prevCounters => ({
//             ...prevCounters,
//             [id]: prevCounters[id] + 1,
//         }));
//     };

//     const decrementCounter = (id) => {
//         setCounters(prevCounters => ({
//             ...prevCounters,
//             [id]: Math.max(prevCounters[id] - 1, 0), 
//         }));
//     };

    
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/vegetables/${idvalue}`);
//         setDataItem(response.data);
  
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
    
//     useEffect(() => {
//       console.log(idvalue);
//       fetchData();
//     }, [idvalue]);
  
//     const addToCart = () => {
//       const updatedCartItems = [...cartItems, dataItem];
//       setCartItems(updatedCartItems);
//       localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//       setTotalPrice(totalPrice + dataItem.price);
//     };
//     useEffect(() => {
//       fetchData();
//       const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//       setCartItems(storedCartItems);
//       const price = storedCartItems.reduce((total, item) => total + item.price, 0);
//       setTotalPrice(price);
//     }, [idvalue]);
    
//     return (
//         <div>
             
//         <div className='amanik'>
           
//                 <div key={dataItem.id} className='akannank' data-aos="fade-left" >
//                     <img src={dataItem.img} alt={dataItem.data} className="aimgglk00" style={{ borderRadius: "5px" }} />
//                     <div className="acardk">
//                         <h2>{dataItem.data}</h2>
//                         <p>{dataItem.owner}</p>
//                         <h7 style={{ color: "red" }}><i className="fa-solid fa-location-dot"></i> {dataItem.place}</h7>
//                         <div style={{ display: "flex", alignItems: "center" }}>
//                             <h7 style={{ marginLeft: "68px" }}>{dataItem.offer}</h7>
//                             <p style={{ textDecoration: "line-through", marginBottom: "0px", marginLeft: "15px", marginBottom: "3px", paddingBottom: "10px" }}>{dataItem.original}</p>
//                         </div>
//                         <div key={dataItem.id}>
//                             <button
//                                 onClick={() => decrementCounter(dataItem.id)}
//                                 style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>-</button>&nbsp;&nbsp;
//                             <button style={{ width: "70px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>{counters[dataItem.id]} Kg</button>&nbsp;&nbsp;
//                             <button
//                                 onClick={() => incrementCounter(dataItem.id)}
//                                 style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>+</button>&nbsp;&nbsp;
//                         </div><br />
//                         <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button' onClick={addToCart}>Buy Now</button>
//                     </div>
//                 </div>
          
//         </div>
//         </div>
//     );
// }

// export default VegetableCard;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './vegetables.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'sonner';


function VegetableCard() {
    const navigate = useNavigate();
    const [dataItem, setDataItem] = useState({});
    const [counters, setCounters] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const {idvalue,category} = useParams();

    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, []);

    const incrementCounter = (id) => {
        setCounters(prevCounters => ({
            ...prevCounters,
            [id]: prevCounters[id] + 1,
        }));
    };

    const decrementCounter = (id) => {
        setCounters(prevCounters => ({
            ...prevCounters,
            [id]: Math.max(prevCounters[id] - 1, 0), 
        }));
    };

    const fetchData = async () => {
        
        try {
            const response = await axios.get(`http://localhost:3001/fruits/${idvalue}`);
            console.log(response.data);
            setDataItem(response.data);

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        if (idvalue) {
            fetchData();
        }
    }, [idvalue]);

    const addToCart = () => {
        const updatedCartItems = [...cartItems, dataItem];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setTotalPrice(totalPrice + dataItem.price);
        toast.success(`Product Added Successfully`);
    };

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
        const price = storedCartItems.reduce((total, item) => total + item.price, 0);
        setTotalPrice(price);
    }, []);

    if (!dataItem.id) {
        return <div>No item selected.</div>; 
    }

  
   

    return (
        <div style={{marginLeft:"190px"}}>
            <br />
        <div className='amanik' >
            <div key={dataItem.id} className='akannank' data-aos="fade-left">
                <img src={dataItem.img} alt={dataItem.data} className="aimgglk00" style={{ borderRadius: "5px" }} />
                <div className="acardk">
                    <h2>{dataItem.data}</h2>
                    <p>{dataItem.owner}</p>
                    <h7 style={{ color: "red" }}><i className="fa-solid fa-location-dot"></i> {dataItem.place}</h7>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h7 style={{ marginLeft: "68px" }}>{dataItem.offer}</h7>
                        <p style={{ textDecoration: "line-through", marginBottom: "0px", marginLeft: "15px", marginBottom: "3px", paddingBottom: "10px" }}>{dataItem.original}</p>
                    </div>
                    <div key={dataItem.id}>
                        <button
                            onClick={() => decrementCounter(dataItem.id)}
                            style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>-</button>&nbsp;&nbsp;
                        <button style={{ width: "70px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>{counters[dataItem.id]} Kg</button>&nbsp;&nbsp;
                        <button
                            onClick={() => incrementCounter(dataItem.id)}
                            style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>+</button>&nbsp;&nbsp;
                    </div><br />
                    {/* <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button' onClick={addToCart}>Buy Now</button> */}
                    <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button'
                    onClick={() => addToCart(dataItem.id)}
                     >Cart</button>
                </div>
            </div>
            <div style={{color:"black",marginTop:"20px",width:"500px",marginLeft:"50px"}}>
         <h2 id="title" style={{color:"green"}}>{dataItem.data} </h2>
              {/* <p>{dataItem.title}</p> */}
              {/* <br /> */}
              <h2 style={{color:"black"}}>It helps plants to growth healthy and increase the yield of the crop. </h2>
              {/* <br /> */}
              <h2 style={{color:"green"}}>Owner name:</h2>
              <h2 style={{color:"black"}}>{dataItem.owner} </h2>
              <h2 style={{color:"red"}}><i className="fa-solid fa-location-dot"></i> {dataItem.place} </h2>
              {/* <br /> */}
              <h2 style={{color:"black"}}>Offer price: {dataItem.offer} </h2>
              {/* <br /> */}
              <h2 style={{color:"lightskyblue"}}>Original price: {dataItem.original}</h2>
              <br />
              <h2 style={{color:"grey"}}> {dataItem.author}</h2>
              <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px",listStyle:"none" }} className='button' ><a href='/payment' style={{textDecoration:"none",color:"white"}}>Pay Now</a> </button>
              {/* <br /> */}
                    {/* <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button'
                    onClick={() => addToCart(dataItem.id)}
                     >Cart</button> */}
          </div>   
        </div>
        </div>
    );
}

export default VegetableCard;
