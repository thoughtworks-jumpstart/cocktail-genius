import React, { Component } from "react";
import DrinksList from "./DrinksList";
import SearchForm from "./SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      drinks: []
    };
  }

  componentDidMount() {
    this.getData("gin");
  }

  getData = async search => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`
    );
    try {
      const data = await response.json();
      this.setState({
        drinks: data.drinks
      });
    } catch (error) {
      this.setState({
        drinks: []
      });
    }
  };

  render() {
    return (
      <div>
        <h1> Drink List! </h1>
        <SearchForm handleSubmit={this.getData} />
        <DrinksList drinks={this.state.drinks} />
      </div>
    );
  }
}

export default App;
