


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './vegetables.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import {useNavigate, useParams } from "react-router-dom";
// import VegeCategory from './vegecategory';

// function Vegetables() {
//     const [data, setData] = useState([]);
//     const { idvalue } = useParams();
//     const navigate = useNavigate();
//     const [counters, setCounters] = useState({});

//     useEffect(() => {
//         const api = 'http://localhost:8080/vegetables/vegetable';
//         axios.get(api)
//             .then(response => {
//                 setData(response.data);
//                 // Initialize counters for each vegetable
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

//     const handleImageClick = (id) => {
//         navigate(`/product/vegetables/${id}`);
//       };
//     return (
//         <div>
//              <VegeCategory /><br />
//         <div className='amanik'>
//             {data.map(dataItem => (
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
//                         <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button' onClick={() => handleImageClick(dataItem.id)}>Buy Now</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </div>
//     );
// }

// export default Vegetables;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './vegetables.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate, useParams } from "react-router-dom";
import VegeCategory from './vegecategory';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function Vegetables() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { idvalue } = useParams();
    const navigate = useNavigate();
    const [counters, setCounters] = useState({});

    useEffect(() => {
        const api = 'http://localhost:3001/vegetables';
        axios.get(api)
            .then(response => {
                setData(response.data);
                // Initialize counters for each vegetable
                const initialCounters = {};
                response.data.forEach(item => {
                    initialCounters[item.id] = 0;
                });
                setCounters(initialCounters);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div>
            {/* <VegeCategory /><br /> */}
            <div className='amanik'>
                {data.map(dataItem => (
                    <div key={dataItem.id} className='akannank' data-aos="fade-left" >
                        <img src={dataItem.img} alt={dataItem.data} className="aimgglk00" style={{ borderRadius: "5px" }} onClick={() => handleItemClick(dataItem)} />
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
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent triggering the parent onClick
                                        decrementCounter(dataItem.id);
                                    }}
                                    style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>-</button>&nbsp;&nbsp;
                                <button style={{ width: "70px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>{counters[dataItem.id]} Kg</button>&nbsp;&nbsp;
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent triggering the parent onClick
                                        incrementCounter(dataItem.id);
                                    }}
                                    style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>+</button>&nbsp;&nbsp;
                            </div><br />
                            <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button' onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering the parent onClick
                                navigate(`/product/vegetables/${dataItem.id}`);
                            }}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <Modal
                    isOpen={!!selectedItem}
                    onRequestClose={closeModal}
                    contentLabel="Vegetable Details"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <h2>{selectedItem.data}</h2>
                    <img src={selectedItem.img} alt={selectedItem.data} className="modal-img" />
                    <p>Owner: {selectedItem.owner}</p>
                    <p>Location: {selectedItem.place}</p>
                    <p>Offer: {selectedItem.offer}</p>
                    <p>Original Price: {selectedItem.original}</p>
                    <button onClick={closeModal} style={{ backgroundColor: "red", color: "white" }}>Close</button>
                </Modal>
            )}
        </div>
    );
}
export default Vegetables;