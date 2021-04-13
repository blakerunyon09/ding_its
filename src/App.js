import './App.css';
import { Component } from 'react'
import Container from './components/Container';


class App extends Component {

  state = {
    recipes: []
  }

  APP_ID = '61c15b49'
  APP_KEY = '0bb89a89fa57510d24eabaf14ef99a78'

  getRecipes = () => {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`)
    .then(res => res.json())
    .then(({ hits }) => this.setState({
      recipes: hits
    }))
  }

  componentDidMount(){
    this.getRecipes()
  }

  render(){
    return (
      <div className="App">
        <Container recipes={this.state.recipes} />
      </div>
    );
  }

}

export default App;
