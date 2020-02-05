import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PARENT_CATEGORIES = gql`
  {
    parentCategories {
      _id
      name
    }
  }
`;

const Categories = () => {
  const { loading, error, data } = useQuery(PARENT_CATEGORIES);

  const classes = useStyles();
  const [category, setCategory] = useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <>
      {loading ?
        <p>Loading</p>
      : (
        <FormControl className={classes.formControl}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value="">None</MenuItem>
            {data.parentCategories.map(category => <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>)}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default Categories;
