// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function InputSearch() {
//   const [vegetables, setVegetables] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:8080/vegetables")
//       .then(response => {
//         setVegetables(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredVegetables = vegetables.filter(veg =>
//     veg.data.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     veg.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <div>
//         {filteredVegetables.map((veg) => (
//           <div key={veg.id}>
//             <img src={veg.img} alt={veg.data} style={{ width: '100px', height: '100px' }} />
//             <h3>{veg.data}</h3>
//             <p>Owner: {veg.owner}</p>
//             <p>Place: {veg.place}</p>
//             <p>Offer: {veg.offer}</p>
//             <p>Original: {veg.original}</p>
//             <p>Category: {veg.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default InputSearch;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import {Navigate, useNavigate } from "react-router-dom";

// function InputSearch() {
//   const [vegetables, setVegetables] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8080/vegetables")
//       .then(response => {
//         setVegetables(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredVegetables = vegetables.filter(veg =>
//     veg.data.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     veg.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   useEffect(() => {
//     AOS.init({
//         duration: 1000, 
//     });
// }, []);

// const handleImageClick = (id) => {
//   navigate(`/product/vegetables/${id}`);
// };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//         style={{width:"250px",height:"30px",marginLeft:"550px",borderRadius:"20px"}}
//       />
//       <br /><br />
//       <br />
//       <div style={{display:"flex",flexDirection:"row"}} className='amanik'>
//         {filteredVegetables.map((dataItem) => (
//           <div key={dataItem.id} className='akannank' data-aos="fade-left" >
//           <img src={dataItem.img} alt={dataItem.data} className="aimgglk00" style={{ borderRadius: "5px" }} />
//           <div className="acardk">
//               <h2>{dataItem.data}</h2>
//               <p>{dataItem.owner}</p>
//               <h7 style={{ color: "red" }}><i className="fa-solid fa-location-dot"></i> {dataItem.place}</h7>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                   <h7 style={{ marginLeft: "68px" }}>{dataItem.offer}</h7>
//                   <p style={{ textDecoration: "line-through", marginBottom: "0px", marginLeft: "15px", marginBottom: "3px", paddingBottom: "10px" }}>{dataItem.original}</p>
//               </div>
//               {/* <div key={dataItem.id}>
//                   <button
//                       onClick={() => decrementCounter(dataItem.id)}
//                       style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>-</button>&nbsp;&nbsp;
//                   <button style={{ width: "70px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>{counters[dataItem.id]} Kg</button>&nbsp;&nbsp;
//                   <button
//                       onClick={() => incrementCounter(dataItem.id)}
//                       style={{ width: "30px", height: "30px", fontSize: "20px", borderRadius: "5px" }}>+</button>&nbsp;&nbsp;
//               </div><br /> */}
//               <button style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }} className='button' onClick={() => handleImageClick(dataItem.id)}>Buy Now</button>
//           </div>
//       </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default InputSearch;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useNavigate } from "react-router-dom";

// function InputSearch() {
//   const [vegetables, setVegetables] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredVegetables, setFilteredVegetables] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8080/vegetables")
//       .then(response => {
//         setVegetables(response.data);
//         setFilteredVegetables(response.data); // Initialize with full list
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchClick = () => {
//     const filtered = vegetables.filter(veg =>
//       veg.data.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       veg.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredVegetables(filtered);
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);

//   const handleImageClick = (id) => {
//     navigate(`/product/vegetables/${id}`);
//   };

//   return (
//     <div >
//       <div style={{ textAlign: 'center' }}>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearch}
//           style={{ width: "250px", height: "30px", borderRadius: "20px" }}
//         />
//         <button
//           onClick={handleSearchClick}
//           style={{ marginLeft: "10px", height: "36px", borderRadius: "20px", backgroundColor: "green", color: "white" }}
//         >
//           Search
//         </button>
//       </div>
//       <br /><br />
//       <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center",gap:"55px" }} className='amanik'>
//         {filteredVegetables.map((dataItem) => (
//           <div key={dataItem.id} className='akannank' data-aos="fade-left" style={{ margin: '10px' }}>
//             <img src={dataItem.img} alt={dataItem.data} className="aimgglk00" style={{ borderRadius: "5px" }} />
//             <div className="acardk">
//               <h2>{dataItem.data}</h2>
//               <p>{dataItem.owner}</p>
//               <h7 style={{ color: "red" }}><i className="fa-solid fa-location-dot"></i> {dataItem.place}</h7>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <h7 style={{ marginLeft: "68px" }}>{dataItem.offer}</h7>
//                 <p style={{ textDecoration: "line-through", marginBottom: "0px", marginLeft: "15px", marginBottom: "3px", paddingBottom: "10px" }}>{dataItem.original}</p>
//               </div>
//               <button
//                 style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }}
//                 className='button'
//                 onClick={() => handleImageClick(dataItem.id)}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default InputSearch;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

function InputSearch() {
  const [vegetables, setVegetables] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVegetables, setFilteredVegetables] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/vegetables")
      .then(response => {
        setVegetables(response.data);
        setFilteredVegetables(response.data); // Initialize with full list
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const filtered = vegetables.filter(veg =>
      veg.data.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veg.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVegetables(filtered);
  }, [searchTerm, vegetables]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = vegetables.filter(veg =>
      veg.data.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veg.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVegetables(filtered);
  };

  const handleImageClick = (id) => {
    navigate(`/product/vegetables/${id}`);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: "250px", height: "30px", borderRadius: "20px" }}
        />
        <button
          onClick={handleSearchClick}
          style={{ marginLeft: "10px", height: "36px", borderRadius: "20px", backgroundColor: "green", color: "white" }}
        >
          Search
        </button>
      </div>
      <br /><br />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: "55px" }} className='amanik'>
        {filteredVegetables.map((dataItem) => (
          <div key={dataItem.id} className='akannank' data-aos="fade-left" style={{ margin: '10px' }}>
            <img src={dataItem.img} alt={dataItem.data} className="aimgglk00" style={{ borderRadius: "5px" }} />
            <div className="acardk">
              <h2>{dataItem.data}</h2>
              <p>{dataItem.owner}</p>
              <h7 style={{ color: "red" }}><i className="fa-solid fa-location-dot"></i> {dataItem.place}</h7>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h7 style={{ marginLeft: "68px" }}>{dataItem.offer}</h7>
                <p style={{ textDecoration: "line-through", marginBottom: "0px", marginLeft: "15px", marginBottom: "3px", paddingBottom: "10px" }}>{dataItem.original}</p>
              </div>
              <button
                style={{ width: "80px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "4px" }}
                className='button'
                onClick={() => handleImageClick(dataItem.id)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputSearch;
