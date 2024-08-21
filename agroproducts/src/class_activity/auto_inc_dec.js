import React, { useState } from "react";

function Increment()
{
    const [datada,setDatada]=useState(0);
    return(
        <div>
            <button>{data}</button>
            <button 
            onClick={()=>{setDatada(datada+1);}
            }>+</button>
            <button
            onClick={()=>{setDatada(datada-1);}
            }>-</button>     
        </div>
    )
}
export default Increment;