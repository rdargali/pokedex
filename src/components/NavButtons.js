import React from "react";

const NavButtons = (props) => {
  return (
    <div>
      {props.goToPrevPage && <button onClick={props.goToPrevPage}>Prev</button>}
      {props.goToNextPage && <button onClick={props.goToNextPage}>Next</button>}
    </div>
  );
};

export default NavButtons;
