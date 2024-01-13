const mongoose = require('mongoose'); // Importing the Mongoose library

const VariantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    additionalCost: {
        type: Number,
        required: true
    },
    stockCount: {
        type: Number,
        required: true
    },
});

module.exports = VariantSchema;
