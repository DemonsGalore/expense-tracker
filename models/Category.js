const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

module.exports = Category = mongoose.model('categories', categorySchema);
