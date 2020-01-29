const axios = require('axios');

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
  Mutation: {}
};
