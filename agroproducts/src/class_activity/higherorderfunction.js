import React from "react";

function HigherOrderFunction()
{
    const x=letter(90);
    const y=letter(900);
    function letter(mess){
        return function()
        {
            console.log(mess);
        }
    }
    return(
        <div>

        </div>
    )
}
export default HigherOrderFunction;