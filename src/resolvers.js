const _ = require('lodash')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getProducts: () => JSON.parse(localStorage.getItem('products')),
    getCategories: () => JSON.parse(localStorage.getItem('categories')),

    getProduct(parent, args, context, info) {
      return find(JSON.parse(localStorage.getItem('products')), { id: args.id });
    },
    getCustomer(parent, args, context, info) {
      return find(JSON.parse(localStorage.getItem('customers')), { id: args.id });
    },
    getCart(parent, args, context, info) {
      return find(JSON.parse(localStorage.getItem('carts')), { id: args.id });
    },
  },

  Mutation: {
    // PRODUCT
    addProduct(parent, args, context, info) {
      const products = JSON.parse(localStorage.getItem('products'))
      let product = args.input
      product.id = (new Date()).getTime()
      products.push(product)
      localStorage.setItem('products', JSON.stringify(products))
      return {
        code: '200',
        success: true,
        message: 'Your product was added successfully',
        product
      }
    },
    updateProduct(parent, args, context, info) {
      const products = JSON.parse(localStorage.getItem('products'))
      const index = products.findIndex(i => i.id === args.id)
      products[index] = args.input
      localStorage.setItem('products', JSON.stringify(products))
      return {
        code: '200',
        success: true,
        message: 'Your product was updated successfully',
        product: args.input
      }
    },
    deleteProduct(parent, args, context, info) {
      const products = JSON.parse(localStorage.getItem('products'))
      localStorage.setItem('products', JSON.stringify(products.filter(i => i.id !== args.id)))

      return {
        code: '200',
        success: true,
        message: 'Your product was deleted successfully',
        product: null
      }
    },

    // CUSTOMER
    addCustomer(parent, args, context, info) {
      const customers = JSON.parse(localStorage.getItem('customers'))
      let customer = args.input
      customer.id = (new Date()).getTime()
      customers.push(product)
      localStorage.setItem('customers', JSON.stringify(customers))
      return {
        code: '200',
        success: true,
        message: 'Your customer was added successfully',
        product
      }
    },
    updateCustomer(parent, args, context, info) {
      const customers = JSON.parse(localStorage.getItem('customers'))
      const index = customers.findIndex(i => i.id === args.id)
      customers[index] = args.input
      localStorage.setItem('customers', JSON.stringify(customers))
      return {
        code: '200',
        success: true,
        message: 'Your customer was updated successfully',
        product: args.input
      }
    },

    // CART
    addCart(parent, args, context, info) {
      const carts = JSON.parse(localStorage.getItem('carts'))
      let cart = args.input
      cart.id = (new Date()).getTime()
      carts.push(product)
      localStorage.setItem('carts', JSON.stringify(carts))
      return {
        code: '200',
        success: true,
        message: 'Your cart was added successfully',
        product
      }
    },
    updateCart(parent, args, context, info) {
      const carts = JSON.parse(localStorage.getItem('carts'))
      const index = carts.findIndex(i => i.id === args.id)
      carts[index] = args.input
      localStorage.setItem('carts', JSON.stringify(carts))
      return {
        code: '200',
        success: true,
        message: 'Your cart was updated successfully',
        product: args.input
      }
    },
  }
};

module.exports = resolvers
