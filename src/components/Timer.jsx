import {useState, useEffect} from 'react'

function Timer(){
    const [count, setCount] = useState(20);
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=>{
        if(!isRunning){
            return
        }
        const interval = setInterval(()=>{
            setCount(count-1)
        }, 1000)
        return ()=>clearInterval(interval)
    },[count,  isRunning])

    return(
        <>
            <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <p>{count}</p>
        </>
    )
}

export default Timer;