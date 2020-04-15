import React from "react";

import "../App.css";

const PokemonList = (props) => {
  const cardStyle = {
    width: "10rem",
    display: "inline-block",
    // backgroundolor: "rgba(255,255,255,0.8)",
  };

  return (
    <div className="pl-container">
      {props.pokemon.map((pokemon) => (
        <div key={pokemon.name} className="card bg-light m-3" style={cardStyle}>
          <div>
            <img
              className="card-img-top"
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
              alt={`${pokemon.name}`}
            />
            <div className="card-title text-center">
              <strong>
                {pokemon.name.charAt(0).toUpperCase() +
                  pokemon.name.substring(1)}
              </strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
