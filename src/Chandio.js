import React,{useEffect,useState} from 'react'

export default function Main({name}) {
  const [items , setItems] = useState([])
//  const [updateArray , setUpdateArray] = useState([])
  const array2 = [
    {
      id:1,
      name:"city",
      company:'honda'
    },
    {
      id:2,
      name:"Civic",
      company: "honda",

    },
    {
      id:3,
      name:"mehran",
      company: 'szuki'
    },
    {
      id:4,
      name:"Santro",
      company : 'hyundai'
    },



  ]
 
 useEffect(()=>{
  setItems(array2)
 },[])
  // useEffect(()=>{
  //   const filtered = array2.filter((car)=>{
  //     return car.company==='szuki'
  //   })

   
  //   setItems(filtered)
  // },[array2])

  // useEffect(()=>{
  //   setText("Hello world")
  // })
  // useEffect(()=>{
  //   setText("Hello world")
  // },[text])
  const updateCar = () => {
    const id = 4;
    const updatedArray = array2.map((car) =>
      car.id === id ? { ...car, name: 'Alto' } : car
    );
    // Update the state with the modified array
    setItems(updatedArray);
  };


 

  return (
    <>
    <h1 className='mainheading'>Hello world</h1>
    <h1 className='mainheading'>My name is {name}</h1>
      <button className='h-[20px] w-[150px] bg-slate-500 text-white' onClick={updateCar}>Update Record</button>
    {
      items.map((car,index)=>{ 
        return(
          <span className='flex flex-col'>{car.name}</span>
        )
      })
    }

    {/* {
      array2.map((car)=>{
        return(
          <span className='flex flex-col'>{car.name}</span>
        
        )
      })
    } */}
    
    {/* text */}
    </>
  )
}
//for(int i = 0 ; i<array.length ; i++)  array[i]