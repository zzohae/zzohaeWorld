import React from 'react'
import { Routes, Route } from 'react-router-dom';
// layout
import Hd from './layout/Hd';
import Ft from './layout/Ft';
// page
import Home from './contents/home/Home';

export default function App() {
  return (
    <div>
      <Hd></Hd>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Ft></Ft>
    </div>
  )
}
