import React, { Component } from "react";
import "./App.css";
import SearchProduct from "./SearchProduct/SearchProduct";
class App extends Component {
  state = {
    products: [
      {
        ean: 12312323,
        name: "Toy"
      },
      {
        ean: 12312323,
        name: "Doll"
      },
      {
        ean: 12312323,
        name: "Toy"
      }
    ]
  };

  notFilter = {};

  searchHandler = event => {
    if (event.target.value) {
      this.notFilter = this.state;

      const filteredProduct = this.state.products.filter(product => {
        return product.name[0] === event.target.value;
      });

      this.setState({
        products: filteredProduct
      });
      
    } else {
      this.setState(this.notFilter);
    }
  };

  render() {
    return (
      <div className="App">
        <SearchProduct
          changed={this.searchHandler}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default App;
