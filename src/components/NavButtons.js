import React from "react";
import "../App.css";
const NavButtons = (props) => {
  const buttonStyle = {
    color: "yellow",
    borderRadius: "50px",
    width: "10rem",
    margin: "0 2rem",
    marginTop: "1rem",
    // fontSize: "25px",
  };

  return (
    <div className="button-container">
      {props.goToPrevPage && (
        <button
          className="btn btn-primary"
          style={buttonStyle}
          onClick={props.goToPrevPage}
        >
          <i class="fas fa-arrow-circle-left display-4" />
        </button>
      )}

      {props.goToNextPage && (
        <button
          className="btn btn-primary"
          style={buttonStyle}
          onClick={props.goToNextPage}
        >
          <i class="fas fa-arrow-circle-right display-4" />
        </button>
      )}
    </div>
  );
};

export default NavButtons;
