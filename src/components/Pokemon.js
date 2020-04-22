import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import "../App.css";

import axios from "axios";

const Pokemon = (props) => {
  let { name } = props.match.params;

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const [pokemonName, setPokemonName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [img, setImg] = useState("");
  const [backImg, setBackImg] = useState("");
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [specialAttack, setSpecialAttack] = useState(0);
  const [specialDefense, setSpecialDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setLoading(true);
      setPokemon(res.data);
      setPokemonType(res.data.types);
      setPokemonName(res.data.name);
      setAbilities(res.data.abilities);
      setImg(res.data.sprites.front_default);
      setBackImg(res.data.sprites.back_default);

      setSpeed(res.data.stats[0].base_stat);
      setSpecialDefense(res.data.stats[1].base_stat);
      setSpecialAttack(res.data.stats[2].base_stat);
      setDefense(res.data.stats[3].base_stat);
      setAttack(res.data.stats[4].base_stat);
      setHp(res.data.stats[5].base_stat);
      setLoading(false);
    });
  }, [name]);

  const titleSection = (
    <h1>{pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)}</h1>
  );

  const spritesSection = (
    <div className="sprites">
      <img src={img} alt={pokemon.name} />
      {backImg && <img src={backImg} alt={pokemon.name} />}
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

  const heightWeightSection = (
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
    <div className="base-stats">
      <strong>HP</strong>
      <div className="progress mb-2">
        <div
          className="hp progress-bar"
          role="progressbar"
          // aria-valuenow=""
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${hp / 2}%`, backgroundColor: "red" }}
        >
          {hp}
        </div>
      </div>
      <strong>Attack</strong>
      <div className="progress mb-2">
        <div
          className="attack progress-bar"
          role="progressbar"
          // aria-valuenow=""
          aria-valuemin="0"
          aria-valuemax="200"
          style={{ width: `${attack / 2}%`, backgroundColor: "darkorange" }}
        >
          {attack}
        </div>
      </div>
      <strong>Defense</strong>
      <div className="progress mb-2">
        <div
          className="defense progress-bar"
          role="progressbar"
          // aria-valuenow=""
          aria-valuemin="0"
          aria-valuemax="200"
          style={{ width: `${defense / 2}%`, backgroundColor: "yellow" }}
        >
          {defense}
        </div>
      </div>
      <strong>Special Attack</strong>
      <div className="progress mb-2">
        <div
          className="special-attack progress-bar"
          role="progressbar"
          // aria-valuenow=""
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${specialAttack / 2}%`, backgroundColor: "blue" }}
        >
          {specialAttack}
        </div>
      </div>
      <strong>Special Defense</strong>
      <div className="progress mb-2">
        <div
          className="special-defense progress-bar"
          role="progressbar"
          // aria-valuenow=""
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${specialDefense / 2}%`, backgroundColor: "green" }}
        >
          {specialDefense}
        </div>
      </div>
      <strong>Speed</strong>
      <div className="progress ">
        <div
          className="speed progress-bar"
          role="progressbar"
          // aria-valuenow=""
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${speed / 2}%`, backgroundColor: "pink" }}
        >
          {speed}
        </div>
      </div>
    </div>
  );
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {titleSection}
        {spritesSection}
        {typesSection}
        {heightWeightSection}
        {abilitiesSection}
        {statSection}
        <Link to="/">
          <i className="fas fa-undo-alt display-3 back" />
        </Link>
      </div>
    );
  }
};

export default Pokemon;
