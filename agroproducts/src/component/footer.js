// import React from 'react'
// import './footer.css';
// function Footer() {
//   const handleEmailClick = () => {
//     window.location.href = "manikannan6380@gmail.com";
//   };
//   return (
//         <footer className="footer">
//     <div class="containert">
//       <div class="footer-left">
//         <a href="#" class="footer-logo">
//           <img src="https://flowbite.com/docs/images/logo.svg" alt="Jobizz Logo" class="footer-logo-img" style={{marginTop:"px"}}/>
//           <span class="footer-logo-text">SPROUTSMART</span>
//           <p style={{lineHeight:"22px"}}>SproutSmart is one of the largest and innovative Indian full-stack AgriTech platforms that is dedicated to revolutionizing the agricultural industry in India. </p>
//         </a>
//       </div>
//       <div class="footer-sections">
//       <div class="footer-section">
//           <h3 class="footer-heading">CATEGORYES</h3>
//           <ul class="footer-list">
//             <li><a href="/vegetables">Vegetables</a></li>
//             <li><a href="/fruits">Fruits</a></li>
//             <li><a href="/spices">Spices</a></li>
//             <li><a href="/nuts">Nuts</a></li>
//             <li><a href="/farmmachine">Farm Machinery</a></li>
//             <li><a href="/rice">Rice</a></li>
//             <li><a href="/seeds">Seed</a></li>
//             <li><a href="/cropproduction">Crop Production</a></li>
//           </ul>
//         </div>
//         <div class="footer-section">
//           <h3 class="footer-heading">COMPANY</h3>
//           <ul class="footer-list">
//             <li><a href="/privacy">Privacy</a></li>
//             <li><a href="/terms">Terms of Service</a></li>
//           </ul>
//         </div>
//         <div class="footer-section">
//           <h3 class="footer-heading">PRODUCT</h3>
//           <ul class="footer-list">
//             <li><a href="/aboutus">About Us</a></li>
//             <li><a href="/faq">FAQ</a></li>
//             <li><a href="/refund">Refund Policy</a></li>
//             <li><a href="/delivery">Shipping/Delivery Policy</a></li>
//           </ul>
//         </div>
//         <div class="footer-section">
//           <h3 class="footer-heading">CONTACT US</h3>
//           <ul class="footer-list">
//             <h4>Call To Contact:</h4>
//             <button style={{backgroundColor:"green",width:"100px",height:"32px",borderRadius:"10px",color:"white"}}>6380087037</button>
//             <h4>Mail To Contact:</h4>
//             <button onClick={handleEmailClick} style={{backgroundColor: "green",width: "150px",height: "32px",borderRadius: "10px",color:"white"}}>Lingesh@gmail.com</button>
//             <button onClick={handleEmailClick} style={{backgroundColor: "green",width: "150px",height: "32px",borderRadius: "10px",color:"white"}}>Kishore@gmailcom</button>
//             <button onClick={handleEmailClick} style={{backgroundColor: "green",width: "150px",height: "32px",borderRadius: "10px",color:"white"}}>Manikannan@gmailcom</button>
           
           
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div class="footer-bottom">
//       <p>&copy; 2024 Company Co. All rights reserved.</p>
//     </div>
//   </footer>
//   )
// }

// export default Footer;




import React from 'react';
import './footer.css';

function Footer() {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="footer">
      <div className="containert">
        <div className="footer-left">
          <a href="#" className="footer-logo">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Jobizz Logo" className="footer-logo-img" style={{ marginTop: "0px" }} />
            <span className="footer-logo-text">SPROUTSMART</span>
            <p style={{ lineHeight: "22px" }}>
              SproutSmart is one of the largest and innovative Indian full-stack AgriTech platforms that is dedicated to revolutionizing the agricultural industry in India.
            </p>
          </a>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="footer-heading">CATEGORYES</h3>
            <ul className="footer-list">
              <li><a href="/vegetables">Vegetables</a></li>
              <li><a href="/fruits">Fruits</a></li>
              <li><a href="/spices">Spices</a></li>
              <li><a href="/nuts">Nuts</a></li>
              <li><a href="/farmmachine">Farm Machinery</a></li>
              <li><a href="/rice">Rice</a></li>
              <li><a href="/seeds">Seed</a></li>
              <li><a href="/cropproduction">Crop Production</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">COMPANY</h3>
            <ul className="footer-list">
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">PRODUCT</h3>
            <ul className="footer-list">
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/delivery">Shipping/Delivery Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">CONTACT US</h3>
            <ul className="footer-list">
              <h4>Call To Contact:</h4>
              <button style={{ backgroundColor: "green", width: "100px", height: "32px", borderRadius: "10px", color: "white" }}>6380087037</button>
              <h4>Mail To Contact:</h4>
              <button onClick={() => handleEmailClick('Lingesh@gmail.com')} style={{ backgroundColor: "green", width: "170px", height: "32px", borderRadius: "10px", color: "white" }}>Lingesh@gmail.com</button>
              <button onClick={() => handleEmailClick('Kishore@gmail.com')} style={{ backgroundColor: "green", width: "170px", height: "32px", borderRadius: "10px", color: "white" }}>Kishore@gmail.com</button>
              <button onClick={() => handleEmailClick('Manikannan@gmail.com')} style={{ backgroundColor: "green", width: "170px", height: "32px", borderRadius: "10px", color: "white" }}>Manikannan@gmail.com</button>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Co. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
