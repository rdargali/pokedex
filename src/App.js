import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import NavButtons from "./components/NavButtons";
import Spinner from "./components/Spinner";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
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
        console.log(cancel);
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

  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
      <NavButtons
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
      />
    </div>
  );
};

export default App;
