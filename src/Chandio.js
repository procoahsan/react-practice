import React,{useEffect} from 'react'

export default function Main({name}) {
  return (
    <>
    <h1 className='mainheading'>Hello World</h1>
    <h1 className='mainheading'>My name is {name}</h1>
    <button className='h-[80px] w-[50px] bg-green-400 text-white'>Change Text</button>
    
    </>
  )
}
