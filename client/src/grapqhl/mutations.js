import gql from 'graphql-tag';

export const ADD_PARENT_CATEGORY = gql`
  mutation AddParentCategory($name: String!) {
    addParentCategory(name: $name) {
      _id
      name
    }
  }
`;

export const DELETE_PARENT_CATEGORY = gql`
  mutation DeleteParentCategory($id: ID!) {
    deleteParentCategory(id: $id) {
      status
      id
    }
  }
`;
