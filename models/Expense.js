const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const expenseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: ObjectId,
    ref: 'catgeories',
  }
}, {
  timestamps: true
});

module.exports = Expense = mongoose.model('expenses', expenseSchema);
