export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
}

export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number
  };
}
