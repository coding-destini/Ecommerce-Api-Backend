const mongoose = require('mongoose'); // Importing the Mongoose library
const VariantSchema = require('./variant')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  variants: [VariantSchema],
}, {
  timestamps: true
});

const Product = mongoose.model('Product', ProductSchema); // Creating a model named 'Product' using the defined schema

module.exports = Product; // Exporting the 'Product' model for use in other files
