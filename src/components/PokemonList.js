import React from "react";

const PokemonList = (props) => {
  const cardStyles = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
    borderRadius: "10px",
    width: "12rem",
    height: "12rem",
    textAlign: "center",
    // justifyContent: "cetner",
    alignItems: "center",
    margin: "5px",
  };

  const containerStyles = {
    padding: "6rem",
    margin: "auto",
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
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
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
