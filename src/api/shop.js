import _products from './products.json'

export default {
  getProducts: (cb) => setTimeout(() => cb(_products), 500),
  buyProducts: (payload, cb) => setTimeout(() => cb(), 500)
}
