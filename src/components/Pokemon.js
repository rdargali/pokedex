import React from "react";

const Pokemon = (props) => {
  let { pokemon } = props.match.params;
  return (
    <div>
      <h1>{pokemon}</h1>
    </div>
  );
};

export default Pokemon;
