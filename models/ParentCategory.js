const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const parentCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: {
    type: [ObjectId],
    ref: 'categories',
  }
}, {
  timestamps: true
});

module.exports = ParentCategory = mongoose.model('parent_categories', parentCategorySchema);
