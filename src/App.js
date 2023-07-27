import React from 'react'
import './App.css'
// import Main from './Chandio'
//react-router-dom
import Counter from './Counter';
import Main from './Chandio'
import { BrowserRouter,Routes,Route } from "react-router-dom";


export default function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Counter />}>
        <Route index element={<Counter />} />
      </Route>
      <Route path="/aboutme" element={<Main />}></Route>
    </Routes>
    
    
    </BrowserRouter>

  )
}

