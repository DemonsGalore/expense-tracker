const { gql } = require('apollo-server-express');

module.exports = gql`
  type Status {
    status: Int
    id: ID
  }
`;
