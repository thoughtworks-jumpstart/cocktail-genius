import React, { Component } from "react";
import Drink from "./Drink";

class DrinksList extends Component {
  render() {
    if (this.props.drinks.length === 0) return <h1>No Drinks Found</h1>;

    return this.props.drinks.map((drink, i) => (
      <Drink drink={drink} key={i} handleOnClick={this.handleOnClick} />
    ));
  }

  handleOnClick = idDrink => {
    alert(idDrink);
  };
}

export default DrinksList;
