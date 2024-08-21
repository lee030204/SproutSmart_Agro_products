import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './vegetables.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Nuts() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);
    const [counters, setCounters] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const api = 'http://localhost:3001/nuts';
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

    const handlesubmit =(id)=>{
        navigate(`/product/nuts/${id}`);
    }

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

        <div className='amanik'>
            {data.map(dataItem => (
                <div key={dataItem.id} className='akannank' data-aos="fade-down"   >
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
                                onClick={() => incrementCounter(dataItem.id)}
                                style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>+</button>&nbsp;&nbsp;
                            <button style={{ width: "70px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>{counters[dataItem.id]} Kg</button>&nbsp;&nbsp;
                            <button
                                onClick={() => decrementCounter(dataItem.id)}
                                style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>-</button>
                        </div><br />
                        <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button' onClick={() => handlesubmit(dataItem.id)}>Buy Now</button>
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

export default Nuts;
