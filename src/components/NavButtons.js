import React from "react";

const NavButtons = (props) => {
  const buttonStyle = {
    color: "yellow",

    width: "10rem",
    fontSize: "25px",
  };

  const containerStyle = {
    // margin: "0 15vw",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={containerStyle}>
      {props.goToPrevPage && (
        <button
          className="btn btn-light"
          style={buttonStyle}
          onClick={props.goToPrevPage}
        >
          <i class="fas fa-arrow-circle-left" />
        </button>
      )}

      {props.children}
      {props.goToNextPage && (
        <button
          className="btn btn-light"
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
