import React from "react";

const PokemonList = (props) => {
  const cardStyle = {
    width: "10rem",
    display: "inline-block",
    // backgroundolor: "rgba(255,255,255,0.8)",
  };

  const containterStyle = {
    margin: "10px auto",
    maxWidth: "80%",
  };

  return (
    <div style={containterStyle}>
      {props.pokemon.map((pokemon) => (
        <div key={pokemon.name} className="card m-4 bg-light" style={cardStyle}>
          <div>
            <img
              className="card-img-top"
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
              alt={`${pokemon.name}`}
            />
            <h4 className="card-title text-center">
              <strong>
                {pokemon.name.charAt(0).toUpperCase() +
                  pokemon.name.substring(1)}
              </strong>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
