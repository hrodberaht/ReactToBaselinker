import React, { Component } from 'react'
import Product from '../Product/Product'

export default class SearchProduct extends Component {
  products = this.props.state.products;
  showProducts = () => {
    return this.products.map((product, index) => {
      return <Product product={product} key={index} />
    })
  }

  

  

  render() {
    let productsList = null;
    if(this.props.state.showProducts){
      productsList = this.showProducts();
    }
    return (
      <div>
        <input type="text" />
        <button onClick={this.props.toggleProducts}></button>
        {productsList}
      </div>
    )
  }
}

