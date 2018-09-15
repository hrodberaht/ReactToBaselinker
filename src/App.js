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
    ],
    showProducts: false,
  }

  search = (e) => {
    console.log(e);
  }

  toggleProducts = () => {
    const showProducts = this.state.showProducts;
    this.setState({ showProducts: !showProducts });
  }


  render() {
    return (
      <div className="App">
        <SearchProduct toggleProducts={this.toggleProducts} state={this.state} />
      </div>
    );
  }
}

export default App;
