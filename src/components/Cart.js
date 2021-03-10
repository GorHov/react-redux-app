import { Button } from '@material-ui/core'
import React from 'react'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const product = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <p>Please add some products to cart</p>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{product}</div>
      <p>Total: &#36;{total}</p>
      <Button 
        variant="contained" color="primary"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </Button>
    </div>
  )
}

export default Cart
