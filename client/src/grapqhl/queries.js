import gql from 'graphql-tag';

export const GET_PARENT_CATEGORIES = gql`
  {
    parentCategories {
      _id
      name
    }
  }
`;
