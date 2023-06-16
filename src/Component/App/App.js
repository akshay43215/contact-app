 
import { Routes, Route } from "react-router-dom"
import Home from '../../Pages/Home';
import Favorite from '../../Pages/Favorite';
import Nav from '../Nav/Nav';
import { useState } from 'react';
import './App.css';

  

function App() {

  const [contacts,setContacts] = useState([]);

  const formSubA =(data)=>{
    setContacts([...contacts,data]);
    //console.log(data);
  }
  const deletedContact=(id)=> {
    let newContact = contacts.filter((itm)=> itm.id !== id)
    setContacts(newContact)
  } 

  const favTogggle =(id)=> {
        console.log('fav id',id);
        
        let toggle = contacts.map((itm)=>{
          console.log('favtoggle maping')
        return itm.id===id ? {...itm, fav:!itm.fav } :itm //,console.log('favtogglemap return');
        });
    setContacts(toggle)
  }

 
  return (
    <div className="App">
     <Nav/>
      <Routes>
        <Route path="/" element={ <Home formSubB={formSubA} contactsB={contacts} deletedContact={deletedContact} favTogggle={favTogggle} /> } />
        <Route path="favorite" element={ <Favorite  contactsB={contacts} deletedContact={deletedContact} favTogggle={favTogggle} /> } />
        <Route path="*" element={ <h2>page not found</h2> } />
      </Routes>
    </div>
  );
}

export default App;
