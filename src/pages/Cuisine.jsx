import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {NavLink, useParams} from 'react-router-dom'

function Cuisine() {

    const[cuisine, setCuisine]= useState=([])
    let params= useParams()
    const getCuisine=async (name)=>{
        const data =await('https://api.spoonacular.com/recipes/complexSearch?&apiKey=d1d022ffa3fb42b58d9f7c249b31f7e8&cuisine='+{name})
        const recipes=await data.json
         setCuisine(recipes.results)
    }
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])
  return (
    <div>
         
    </div>
  )
}

export default Cuisine