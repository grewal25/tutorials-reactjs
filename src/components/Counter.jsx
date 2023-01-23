import {useState} from 'react';


function Counter(){
    const [count, setCount] = useState(0);

    function changeCont(){
        setCount(count + 1)
    }

    console.log('re-render')

    return <>
    <button onClick={changeCont}>change count</button>
    <br />
    value of count is :{count}
    </>
}

export default Counter;