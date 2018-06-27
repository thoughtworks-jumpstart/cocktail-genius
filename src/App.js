import React, { Component } from "react";
import Cocktails from "./Cocktails";
import SearchBar from "./SearchBar";

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
        this.setState ({
            drinks: []
        })
    }
  };

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.getData} />
        <Cocktails drinks={this.state.drinks} />
      </div>
    );
  }
}

export default App;
