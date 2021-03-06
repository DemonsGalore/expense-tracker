const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    category(_id: ID!): Category!
    categories: [Category!]!
  }

  extend type Mutation {
    addCategory(
      name: String!
      parent: ID!
    ): Category
  }

  type Category {
    _id: ID!
    name: String!
    parent: Category!
  }
`;
