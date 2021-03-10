import React from 'react'
import { connect } from 'react-redux'
import { addProdutToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addProdutToCart }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addProdutToCart(product.id)} />
    )}
  </ProductsList>
)



const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(mapStateToProps,{ addProdutToCart })(ProductsContainer)
