import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { NavLink } from 'react-router-dom'

function Berbaque() {
    const [berbaque, setberbaque] = useState([])
    useEffect(() => {
        getberbaque()

    }, [])

    const getberbaque = async () => {
        const check = localStorage.getItem('berbaque')
        if (check) {
            setberbaque(JSON.parse(check))
        }
        else {
            const Api = await fetch('https://api.spoonacular.com/recipes/random?number=20&apiKey=d1d022ffa3fb42b58d9f7c249b31f7e8&tags=pork')
            const data = await Api.json()
            localStorage.setItem("berbaque",JSON.stringify(data.recipes))
            setberbaque(data.recipes)
            console.log(data.recipes)
        }

    }

  return (
    <div>
        <div>
            <Wrapper>
                <h3>Pork Bowl</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: true,
                    pagination: false,
                    drag: "free",
                    gap: '5rem'
                }}>
                    {berbaque.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <NavLink to={'/Recipes/'+recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                    </NavLink>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>

    </div>
  )
}
const Wrapper = styled.div`
margin:4rem 0rem;
`
const Card = styled.div`
width:355px;
min-height:20rem;
border-radius:15px; 
overflow:hidden;
position:relative;

 img{
    border-radius:3px;   
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`
const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Berbaque