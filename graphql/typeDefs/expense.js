const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    expense(_id: ID!): Expense
    expenses: [Expense]
    expensesFromCategory(category: ID!): [Expense]
  }

  extend type Mutation {
    addExpense(
      title: String!
      date: String!
      category: ID!
    ): Expense
  }

  type Expense {
    _id: ID!
    title: String!
    date: String!
    category: Category!
  }
`;
