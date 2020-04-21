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

  const baseStats = pokemon.stats;

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
        <span>
          <strong>Height:</strong> {((pokemon.height / 10) * 3.2808).toFixed(2)}{" "}
          ft
        </span>
        <span>
          <strong>Weight:</strong>{" "}
          {((pokemon.weight / 10) * 2.20462).toFixed(2)} lbs
        </span>
      </div>

      <div className="abilities">
        <strong>Abilities:</strong>
        {pokemon.abilities &&
          pokemon.abilities.map((ability) => (
            <span key={ability.ability.name}>
              {ability.ability.name.charAt(0).toUpperCase() +
                ability.ability.name.substring(1)}
              {ability.is_hidden && "(hidden ability)"}
            </span>
          ))}
      </div>
      <div className="base-stats">
        <h4>Base Stats</h4>
        {baseStats &&
          baseStats
            .slice(0)
            .reverse()
            .map((stat) => {
              return (
                <div key={stat.stat.name} className={stat.stat.name}>
                  {stat.stat.name} {stat.base_stat}
                  {}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Pokemon;
