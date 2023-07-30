import React,{useEffect,useState} from 'react'

export default function Main({name}) {
  const [items , setItems] = useState([])
 
  const array2 = [
    {
      id:1,
      name:"city"
    },
    {
      id:2,
      name:"Civic"
    },
    {
      id:3,
      name:"mehran"
    },
    {
      id:4,
      name:"Santro"
    },



  ]
 

  useEffect(()=>{
    var array = []
    array.push("City")
    array.push("mehran")
    array.push("Civic")
    array.push("cantro")
    setItems(array)
  },[])

  // useEffect(()=>{
  //   setText("Hello world")
  // })
  // useEffect(()=>{
  //   setText("Hello world")
  // },[text])
 

  return (
    <>
    <h1 className='mainheading'>Hello world</h1>
    <h1 className='mainheading'>My name is {name}</h1>

    {
      array2.map((car,index)=>{ //array[i]==car
        return(
          // <ul>
          //   <li>{car}</li>
          // </ul>
          <span className='flex flex-col'>{car.id}</span>
        )
      })
    }
    
    {/* text */}
    </>
  )
}
//for(int i = 0 ; i<array.length ; i++)  array[i]