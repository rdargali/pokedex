import React, { useEffect, useState } from "react";

import axios from "axios";

const Pokemon = (props) => {
  let { id } = props.match.params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);

  console.log(pokemon);
  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default Pokemon;
