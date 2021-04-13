import React, { Component } from "react";

export default class Searchform extends Component {
  state = {
    ingredient: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getRecipes(this.state.ingredient);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='ingredient'
          onChange={this.handleChange}
          value={this.state.ingredient}
          placeholder='search one ingredient'
        />
        <input type='submit' value='Ding It!' />
      </form>
    );
  }
}
