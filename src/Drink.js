import React from "react";

const Drink = props => (
  <div>
    <button
      type="submit"
      onClick={() => {
        props.handleOnClick(props.drink.idDrink);
      }}
    >
      {props.drink.strDrink}
    </button>
  </div>
);

export default Drink;
