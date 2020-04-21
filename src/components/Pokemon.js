import React, { useEffect, useState } from "react";
import "../App.css";

import axios from "axios";

const Pokemon = (props) => {
  let { name } = props.match.params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokemon(res.data));
  }, [name]);

  console.log(pokemon);

  return (
    <div className="display 4">
      <h1>
        {pokemon.name &&
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
      </h1>
      <div className="sprites">
        <img
          src={pokemon.sprites && pokemon.sprites.front_default}
          // src={pokemon.sprites ? pokemon.sprites.front_default : null}
          alt={pokemon.name}
        />
        <img
          src={pokemon.sprites && pokemon.sprites.back_default}
          alt={pokemon.name}
        />
      </div>
      <div className="types">
        {pokemon.types &&
          pokemon.types.map((type) => (
            <span className={type.type.name} key={type.type.name}>
              {type.type.name.charAt(0).toUpperCase() +
                type.type.name.substring(1)}
            </span>
          ))}
        {/* {pokemon &&
          pokemon.types.map((type) => {
            return <span>hi</span>;
          })} */}
      </div>
      <div className="hw">
        <span>Height: {((pokemon.height / 10) * 3.2808).toFixed(2)} ft</span>
        <span>Weight: {((pokemon.weight / 10) * 2.20462).toFixed(2)} lbs</span>
      </div>

      <div className="abilities">
        Abilities:
        {pokemon.abilities &&
          pokemon.abilities.map((ability) => (
            <span key={ability.ability.name}>
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.substring(1)}
              {ability.is_hidden && "(hidden)"}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Pokemon;
