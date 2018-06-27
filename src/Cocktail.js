import React from "react";

const Cocktail = props => (
  <div>
    <li>
      <button
        type="submit"
        onClick={() => {
          this.handleOnClick(props.drink.idDrink);
        }}
      >
        {props.drink.strDrink}
      </button>
    </li>
  </div>
);

export default Cocktail;
