import React from "react";
import { Component } from "react";
import "./styles/_style.scss";
import axios from "axios";
import RecipesFile from "./components/RecipesFile";
import foodlogo from "./assests/my-recipes-logo.png";
const apiId = "bb59dde2";
const apiKey = "1bfa693eea8ba743df24aa1084b99227";

class App extends Component {
  state = {
    meal: "",
    recipes: [],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getRecipes(this.state.meal);
  };
  handleMealChange = (event) => {
    this.setState({ meal: event.target.value });
  };

  getRecipes = (meal) => {
    axios
      .get(
        `https://api.edamam.com/search?q=${meal}&app_id=${apiId}&app_key=${apiKey}`
      )
      .then((response) => {
        this.setState({
          recipes: response.data.hits,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="container__subcontainer">
          <h1 className="form__heading">Yummy World</h1>
          <img src={foodlogo} className="form__logo" alt="foodlogo" />
        </div>
        <form className="form">
          <input
            className="form__input"
            onChange={this.handleMealChange}
            placeholder="Ingredients"
          />
          <button className="form__button" onClick={this.handleFormSubmit}>
            Get Results
          </button>
        </form>
        <div>
          <RecipesFile recipe={this.state.recipes} />
        </div>
      </div>
    );
  }
}

export default App;
