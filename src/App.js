import React from 'react';
import './App.css'; 
import Drink from './Drink';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      drinks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/drinks')
    .then(res => res.json())
    .then(drinks => this.setState({drinks: drinks}))
  }

  render() {
    return (
        <div>
          {this.state.drinks.map(drink => <Drink drink={drink} key={drink.id}/>)}  
        </div>
    )
}
}

export default App
