import React,{useState} from 'react'
import { Navbar } from './Navbar'
export default function Counter() {
    const [getCounter,setCounter]=useState(0)

    function increment(){
      setCounter(getCounter+1)
    }
    function decrement(){
      setCounter(getCounter-1)
    }
  
    return (
      <>
      <Navbar activeStep={1} />
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-black text-[20px] font-bold' >Counter app</h1>
        <div className='flex flex-col items-center justify-center gap-3'>
            <span className='text-[30px] font-bold'>
              {getCounter}
  
            </span>
            <span className='flex flex-row gap-3'>
              <button className='h-[40px] w-[40px] bg-green-600 text-white text-[25px] pointer-cursor' onClick={increment}>+</button>
              <button className='h-[40px] w-[40px] bg-red-700 text-white text-[25px] pointer-cursor' onClick={decrement}>-</button>
  
            </span>
  
        </div>
  
      </div>
      </>
    )
}
//style={{height:'40px',width:'80px',background:'green',color:'white',fontSize:'25px',pointer:"cursor"}}