import React from "react";
import "../App.css";
const NavButtons = (props) => {
  const buttonStyle = {
    color: "yellow",

    width: "10rem",
    // fontSize: "25px",
  };

  return (
    <div className="button-container">
      {props.goToPrevPage && (
        <button
          className="btn btn-primary btn-lg"
          style={buttonStyle}
          onClick={props.goToPrevPage}
        >
          <i class="fas fa-arrow-circle-left" />
        </button>
      )}

      {props.goToNextPage && (
        <button
          className="btn btn-primary btn-lg"
          style={buttonStyle}
          onClick={props.goToNextPage}
        >
          <i class="fas fa-arrow-circle-right" />
        </button>
      )}
    </div>
  );
};

export default NavButtons;
