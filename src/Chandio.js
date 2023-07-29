import React,{useEffect,useState} from 'react'

export default function Main({name}) {
  const [text , setText] = useState("")
  const[showText , setShowText] = useState(false)

 

  useEffect(()=>{
    setText("Hello world")
  },[])

  // useEffect(()=>{
  //   setText("Hello world")
  // })
  // useEffect(()=>{
  //   setText("Hello world")
  // },[text])
  
  const displayText = ()=>{
    setShowText(true)
  }

  return (
    <>
    <h1 className='mainheading'>{text}</h1>
    <h1 className='mainheading'>My name is {name}</h1>
    {showText?(<h1>Text is Displayed</h1>):(<span></span>)}
    <button className='h-[60px] w-[100px] bg-green-400 text-white cursor-pointer' onClick={displayText}>Display Text</button>
    
    {/* text */}
    </>
  )
}
