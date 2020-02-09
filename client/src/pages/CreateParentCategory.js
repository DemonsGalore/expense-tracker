import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PARENT_CATEGORY } from '../grapqhl/mutations';
import { GET_PARENT_CATEGORIES } from '../grapqhl/queries';
import Typography from '@material-ui/core/Typography';

const CreateParentCategory = () => {
  const [category, setCategory] = useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  const [addParentCategory] = useMutation(
    ADD_PARENT_CATEGORY,
    {
      update(cache, { data: { addParentCategory } }) {
        const { parentCategories } = cache.readQuery({ query: GET_PARENT_CATEGORIES });

        cache.writeQuery({
          query: GET_PARENT_CATEGORIES,
          data: { parentCategories: parentCategories.concat([addParentCategory]) },
        });
      }
    }
  );

  return (
    <>
      <Typography variant="h5">Neue Kategorie</Typography>
      <form
        onSubmit={event => {
          event.preventDefault();
          addParentCategory({ variables: { name: category } });
          setCategory('');
        }}>
        <input onChange={handleChange} value={category} />
        <button type="submit">Add Parent Category</button>
      </form>
    </>
  );
};

export default CreateParentCategory;
