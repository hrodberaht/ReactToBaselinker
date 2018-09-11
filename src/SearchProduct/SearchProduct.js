import React, { Component } from 'react'
import Product from '../Product/Product'

export default class SearchProduct extends Component {
  products = this.props.products;
  showProducts = () => {
    return this.products.map((product, index) => {
      return <Product product={product} key={index} />
    })
  }
  
  render() {
    return (
      <div>
       <input type="text" />
       {this.showProducts()}
      </div>
    )
  }
}

