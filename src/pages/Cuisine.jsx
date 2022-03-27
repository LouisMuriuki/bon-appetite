import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {NavLink, useParams} from 'react-router-dom'

function Cuisine() {

    const[cuisine, setCuisine]= useState([])
    let params= useParams()
     useEffect(()=>{
      getCuisine(params.type)
  },[params.type])
    
    const getCuisine = (name)=>{
        fetch(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=d1d022ffa3fb42b58d9f7c249b31f7e8&cuisine=${name}`).then((data)=>{
          return data.json()
        }).then((completedata)=>{
          setCuisine(completedata.results)
        })  
    }
   
  return ( 
    <Grid>
        {cuisine && cuisine.map((item)=>{
           return (
           <Card >
              <img src={item.image} alt={item.id}/>
              <h4>{item.title}</h4>
            </Card>
            )
        })  
        } 
    </Grid>
  )
}
const Grid=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit, minmax(20rem,1fr));
grid-gap:3rem;
`;
const Card=styled.div`
img{
     width:100%;
     border-radius:2rem;
}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}

`;

export default Cuisine