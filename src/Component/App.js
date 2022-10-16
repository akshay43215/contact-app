 
import './App.css';
import { Routes, Route ,Link} from "react-router-dom"
import Home from '../Pages/Home';
import Favorite from '../Pages/Favorite';
function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <ul>
        <li>
          <Link to= '/'>home page</Link>
        </li>
        <li>
          <Link to= 'favorite'>favorited=s</Link>

            

        </li>
      </ul>
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
