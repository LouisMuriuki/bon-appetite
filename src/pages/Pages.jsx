import React from 'react'
import Home from './Home'
import{Route,Routes} from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'

function Pages() {
  return (

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cuisine/:type' element={<Cuisine/>}/>
        <Route path='/Searched/:search' element={<Searched/>}/>
      </Routes>
  
  ) 
}

export default Pages