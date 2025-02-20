import React from 'react'
import { Routes, Route } from "react-router-dom";
import Decor from '../pages/decor/Decor'
import Home from '../pages/home/Home'
import Ceramics from '../pages/ceramics/Ceramics'
import Jewellery from '../pages/jewellery/Jewellery'
import Skincare from '../pages/skincare/SkinCare'


const Approutes = () => {



  return (

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/decor' element={<Decor/>}/>
        <Route path='/ceramics' element={<Ceramics/>}/>
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='*' element={<><h1>page is not fount!</h1></>}/>
    </Routes>
  )
}

export default Approutes