import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_PARENT_CATEGORY = gql`
  mutation AddParentCategory($name: String!) {
    addParentCategory(name: $name) {
      name
    }
  }
`;

const CreateParentCategory = () => {
  let input;
  const [addParentCategory, { data }] = useMutation(ADD_PARENT_CATEGORY);

  return (
    <div>
      <h1>New</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          addParentCategory({ variables: { name: input.value } });
          input.value = '';
        }}
      >
        <input ref={node => input = node } />
        <button type="submit">Add Parent Category</button>
      </form>
    </div>
  );
};

export default CreateParentCategory;
