import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from  'react-icons/gi'
import styled from 'styled-components'
import React from 'react'
import {NavLink} from 'react-router-dom'


function Categoty() {
  return (
    <List>
        <NavLink to={'/Cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink >
        <NavLink to={'/Cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink >
        <NavLink to={'/Cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink >
        <NavLink to={'/Cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink >
        


    </List>
  )
}
const List= styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem;
`
const SlInk=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
width:6rem;
height:6rem;
cursor:pointer;
background:linear-gradient(35deg,#494949, #313131);
 
h4{
    color:white;    
}
svg{
  color:white;
  fontsize:1.5rem;
}
&.active{
    background:linear-gradient(to right, #f27121, #e94057) ;
    svg{
        color:white;
    }
    h4{
        color:white ;
    }

}
`

export default Categoty