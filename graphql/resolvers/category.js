const axios = require('axios');
const { Category, ParentCategory } = require('../../models');

module.exports = {
  Query: {
    category: async (root, { id }, context, info) => {
      const { data } = await axios.get(`http://localhost:3000/categories/${id}`);
      
      return data;
    },
    categories: async (root, args, context, info) => {
      const { data } = await axios.get('http://localhost:3000/categories');

      return data;
    },
    parentCategory: async (root, { id }, context, info) => {
      const { data } = await axios.get(`http://localhost:3000/parent_categories/${id}`);
      
      return data;
    },
    parentCategories: async (root, args, context, info) => {
      const { data } = await axios.get('http://localhost:3000/parent_categories');

      return data;
    }
  },
  Mutation: {
    addCategory: async (root, args, context, info) => {
      const { name, parent } = args;

      const newCategory = new Category({
        name,
        parent
      });

      console.log(newCategory);
      

      await axios.post('http://localhost:3000/categories', newCategory);

      const {data} = await axios.get(`http://localhost:3000/parent_categories/${parent}`);

      data.children.push(newCategory._id);

      await axios.put(`http://localhost:3000/parent_categories/${parent}`, data);
      

      return newCategory;
    },
    addParentCategory: async (root, args, context, info) => {
      const { name } = args;

      const newParentCategory = new ParentCategory({
        name
      });

      await axios.post('http://localhost:3000/parent_categories', newParentCategory);

      return newParentCategory;
    }
  }
};
