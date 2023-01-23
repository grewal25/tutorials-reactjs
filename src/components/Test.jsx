import { useState } from "react";

export default function Test(){
    const [number, setNumber] = useState(0)

    return<>
    <div>
        <p>{number}</p>
        <button 
        onClick={()=>setNumber(number+1)}>
        click</button>
        </div>
    </>
}
