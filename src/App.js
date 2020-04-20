import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import NavButtons from "./components/NavButtons";
import Spinner from "./components/Spinner";
import Header from "./components/Header";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=50"
  );
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemon(res.data.results);
        setPrevPage(res.data.previous);
        setNextPage(res.data.next);
        setLoading(false);
      });

    return () => cancel();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage);
  };

  if (loading) return <Spinner />;

  console.log(pokemon);

  return (
    <div className="App">
      {/* <Header /> */}

      <NavButtons
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
      />
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default App;
