import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { NavLink } from 'react-router-dom'

function Popular() {

    const [popular, setPopular] = useState([])
    useEffect(() => {
        getPopular()

    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem('popular')
        if (check) {
            setPopular(JSON.parse(check))
        }
        else {
            const Api = await fetch('https://api.spoonacular.com/recipes/random?number=9&apiKey=d1d022ffa3fb42b58d9f7c249b31f7e8')
            const data = await Api.json()
            localStorage.setItem("popular",JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data.recipes)
        }

    }


    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: '3rem'
                }}>
                    {popular.map(recipe => {
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

    )
}
const Wrapper = styled.div`
margin:5rem 0rem;
`
const Card = styled.div`
min-height:20rem;
border-radius:5px; 
overflow:hidden;
position:relative;

 img{
    border-radius:5px;   
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

export default Popular