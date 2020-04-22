import React, { useEffect, useState } from "react";
import "../App.css";

import axios from "axios";

const Pokemon = (props) => {
  let { name } = props.match.params;

  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const [pokemonName, setPokemonName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [specialAttack, setSpecialAttack] = useState(0);
  const [specialDefense, setSpecialDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setLoading(true);
      setPokemon(res.data);
      setPokemonType(res.data.types);
      setPokemonName(res.data.name);
      setAbilities(res.data.abilities);

      setSpeed(res.data.stats[0].base_stat);
      setSpecialDefense(res.data.stats[1].base_stat);
      setSpecialAttack(res.data.stats[2].base_stat);
      setDefense(res.data.stats[3].base_stat);
      setAttack(res.data.stats[4].base_stat);
      setHp(res.data.stats[5].base_stat);
      setLoading(false);
    });
  }, [name]);
  // console.log(pokemon);

  const spritesSection = (
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
  );

  const typesSection = (
    <div className="types">
      {pokemonType.map((type) => (
        <span className={type.type.name} key={type.type.name}>
          {type.type.name.charAt(0).toUpperCase() + type.type.name.substring(1)}
        </span>
      ))}
    </div>
  );

  const abilitiesSection = (
    <div className="abilities">
      <strong>Abilities:</strong>
      {abilities.map((ability) => (
        <span key={ability.ability.name}>
          {ability.ability.name.charAt(0).toUpperCase() +
            ability.ability.name.substring(1)}
          {ability.is_hidden && "(hidden ability)"}
        </span>
      ))}
    </div>
  );

  const heightWeight = (
    <div className="hw">
      <span>
        <strong>Height:</strong> {((pokemon.height / 10) * 3.2808).toFixed(2)}{" "}
        ft
      </span>
      <span>
        <strong>Weight:</strong>
        {((pokemon.weight / 10) * 2.20462).toFixed(2)} lbs
      </span>
    </div>
  );

  const statSection = (
    <div>
      <h4>Base Stats</h4>
      <div className="base-stats">
        <div className="hp">hp {hp}</div>
        <div className="attack">attack {attack}</div>
        <div className="defense">defense {defense}</div>
        <div className="special-attack">spa {specialAttack}</div>
        <div className="special-defense">spd {specialDefense}</div>
        <div className="speed">speed {speed}</div>
      </div>
    </div>
  );

  return (
    <div>
      <h1>{pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)}</h1>
      {spritesSection}
      {typesSection}
      {heightWeight}
      {abilitiesSection}
      {statSection}
    </div>
  );
};

export default Pokemon;
