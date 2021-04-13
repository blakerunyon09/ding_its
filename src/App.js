import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    recipes: [],
  };

  APP_ID = "61c15b49";
  APP_KEY = "0bb89a89fa57510d24eabaf14ef99a78";

  getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`
    )
      .then(res => res.json())
      .then(console.log);
  };

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return <div className='App'></div>;
  }
}

export default App;
