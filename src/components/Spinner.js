import React from "react";

export default () => {
  const spinnerStyle = {
    margin: "40px auto",
    marginTop: "30vh",
    display: "block",

    width: "10rem",
    height: "10rem",
  };
  return (
    <div
      style={spinnerStyle}
      className="spinner-border text-warning"
      role="status"
    ></div>
  );
};
