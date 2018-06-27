import React, { Component } from "react";
import Cocktail from './Cocktail'

class Cocktails extends Component {


  handleOnClick= (idDrink) => {
    alert (idDrink)
  }

  render() {
    if (this.props.drinks.length > 0) {
      const sortedDrinks = this.props.drinks.sort((a, b) => {
        var nameA = a.strDrink; // ignore upper and lowercase
        var nameB = b.strDrink; // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      return (
        <div>
          <h1> Drink List! </h1>
          <ul>
            {sortedDrinks.map((drink, i) => {
              return (
                <Cocktail key={i} drink={drink} />
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <h1>No Drinks Found</h1>;
    }
  }
}

export default Cocktails;
