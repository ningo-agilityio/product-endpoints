const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # ENUMS
  enum Colors {
    White
    Black
    Pink
    Red
    Yellow
    Blue
    Green
  }

  enum Sizes {
    XS
    S
    M
    L
    XL
    XXL
  }

  # SCHEMAS
  type Product {
    id: ID
    name: String
    quantity: Int
    price: Float
    thumbnail: String
    description: String
    category: Category
    size: Sizes
    color: Colors
  }

  type Category {
    id: ID
    name: String
    description: String
  }

  type Cart {
    id: ID
    product: Product
    quantity: Int
    customer: Customer
  }

  type Customer {
    id: ID
    username: String
    first_name: String
    last_name: String
    avatar_url: String
    gender: Boolean # true: male, false: female
  }

  # INPUT PARAM
  input productInput {
    name: String
    quantity: Int
    price: Float
    thumbnail: String
    description: String
    category: Int
    size: String
    color: String
  }

  input customerInput {
    username: String
    first_name: String
    last_name: String
    avatar_url: String
    gender: Boolean # true: male, false: female
  }

  input cartInput {
    product: Int
    quantity: Int
    customer: Int
  }

  # RESPONSES
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type ProductMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    product: Product
  }

  type CustomerMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    customer: Customer
  }

  type CartMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    cart: Cart
  }

  # QUERIES
  type Query {
    getProducts: [Product]
    getCategories: [Category]
    getProduct(id: String!): Product
    getCustomer(id: String!): Customer
    getCart(id: String!): Cart
  }

  # MUTATIONS
  type Mutation {
    addProduct(input: productInput!): ProductMutationResponse
    updateProduct(id: String!, input: productInput!): ProductMutationResponse
    deleteProduct(id: String!): ProductMutationResponse

    addCustomer(input: customerInput): CustomerMutationResponse
    updateCustomer(id: String!, input: customerInput): CustomerMutationResponse

    addCart(input: cartInput): CartMutationResponse
    updateCart(id: String!, input: cartInput): CartMutationResponse
  }
`;

module.exports = typeDefs
