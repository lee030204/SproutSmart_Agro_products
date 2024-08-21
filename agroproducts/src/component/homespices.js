// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './homespecies.css';

// function Homespices() {
//     const[data,setData]=useState([]);
//     useEffect(()=>{
//         const api ='http://localhost:3001/homefruit';
//         axios.get(api)
//         .then(response=>
//         {
//             setData(response.data);
//         })
//         .catch(error=>
//             {
//                 console.log(error);
//             }
//         )
//     },[])
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 2,
//       };
//   return (
//     <div className='nn'>
//         <h2 style={{marginLeft:"30px",fontSize:"50px"}}>To Selling Products in Vegetables</h2>
//         <div style={{marginLeft:"40px"}} className='nan'>
     
//                {data.map(dataItem => (
//                 <div key={dataItem.id} className='kannankop' style={{width:"350px",height:"400px"}}>
//                     <img src={dataItem.img} alt={dataItem.data} className="imgglk" style={{marginLeft:"90px",width:"230px",height:"200px",borderRadius:"20px"}}/>
//                     <div className="cardk">
//                         <h2>{dataItem.data}</h2>
//                     </div>
//                 </div>
//             ))}
            
//         </div>
//     </div>
//   )
// }

// export default Homespices;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './homespecies.css';

function Homespices() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const api = 'http://localhost:3001/homefruit';
        axios.get(api)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='nn'>
            {/* <h4 style={{ marginLeft: '30px', fontSize: '30px' }}>Top Selling Products</h4> */}
            <div className='nan'>
                {data.map(dataItem => (
                    <div key={dataItem.id} className='kannankop' >
                        <div className='imgglk' style={{width:"350px",height:"340px"}}>
                        <img src={dataItem.img} alt={dataItem.data} 
                         style={{width:"250px",height:"200px",marginLeft:"45px",marginBottom:"-10px",marginTop:"-20px",borderRadius:"2px"}}/>
                        <div className='cardk' >
                            <h2>{dataItem.data}</h2>
                            <p style={{color:"red"}}> <i className="fa-solid fa-location-dot" /> {dataItem.place}</p>
                            <div style={{display:"flex",alignItems:"center"}}>
                        <h6 style={{marginLeft:"68px"}}> {dataItem.offer} </h6>
                        <p style={{textDecoration:"line-through",marginBottom:"0px",marginLeft:"15px",marginBottom:"3px",paddingBottom:"10px"}}>{dataItem.original}</p>
                            </div>
                        <button style={{width:"80px",height:"30px",backgroundColor:"green",color:"white",borderRadius:"4px"}}>Buy Now</button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homespices;
