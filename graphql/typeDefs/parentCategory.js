const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    parentCategory(_id: ID!): ParentCategory!
    parentCategories: [ParentCategory!]!
  }

  extend type Mutation {
    addParentCategory(name: String!): ParentCategory
    deleteParentCategory(id: ID): Status
  }

  type ParentCategory {
    _id: ID!
    name: String!
    children: [Category]
  }
`;
