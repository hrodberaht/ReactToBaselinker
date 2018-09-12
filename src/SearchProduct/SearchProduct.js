import React, { Component } from 'react'
import Product from '../Product/Product'

export default class SearchProduct extends Component {
  
  showProducts = () => {
    return this.props.products.map((product, index) => {
      return <Product product={product} key={index} />
    })
  }

  
  render() {
    return (
      <div>
       <input type="text" onChange={this.props.changed}/>
       {this.showProducts()}
      </div>
    )
  }
}

