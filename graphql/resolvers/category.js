const axios = require('axios');
const mongoose = require('mongoose');
const { Category } = require('../../models');

module.exports = {
  Query: {
    category: async (root, { id }, context, info) => {
      const { data } = await axios.get(`http://localhost:3000/categories/${id}`);
      
      return data;
    },
    categories: async (root, args, context, info) => {
      const { data } = await axios.get('http://localhost:3000/categories');

      return data;
    }
  },
  Mutation: {
    addCategory: async (root, args, context, info) => {
      const { name } = args;

      const newCategory = new Category({
        name
      });

      await axios.post('http://localhost:3000/categories', newCategory);

      return newCategory;
    }
  }
};
