import React from 'react'
import Product from './Product'
import { Button, Card } from '@material-ui/core'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Card style = {
    {
      marginBottom: 20,
      padding: 10,
      width: "200px",
      display: "flex",
      flexDirection: "column"
    }
  } >
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <Button variant="contained" color="primary"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </Button>
  </Card>
)

export default ProductItem
