const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: ObjectId,
    ref: 'parent_categories',
  }
}, {
  timestamps: true
});

module.exports = Category = mongoose.model('categories', categorySchema);
