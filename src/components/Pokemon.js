import React, { useEffect, useState } from "react";

import axios from "axios";

const Pokemon = (props) => {
  let { name } = props.match.params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokemon(res.data));
  }, [name]);

  //   console.log(pokemon);

  //   console.log(pokemon.sprites);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites ? pokemon.sprites.front_default : null}
        alt={pokemon.name}
      />
    </div>
  );
};

export default Pokemon;
