import React from "react";
import Navbar from "./navbar";
import Sliderer from "./slider";
import Homevege from "./homevege";
import Homefruit from "./homefruit";
import TopProduct from "./topproduct";
import RollingContent from "./rollingcontent";
import Homespices from "./homespices";
import FarmerHome from "./farmerhome";
import './home.css';

function Home()
{
    return(
        <div>
            {/* <Navbar /> */}
            <Sliderer />
            {/* <Homevege /> */}
            <br />
            <h2 style={{textAlign:"center",fontFamily:"revert-layer"}}>Categories</h2>
            <TopProduct />
            <h2 style={{textAlign:"center",fontFamily:"revert-layer",fontSize: '30px'}}>Top Selling Products</h2>
            <Homespices />
            <br />
            <br />
            <h2 style={{color:"grey",marginLeft:"70px",fontWeight:"1800px"}}>Popular Products</h2>
            <RollingContent />
            {/* <FarmerHome /> */}
            {/* <Homefruit /> */}
        </div>
    )
}
export default Home;