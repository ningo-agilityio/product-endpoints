const  { products, categories, customers, carts } = require('./datasets')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getProducts: () => products,
    getCategories: () => categories,

    getProduct(parent, args, context, info) {
      return find(products, { id: args.id });
    },
    getCustomer(parent, args, context, info) {
      return find(customers, { id: args.id });
    },
    getCart(parent, args, context, info) {
      return find(carts, { id: args.id });
    },
  },
};

module.exports = resolvers
