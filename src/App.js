import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product';
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


  showProducts = () => {
    return this.state.products.map((product, index) => {
      return <Product product={product} key={index} />
    })
  }
  render() {
    return (
      <div className="App">
      <SearchProduct search={this.search}/>
        <div className="Product">
          {this.showProducts()}
        </div>
      </div>
    );
  }
}

export default App;
