import React, { Component } from 'react';
import './App.css';
import SearchProduct from './SearchProduct/SearchProduct'
class App extends Component {
  state = {
    products: [
      {
        ean: 12312323,
        name: 'Toy'
      },
      {
        ean: 12312323,
        name: 'Doll'
      },
    ]
  }
  
  search = (e) => {
    console.log(e);
  }


  
  render() {
    return (
      <div className="App">
      <SearchProduct products={this.state.products}/>
      </div>
    );
  }
}

export default App;
