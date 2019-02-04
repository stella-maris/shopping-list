import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{maxWidth:500, margin:"auto"}}>
          <h1>Shopping List</h1>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
