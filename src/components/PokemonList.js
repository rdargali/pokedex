import React from "react";

const PokemonList = (props) => {
  return (
    <div>
      {props.pokemon.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
