const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')
const  { products, categories, customers, carts } = require('./datasets')

const initLocalstorage = () => {
  if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('categories', JSON.stringify(categories));
  localStorage.setItem('customers', JSON.stringify(customers));
  localStorage.setItem('carts', JSON.stringify(carts));
}

initLocalstorage();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
