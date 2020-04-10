import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results);
    });
  }, [pokemon]);

  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default App;
