
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { Button, colors } from "@mui/material";
// // import './cartItem.css';

// function CardItem() {
//   const { idvalue } = useParams();
//   const [dataItem, setDataItem] = useState({});
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:808/vegetables/${idvalue}`);
//       setDataItem(response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const addToCart = () => {
//     const updatedCartItems = [...cartItems, dataItem];
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//     setTotalPrice(totalPrice + dataItem.price);
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCartItems = cartItems.filter(item => item.id !== itemId);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//     const removedItem = cartItems.find(item => item.id === itemId);
//     setTotalPrice(totalPrice - removedItem.price);
//   };
  
//   useEffect(() => {
//     fetchData();
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedCartItems);
//     const price = storedCartItems.reduce((total, item) => total + item.price, 0);
//     setTotalPrice(price);
//   }, [idvalue]);

//   return (
//     <div>
      
//       {/* <h1>Related Movies:</h1> */}
//         <h2 style={{marginLeft:"20px",fontSize:"60px",color:"red"}}>Cart Items:</h2>
//       <div className="holee">
//         <br />
//           <div  style={{display:"",border:"10px",borderRadius:"20px",borderColor:"black"}} >
//             <br />
//       {
//           cartItems.map(item => {
//             return(
//               <div className="boxxna" style={{display:"flex",width:"1100px",height:"300px",border:"10px",borderRadius:"20px",borderColor:"black",backgroundColor:"grey"}}>
//           <div key={item.id} className="topick" >
          
//             <img src={item.img} className="img" style={{width:"350px",height:"290px"}}></img>
//               <br />
//               <br />
//             <div style={{style:"flex",marginTop:"-330px",marginLeft:"440px"}}>
//             <h2 id="title">{item.title}</h2>
            
//             <h5 id="para">{item.author}</h5>
//             <br />
//             <h3 style={{fontSize:"22px"}}>Bill Details</h3>
            
//             <h5 style={{wordSpacing:"237px"}}>ItemTotal {item.amount}</h5>
//             <h5 style={{wordSpacing:"215px"}}>DeliveryFee &emsp;Rs:29</h5>
//             <h5 style={{wordSpacing:"215px"}}>Platformfee &emsp;Rs:03</h5>
//             <h5 style={{wordSpacing:"3px"}}>GST and Restaurant Charges  &emsp;&emsp;&emsp;&emsp;&emsp;Rs:37.54</h5>
//             <h5 style={{wordSpacing:"237px"}}>TotalPrice {item.total}</h5>
            
            
//             {/* <br /> */}
//             <Button variant='contained' sx={{ backgroundColor: "#165D69", borderRadius: "10px",width: "100px" }} className="ook" >To Pay</Button>&emsp;&emsp;&emsp;
//             <Button variant='contained' sx={{ backgroundColor: "#165D69", borderRadius: "10px",width: "100px" }} className="ook" onClick={() => removeFromCart(item.id)}>Remove</Button>
//          </div>          
//             <br />
//          </div>          
//             <br />
//             <br />
//          </div>
           
//             )
//           }
//         )
//       }
//     </div>
//         {/* <h3>Total Price: ${totalPrice}</h3> */}
//         <br />
//         <br />
//       </div>
//     </div>
//   );
// }

// export default CardItem;





// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CartItem() {
//     const[cardData,setCardDate]=useState([]);
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const api= `http://localhost:8080/product/${id}`
//         axios.get(api)
//         .then((resposne)=>
//         {
//             setCardDate(resposne.data);
//             console.log(resposne.data);
//         })
//         .catch(exception =>
//         {
//             console.log(e);
//         }
//     )
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//         const price = storedCartItems.reduce((total, item) => total + item.price, 0);
//         setTotalPrice(price);
//     }, []);

//     const removeFromCart = (id) => {
//         const updatedCartItems = cartItems.filter(item => item.id !== id);
//         setCartItems(updatedCartItems);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//         const price = updatedCartItems.reduce((total, item) => total + item.price, 0);
//         setTotalPrice(price);
//     };

//     const checkout = () => {
//         navigate('/payment');
//     };

//     return (
//         <div style={{ marginLeft: "190px" }}>
//             <h2>Your Cart</h2>
//             {cartItems.length === 0 ? (
//                 <div>No items in the cart.</div>
//             ) : (
//                 <div>
//                     {cartItems.map(item => (
//                         <div key={item.id} className='cart-item'>
//                             <img src={item.img} alt={item.data} style={{ width: "100px", height: "100px" }} />
//                             <div>
//                                 <h3>{item.data}</h3>
//                                 <p>Owner: {item.owner}</p>
//                                 <p>Location: {item.place}</p>
//                                 <p>Offer Price: {item.offer}</p>
//                                 <p>Original Price: {item.original}</p>
//                                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                             </div>
//                         </div>
//                     ))}
//                     <h3>Total Price: {totalPrice}</h3>
//                     <button onClick={checkout} style={{ backgroundColor: "green", color: "white", borderRadius: "4px" }}>Checkout</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CartItem;






// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CartItem() {
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const navigate = useNavigate();

//     useEffect(() => {
//         try {
//             const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//             setCartItems(storedCartItems);
//             const price = storedCartItems.reduce((total, item) => total + item.price, 0);
//             setTotalPrice(price);
//         } catch (error) {
//             console.error("Error loading cart items from local storage:", error);
//         }
//     }, []);

//     const removeFromCart = (id) => {
//         const updatedCartItems = cartItems.filter(item => item.id !== id);
//         setCartItems(updatedCartItems);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//         const price = updatedCartItems.reduce((total, item) => total + item.price, 0);
//         setTotalPrice(price);
//     };

//     const checkout = () => {
//         navigate('/payment');
//     };

//     return (
//         <div style={{ marginLeft: "190px" }}>
//             <h2>Your Cart</h2>
//             {cartItems.length === 0 ? (
//                 <div>No items in the cart.</div>
//             ) : (
//                 <div>
//                     {cartItems.map(item => (
//                         <div key={item.id} className='cart-item'>
//                             <img src={item.img} alt={item.data} style={{ width: "100px", height: "100px" }} />
//                             <div>
//                                 <h3>{item.data}</h3>
//                                 <p>Owner: {item.owner}</p>
//                                 <p>Location: {item.place}</p>
//                                 <p>Offer Price: {item.offer}</p>
//                                 <p>Original Price: {item.original}</p>
//                                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                             </div>
//                         </div>
//                     ))}
//                     <h3>Total Price: {totalPrice}</h3>
//                     <button onClick={checkout} style={{ backgroundColor: "green", color: "white", borderRadius: "4px" }}>Checkout</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CartItem;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartItem() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartItems(storedCartItems);
            const price = storedCartItems.reduce((total, item) => total + item.price, 0);
            setTotalPrice(price);
        } catch (error) {
            console.error("Error loading cart items from local storage:", error);
        }
    }, []);

    const removeFromCart = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        const price = updatedCartItems.reduce((total, item) => total + item.price, 0);
        setTotalPrice(price);
    };

    const checkout = () => {
        navigate('/payment');
    };

    return (
        <div style={{ marginLeft: "190px" }}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div>No items in the cart.</div>
            ) : (
                <div style={{width:"750px"}}>
                    {cartItems.map(item => (
                        <div key={item.id} style={styles.cartItem}>
                            <img src={item.img} alt={item.data} style={styles.image} />
                            <div style={{marginLeft:"100px"}}>
                                <h3>{item.data}</h3>
                                <p>Owner: {item.owner}</p>
                                <p>Location: {item.place}</p>
                                <p>Offer Price: {item.offer}</p>
                                <p>Original Price: {item.original}</p>
                                <button onClick={() => removeFromCart(item.id)} style={styles.checkoutButton}>Remove</button>
                                &nbsp;&nbsp;&nbsp;&nbsp; <button  style={styles.checkoutButton}><a href='/payment' style={{listStyle:"none",textDecoration:"none",color:"white"}}>Pay</a></button>
                            </div>
                        </div>
                    ))}
                    <h3>Total Price: {totalPrice}</h3>
                  <br /><br />  {/* <button onClick={checkout} style={styles.checkoutButton}>Checkout</button> */}
                </div>
            )}
        </div>
    );
}

const styles = {
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    image: {
        width: '260px',
        height: '260px',
        marginRight: '20px'
    },
    removeButton: {
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    checkoutButton: {
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default CartItem;
