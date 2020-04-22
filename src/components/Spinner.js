import React from "react";

import Spinner from "../assets/charmander-loading.gif";

export default () => {
  const spinnerStyle = {
    width: "200px",
    margin: "40px auto",
    marginTop: "30vh",
    display: "block",
    backgroundColor: "transparent",
  };
  return (
    <div>
      <img src={Spinner} alt="loading..." style={spinnerStyle} />
    </div>
  );
};
