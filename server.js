const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// ApolloServer initialization
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// ExpressServer initialization
const app = express();
app.disable('x-powered-by');
server.applyMiddleware({ app });

// start server
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
