// import React, { useState } from "react";
// import "./navbar.css";
// import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom'
// import Vegetables from "./vegetable";
// import Home from "./home";
// import Fruits from "./fruits";
// import Spices from "./spices";
// import Nuts from "./nuts";
// import Rice from "./rice";
// import Seed from "./seed";
// import FarmMachine from "./farmmachine";
// import Cropproduction from "./cropproduction";
// import VegetableCard from "./vegetablecard";
// import SignInSide from "./login";
// import SignUp from "./signUp";
// import Privacy from "./privacy";
// import TermsOfService from "./Terms";
// import RefundPolicy from "./Refund";
// import DeliveryPolicy from "./delivery";
// import Faq from "./Faq";
// import Corporate from "./about";
// import Farmer from "./farmer";
// import FarmerHome from "./farmerhome";
// import InputSearch from "./imput";
// import PaymentForm from "./payment";
// import CardItem from "./cardItem";
// import BankTransferPage from "./bank";
// import ProfilePage from "./profile";
// function Navbar() {
//   // const [isOpen, setIsOpen] = useState(false);
//   // const toggleDropdown = () => {
//   //   setIsOpen(!isOpen);
//   // };
//   return (
//     <BrowserRouter>
//     <div>

//     <div className="navm">
//         <div className="logoo">
            
//             <Link>
//              <li><img src="https://www.shutterstock.com/shutterstock/photos/2043801008/display_1500/stock-vector-agriculture-logo-on-s-letter-concept-agriculture-and-farming-logo-design-agribusiness-eco-farm-2043801008.jpg"
//              style={{width:"80px",height:"50px",borderRadius:"50%",marginBottom:"10px",marginLeft:"40px"}}
//              ></img></li>
//              {/* <li><img src="https://static.vecteezy.com/system/resources/previews/020/395/360/original/kgp-letter-logo-design-on-white-background-kgp-creative-circle-letter-logo-concept-kgp-letter-design-vector.jpg"
//              style={{width:"80px",height:"50px",borderRadius:"20px",marginBottom:"10px",marginLeft:"40px"}}
//              ></img></li> */}
//              </Link>
//             <Link to="/vegetables">
//             <li><a href="">Vegetables</a>
//             </li>
//             </Link>            
//             <Link to="/fruits">
//             <li><a href="">Fruits</a></li>
//             </Link>
//             <Link to="/spices">
//             <li><a href="">Spices </a></li>
//             </Link>
//             <Link to="/">
//             <li><a href="">Others</a></li>
//             </Link>
//             <Link to="/input">
//              <li>
//                 {/* <i class="fa-solid fa-magnifying-glass" style={{marginLeft:"15px"}}></i> */}
//                 {/* <input style={{width:"300px",height:"40px",borderRadius:"10px"}} placeholder="search for product and more" ></input> */}
//                 <a href="">
//                   <img src="https://t4.ftcdn.net/jpg/04/74/32/65/360_F_474326593_RteZPKDAZ9YuA3P3pHP9QAI6V0UfyV5n.jpg" style={{width:"150px",height:"60px",marginTop:"-13px"}}/>
//                 </a>
//                 </li> 
//             </Link>
//             {/* <Link to="/signUp">
//              <li><a href=""> Login</a></li> 
//             </Link> */}

//             {/* <i class="fa-solid fa-user-tie"></i> */}
//             {/* <i class="fa-solid fa-circle-user"></i> */}
//             <Link to="/farmer">
//              <li><a href=""> Grower Profile</a></li> 
//             </Link>
//             <Link to="/product">
//              <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li> 
//             </Link>
//             <Link to="/profile">
//              <li><a href=""> <i class="fa-solid fa-circle-user fa-lg" ></i></a>
//              {/* {isOpen && (
//         <div >
//           <div>
//             <a href="/profile" style={{ textDecoration: 'none', color: 'black' }}>Profile</a>
//           </div>
//             <a href="/signUp" style={{ textDecoration: 'none', color: 'black' }}>Logout</a>
//           <div>
//           </div>
//         </div>
//       )} */}
//              </li> 
//             </Link>
//         </div>  
        
//     </div>
//         {/* <Home />   */}
//     </div>
//     <Routes>
//       <Route exact path="/" element={<SignInSide />} />
//       <Route exact path="/home" element={<Home />} />
//       <Route exact path="/vegetables" element={<Vegetables />} />
//       <Route exact path="/fruits" element={<Fruits />} />
//       <Route exact path="/spices" element={<Spices />} />
//       <Route exact path="/nuts" element={<Nuts />} />
//       <Route exact path="/rice" element={<Rice />} />
//       <Route exact path="/seeds" element={<Seed />} />
//       <Route exact path="/farmmachine" element={<FarmMachine />} />
//       <Route exact path="/cropproduction" element={<Cropproduction />} />
     
//       <Route exact path="/login" element={<SignInSide />} />
//       <Route exact path="/signUp" element={<SignUp /> } />
//       <Route exact path="/privacy" element={<Privacy /> } />
//       <Route exact path="/terms" element={<TermsOfService /> } />
//       <Route exact path="/refund" element={<RefundPolicy /> } />
//       <Route exact path="/delivery" element={<DeliveryPolicy /> } />
//       <Route exact path="/faq" element={<Faq /> } />
//       <Route exact path="/aboutus" element={<Corporate /> } />
//       <Route exact path="/farmer" element={<Farmer /> } />
//       <Route exact path="/farmerdata" element={<FarmerHome /> } />
//       <Route exact path="/input" element={<InputSearch /> } />
//       <Route exact path="/payment" element={<PaymentForm /> } />
//       <Route exact path="/banktransfer" element={<BankTransferPage /> } />
//       <Route exact path="/profile" element={<ProfilePage /> } />

//       <Route path="/product/:category/:idvalue"  Component={VegetableCard} element={<VegetableCard />} />
//       <Route path="/product" element={<CardItem />} />
//       {/* <Route path="/product/:idvalue"  Component={CardItem} element={<CardItem />} /> */}

//     </Routes>
    
//     </BrowserRouter>
//   );
// }
// export default Navbar;












import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Vegetables from "./vegetable";
import Home from "./home";
import Fruits from "./fruits";
import Spices from "./spices";
import Nuts from "./nuts";
import Rice from "./rice";
import Seed from "./seed";
import FarmMachine from "./farmmachine";
import Cropproduction from "./cropproduction";
import VegetableCard from "./vegetablecard";
import SignInSide from "./login";
import SignUp from "./signUp";
import Privacy from "./privacy";
import TermsOfService from "./Terms";
import RefundPolicy from "./Refund";
import DeliveryPolicy from "./delivery";
import Faq from "./Faq";
import Corporate from "./about";
import Farmer from "./farmer";
import FarmerHome from "./farmerhome";
import InputSearch from "./imput";
import PaymentForm from "./payment";
import CardItem from "./cardItem";
import BankTransferPage from "./bank";
import ProfilePage from "./profile";
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <div>
        <div className="navm">
          <div className="logoo">
            <Link to="/">
              <li>
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/2043801008/display_1500/stock-vector-agriculture-logo-on-s-letter-concept-agriculture-and-farming-logo-design-agribusiness-eco-farm-2043801008.jpg"
                  style={{ width: "80px", height: "50px", borderRadius: "50%", marginBottom: "10px", marginLeft: "40px" }}
                  alt="logo"
                />
              </li>
            </Link>
            <Link to="/vegetables">
              <li><a href="#">Vegetables</a></li>
            </Link>
            <Link to="/fruits">
              <li><a href="#">Fruits</a></li>
            </Link>
            <Link to="/spices">
              <li><a href="#">Spices</a></li>
            </Link>
            <Link to="/home">
              <li><a href="#">Others</a></li>
            </Link>
            <Link to="/input">
              <li>
                <a href="#">
                  <img
                    src="https://t4.ftcdn.net/jpg/04/74/32/65/360_F_474326593_RteZPKDAZ9YuA3P3pHP9QAI6V0UfyV5n.jpg"
                    style={{ width: "180px", height: "70px", marginTop: "-17px" }}
                    alt="search"
                  />
                </a>
              </li>
            </Link>
            <Link to="/farmer">
              <li><a href="#">Grower Profile</a></li>
            </Link>
            <Link to="/product">
              <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
            </Link>
            <li>
              <a href="#" onClick={toggleDropdown}>
                <i className="fa-solid fa-circle-user fa-lg"></i>
              </a>
              {isOpen && (
                <div style={{ position: 'absolute', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', right: 0, marginTop: '10px' }}>
                  <div style={{ padding: '10px 20px', cursor: 'pointer', borderBottom: '1px solid #eee' }}>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }} onClick={closeDropdown}>Profile</Link>
                  </div>
                  <div style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    <Link to="/signUp" style={{ textDecoration: 'none', color: 'black' }} onClick={closeDropdown}>Logout</Link>
                  </div>
                </div>
              )}
            </li>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<SignInSide />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/vegetables" element={<Vegetables />} />
        <Route exact path="/fruits" element={<Fruits />} />
        <Route exact path="/spices" element={<Spices />} />
        <Route exact path="/nuts" element={<Nuts />} />
        <Route exact path="/rice" element={<Rice />} />
        <Route exact path="/seeds" element={<Seed />} />
        <Route exact path="/farmmachine" element={<FarmMachine />} />
        <Route exact path="/cropproduction" element={<Cropproduction />} />
        <Route exact path="/login" element={<SignInSide />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/terms" element={<TermsOfService />} />
        <Route exact path="/refund" element={<RefundPolicy />} />
        <Route exact path="/delivery" element={<DeliveryPolicy />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/aboutus" element={<Corporate />} />
        <Route exact path="/farmer" element={<Farmer />} />
        <Route exact path="/farmerdata" element={<FarmerHome />} />
        <Route exact path="/input" element={<InputSearch />} />
        <Route exact path="/payment" element={<PaymentForm />} />
        <Route exact path="/banktransfer" element={<BankTransferPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route path="/product/:category/:idvalue" Component={VegetableCard} element={<VegetableCard />} />
        <Route path="/product" element={<CardItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
