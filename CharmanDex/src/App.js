import "./App.css";
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import Catch from "./pages/Catch";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Pokemon DS' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact={true} element={<Homepage />} />
          <Route path="/pokedex" exact={true} element={<Pokedex />} />
          <Route path="/pokedex/:id" exact={true} element={<PokemonDetail />} />
          <Route path="/catch" exact={true} element={<Catch />} />
          <Route path="/info" exact={true} element={<Info />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
