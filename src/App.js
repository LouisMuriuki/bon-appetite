import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from 'react-router-dom'
import Search from "./components/Search";

function App() {
  return (

    <div className="App">
      <Router>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>


  );
}

export default App;
