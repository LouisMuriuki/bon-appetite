import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi"
import './index.css'

function App() {
  return (

    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork></GiKnifeFork>
          <Logo to={'/'}>Sweeeet</Logo>
        </Nav>
        <div className="dessert" >
          <>
            <Search/>
            <Category />
          </>

        </div>
        <Pages />
      </Router>
    </div>


  );
}
const Logo = styled(NavLink)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family:'Lobster two', cursive;

`
const Nav = styled.div`
padding: 4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size: 2rem;
}
`
export default App;
