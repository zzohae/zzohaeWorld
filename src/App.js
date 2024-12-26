import React from 'react'
import { Routes, Route } from 'react-router-dom';
// layout
import Hd from './layout/Hd';
import Ft from './layout/Ft';
import ScrolltoTop from './layout/ScrolltoTop';
import Quick from './layout/Quick';
// page
import Home from './contents/home/Home';
import ProfileMain from './contents/sub_profile/ProfileMain';
import WebWorks from './contents/sub_webworks/WebWorks';
import DesignWorks from './contents/sub_designworks/DesignWorks';

export default function App() {
  return (
    <div>
      <ScrolltoTop></ScrolltoTop>
      <Hd></Hd>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<ProfileMain />}></Route>
        <Route path='/web_portfolio' element={<WebWorks />}></Route>
        <Route path='/design_portfolio' element={<DesignWorks />}></Route>
      </Routes>
      <Ft></Ft>
      <Quick />
    </div>
  )
}
