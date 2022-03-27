import {React,useState,useEffect } from 'react'
import {useParams}  from 'react-router-dom'
import styled from 'styled-components'
function Searched() {
    const[searchedRecipes, setSearchedRecipes]=useState('')
    let params=useParams()
    const getSearched = (name)=>{
        fetch(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=d1d022ffa3fb42b58d9f7c249b31f7e8&query=${name}`).then((data)=>{
          return data.json()
        }).then((completedata)=>{
          setSearchedRecipes(completedata.results)
        })  
    }
    useEffect(()=>{
        getSearched(params.search)
    },[params.search]) 
  return (
    <Grid>
        {searchedRecipes && searchedRecipes.map((item)=>{
           return (
           <Card key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
            </Card>
            )
        })}
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
     border-radius:2.1rem;
}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}

`;
export default Searched