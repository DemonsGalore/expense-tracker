import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Categories from './pages/Categories';
import CreateParentCategory from './pages/CreateParentCategory';
import './App.css';
import { decrement, increment } from './actions/counterActions';

const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h3">Expense Tracker</Typography>
      <Categories />
      <CreateParentCategory />
      <h1>Counter:</h1>{counter}
      <button type="button" onClick={() => dispatch(increment(5))}>count up</button>
      <button type="button" onClick={() => dispatch(decrement())}>count down</button>
    </>
  );
};

export default App;
