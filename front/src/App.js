import "./App.css";
//import Card from './components/Card.jsx'
import Cards from "./components/Cards.jsx";
//import SearchBar from './components/SearchBar.jsx'
import Nav from "./components/Nav";
import { useState } from "react";
import { Routes, Route} from 'react-router-dom'
import About from "./components/About";
import Detail from "./components/Detail";
// en el front quede en routing ejercicio 3
function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`) // https://rickandmortyapi.com/api/character/ primera api y api del back http://localhost:3001/rickandmorty/onsearch
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  };
  const onClose = (id)=>{
    setCharacters(
      characters.filter(character=> character.id !== id)
    )
  };
  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch}></Nav>
      <Routes>
        <Route path="home" element={<Cards characters={characters} onClose={onClose}></Cards>} ></Route>
       <Route path="about" element={<About></About>}></Route>
       <Route path="detail/:detailId" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
