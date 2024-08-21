import react, { useState } from 'react';

function Task1()
{
    const parent=<div>hello world</div>
    const child=<p>hello</p>
    const[set,setData]=useState(true)
    return(
<div>
    <button onClick={()=>setData(!set)}>Mani</button>
    {set? parent:child}
    {/* https://chatgpt.com/share/bdccbc3c-8ea0-4ca5-994e-f9f03771efb9 */}
</div>
    )
}
export default Task1;