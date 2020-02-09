import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_PARENT_CATEGORIES } from '../grapqhl/queries';
import { DELETE_PARENT_CATEGORY } from '../grapqhl/mutations';
import Typography from '@material-ui/core/Typography';

const Categories = () => {
  const { data, loading, error } = useQuery(GET_PARENT_CATEGORIES);

  const [deleteParentCategory] = useMutation(
    DELETE_PARENT_CATEGORY,
    {
      update(cache, { data: { deleteParentCategory } }) {
        const { parentCategories } = cache.readQuery({ query: GET_PARENT_CATEGORIES });

        cache.writeQuery({
          query: GET_PARENT_CATEGORIES,
          data: { parentCategories: parentCategories.filter(category => category._id !== deleteParentCategory.id) },
        });
      }
    }
  );

  return (
    <>
      {loading ?
        <p>Loading...</p>
      : <>
        {(data && data.parentCategories.length > 0) ? (
          <>
            <Typography variant="h5">Kategorien</Typography>
            <ul>
              {data.parentCategories.map(category => <li key={category._id}>{category.name}
                <button type="button" onClick={() => deleteParentCategory({ variables: { id: category._id } })}>DELETE</button>
              </li>)}
            </ul>
          </>
        ) : (
          <p>Data not found</p>
        )}
      </>}
    </>
  );
};

export default Categories;
