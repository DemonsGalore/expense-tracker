const axios = require('axios');
const { Category, ParentCategory } = require('../../models');

module.exports = {
  Query: {
    category: async (root, { id }, context, info) => {
      const response = await axios.get(`http://localhost:5000/categories/${id}`);

      return response.data;
    },
    categories: async (root, args, context, info) => {
      const response = await axios.get('http://localhost:5000/categories');

      return response.data;
    },
    parentCategory: async (root, { id }, context, info) => {
      const response = await axios.get(`http://localhost:5000/parent_categories/${id}`);

      return response.data;
    },
    parentCategories: async (root, args, context, info) => {
      const response = await axios.get('http://localhost:5000/parent_categories');

      return response.data;
    }
  },
  Mutation: {
    addCategory: async (root, { name, parent }, context, info) => {
      const newCategory = new Category({
        name,
        parent
      });

      await axios.post('http://localhost:5000/categories', newCategory);

      const response = await axios.get(`http://localhost:5000/parent_categories/${parent}`);

      response.data.children.push(newCategory._id);

      await axios.put(`http://localhost:5000/parent_categories/${parent}`, response.data);

      return newCategory;
    },
    addParentCategory: async (root, { name }, context, info) => {
      const newParentCategory = new ParentCategory({
        name
      });

      await axios.post('http://localhost:5000/parent_categories', newParentCategory);

      return newParentCategory;
    },
    deleteParentCategory: async (root, { id }, context, info) => {
      return await axios.delete(`http://localhost:5000/parent_categories/${id}`);
    },
  }
};
