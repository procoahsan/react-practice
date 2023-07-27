import React,{useState} from 'react'

export default function Counter() {
    const [getCounter,setCounter]=useState(0)

    function increment(){
      setCounter(getCounter+1)
    }
    function decrement(){
      setCounter(getCounter-1)
    }
  
    return (
      <div>
        <h1 className='mainheading'>Counter app</h1>
        <div className='counterappmain'>
            <span>
              <h1>{getCounter}</h1>
  
            </span>
            <span className='counterbuttons'>
              <button style={{height:'40px',width:'80px',background:'green',color:'white',fontSize:'25px',pointer:"cursor"}} onClick={increment}>+</button>
              <button style={{height:'40px',width:'80px',background:'red',color:'white',fontSize:'25px',pointer:"cursor"}} onClick={decrement}>-</button>
  
            </span>
  
        </div>
  
      </div>
      
    )
}
