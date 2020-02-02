const axios = require('axios');
const { Expense } = require('../../models');

module.exports = {
  Query: {
    expense: async (root, { id }, context, info) => {
      const response = await axios.get(`http://localhost:5000/expenses/${id}`);
      
      return response.data;
    },
    expenses: async (root, args, context, info) => {
      const response = await axios.get('http://localhost:5000/expenses');

      return response.data;
    },
    expensesFromCategory: async (root, { category }, context, info) => {
      const response = await axios.get('http://localhost:5000/expenses');

      return response.data.filter(expense => expense.category === category);
    }
  },
  Mutation: {
    addExpense: async (root, args, context, info) => {
      const { title, date, category } = args;

      const newExpense = new Expense({
        title,
        date,
        category
      });

      await axios.post('http://localhost:5000/expenses', newExpense);

      const response = await axios.get(`http://localhost:5000/categories/${category}`);

      response.data.expenses.push(newExpense._id);

      await axios.put(`http://localhost:5000/categories/${category}`, response.data);

      return newExpense;
    }
  }
};
