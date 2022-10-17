 
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from '../../Pages/Home';
import Favorite from '../../Pages/Favorite';
import Nav from '../Nav/Nav';
function App() {
  return (
    <div className="App">
     <Nav/>
       
     
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="favorite" element={ <Favorite/> } />
        <Route path="*" element={ <h2>page not found</h2> } />
      </Routes>
    </div>
  );
}

export default App;
