import React from 'react'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>{children}</div>
  </div>
)

export default ProductsList
