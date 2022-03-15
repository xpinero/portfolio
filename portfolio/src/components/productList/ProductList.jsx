import React from 'react'
import "./productList.css"
import Product from "../product/Product"

const ProductList = () => {
  return (
    <div className='productList'>
      <div class="productList-texts">
        <h1 className='productList-title'>Create & inspire</h1>
        <p className='productList-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quo itaque odio corrupti sapiente commodi nesciunt tempore quidem porro voluptates?</p>
      </div>
      <div class="productList-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default ProductList