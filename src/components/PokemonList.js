import React from "react";

const PokemonList = (props) => {
  const cardStyles = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
    borderRadius: "",
    width: "12rem",
    height: "12rem",
    textAlign: "center",
    // justifyContent: "cetner",
    alignItems: "center",
    margin: "5px",
  };

  const containerStyles = {
    padding: "2px 16px",
  };

  const imgStyles = {
    margin: "2px auto",
  };

  return (
    <div>
      {props.pokemon.map((pokemon) => (
        <div key={pokemon.name} className="card" style={cardStyles}>
          <div className="container" style={containerStyles}>
            <img
              style={imgStyles}
              src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
              alt={`${pokemon.name}`}
            />
            <h4>
              <b>{pokemon.name}</b>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
