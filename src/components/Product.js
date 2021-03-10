import React from 'react'

const Product = ({ price, quantity, title }) => (
  <div >
    <p>{title}</p> 
    <p>Price - &#36;{price}{quantity ? ` x ${quantity}` : null}</p> 
  </div>
)

export default Product
