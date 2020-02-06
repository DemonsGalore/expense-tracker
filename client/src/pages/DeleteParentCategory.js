import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const DELETE_PARENT_CATEGORY = gql`
  mutation DeleteParentCategory($id: ID!) {
    deleteParentCategory(id: $id) {
      status
    }
  }
`;

const DeleteParentCategory = ({ parentCategories }) => {
  const [deleteParentCategory, { data }] = useMutation(DELETE_PARENT_CATEGORY);

  return (
    <div>
      <h1>Delete</h1>
      <ul>
        {parentCategories.map(
          category => <li key={category._id}>{category.name}<button type="button" onClick={() => deleteParentCategory({ variables: { id: category._id } })}>DELETE</button></li>
        )}
      </ul>
    </div>
  );
};

export default DeleteParentCategory;
