import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({activeStep}) => {
    const array = [
        {
            id:1,
            name:"Counter"
        },
        {
            id:2,
            name:"About"
        },
       
    ]
  return (
    <nav>
      <ul className="flex space-x-4 justify-center">
        {array.map((step, index) => (
          <li
            
            className={`${
              index + 1 === activeStep
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            } py-2 px-4 rounded-lg cursor-pointer transition duration-300`}
          >
            
            {index===0 && <Link to="/">{step.name}</Link>}
            {index===1 && <Link to="/aboutme">{step.name}</Link>}
          </li>
        ))}
      </ul>
    </nav>

    
  )
}
