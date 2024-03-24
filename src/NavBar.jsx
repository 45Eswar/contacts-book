import React from "react";
import "./Styles/NavBar.css";

function NavBar(props) {
  const handleHome = () => {
    props.getFormVisibility(false);
    props.getClearForm();
  };
  const handleAdd = () => {
    props.getFormVisibility(true);
    props.getClearForm();
  };

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item" onClick={handleHome}>
          <label> Home </label>
        </li>
        <li className="list-group-item" onClick={handleAdd}>
          <label> +Add </label>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
